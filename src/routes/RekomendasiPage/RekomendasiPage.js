import { useState } from "react";
import PlacesSelection from "../../components/PlacesSelection/PlacesSelection";
import PlaceSummaryRow from "../../components/PlaceSummaryRow/PlaceSummaryRow";
import styles from './RekomendasiPage.module.scss'

/**
 * 
 * @param {{contents}} props 
 * @returns 
 */
const Recommendations = (props) => {
    return (
        <div className={styles.recommendations}>
            <PlaceSummaryRow which={props.contents}/>
            page: {props.contents}
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
                <Recommendations contents={selected}/>
            </section>
        </main>
    )
}

export default RekomendasiPage;