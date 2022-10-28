import styles from './PlaceSummaryRow.module.scss';
import logo from '../NavBar/kerinci22-logo.png';
import { useQuery } from 'react-query';
import axios from 'axios';
import LoadingWidget from '../LoadingWidget/LoadingWidget';

const PlaceSummaryRow = (props) => {
    const placeData = useQuery(
        [`placeData-${props.which}`],
        async () => {
            if (typeof(props.data) != 'undefined') {
                return {}
            }
            if (props.which == 'none') {
                return {}
            }
            const r = await axios({
                'url':'/api/places/' + props.which,
                'method': 'get'
            });
            return r.data;
        }
    );
    return (
        <div className={styles.entry}>
            {
                (typeof(props.data) != 'undefined')
                ?
                    <>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.description}</p>
                    </>
                :
                    (placeData.status == "success")
                    ? <>
                    <h3>{placeData.data.name}</h3>
                    <p>{placeData.data.description}</p>
                    </>
                    : <LoadingWidget/>
            }
        </div>
    )
}

export default PlaceSummaryRow;