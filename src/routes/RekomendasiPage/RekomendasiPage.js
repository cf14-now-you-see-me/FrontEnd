import { useState, useMemo } from "react";
import PlacesSelection from "../../components/PlacesSelection/PlacesSelection";
import PlaceSummaryRow from "../../components/PlaceSummaryRow/PlaceSummaryRow";
import styles from './RekomendasiPage.module.scss'
import { useQuery } from 'react-query';
import axios from 'axios';
import LoadingWidget from "../../components/LoadingWidget/LoadingWidget";
import { useLocation } from "react-router-dom";

// https://v5.reactrouter.com/web/example/query-parameters
const useUrlQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * 
 * @param {{contents}} props 
 * @returns 
 */
const Recommendations = (props) => {
    const query = useUrlQuery();
    const noManual = query.get('id') === null || isNaN(Number(query.get('id')));
    const recommData = useQuery(
        [`recommData-${props.which}`],
        async () => {
            let r;
            if (noManual) {
                if (props.which == 'none') {
                    return []
                }
                r = await axios({
                    'url':'/api/places/' + props.which + '/recommend',
                    'method': 'get'
                });
            } else { // id=?
                r = await axios({
                    'url':'/api/places/' + query.get('id') + '/recommend',
                    'method': 'get'
                });
            }
            return r.data;
        }
    );
    return (
        <div className={styles.recommendations}>
            {
                (!recommData.isLoading && recommData.status == "success")
                ? recommData.data.map((recom, index)=>{
                    return <PlaceSummaryRow data={recom}/>
                })
                : <LoadingWidget/>
            }
        </div>
    )
}

const RekomendasiPage = () => {
    const query = useUrlQuery();
    const noManual = query.get('id') === null || isNaN(Number(query.get('id')));
    const [selected, setSelected] = useState("none");
    const handleChange = (e) => {
        setSelected(e.target.selectedOptions[0].value);
    }
    return (
        <main>
            <section className="standardSection">
                <h2>Lihat Rekomendasi</h2>
                
                {noManual? <PlacesSelection onChange={handleChange}/> : <></>}
                <Recommendations which={selected}/>
            </section>
        </main>
    )
}

export default RekomendasiPage;