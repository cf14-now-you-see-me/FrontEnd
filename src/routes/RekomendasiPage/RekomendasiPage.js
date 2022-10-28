import { useState } from "react";
import PlacesSelection from "../../components/PlacesSelection/PlacesSelection";
import PlaceSummaryRow from "../../components/PlaceSummaryRow/PlaceSummaryRow";
import styles from './RekomendasiPage.module.scss'
import { useQuery } from 'react-query';
import axios from 'axios';
import LoadingWidget from "../../components/LoadingWidget/LoadingWidget";
/**
 * 
 * @param {{contents}} props 
 * @returns 
 */
const Recommendations = (props) => {
    const recommData = useQuery(
        [`recommData-${props.which}`],
        async () => {
            if (props.which == 'none') {
                return []
            }
            const r = await axios({
                'url':'/api/places/' + props.which + '/recommend',
                'method': 'get'
            });
            return r.data;
        }
    );
    return (
        <div className={styles.recommendations}>
            {
                (recommData.status == "success")
                ? recommData.data.map((recom, index)=>{
                    return <PlaceSummaryRow data={recom}/>
                })
                : <LoadingWidget/>
            }
        </div>
    )
}

const RekomendasiPage = () => {
    const [selected, setSelected] = useState("none");
    const handleChange = (e) => {
        setSelected(e.target.selectedOptions[0].value);
    }
    return (
        <main>
            <section className="standardSection">
                <h2>Lihat Rekomendasi</h2>
                
                <PlacesSelection onChange={handleChange}/>
                <Recommendations which={selected}/>
            </section>
        </main>
    )
}

export default RekomendasiPage;