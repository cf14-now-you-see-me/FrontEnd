import styles from './PlaceSummaryRow.module.scss';
import logo from '../NavBar/kerinci22-logo.png';
const PlaceSummaryRow = (props) => {
    return (
        <div className={styles.entry}>
            <img src={logo}/>
            summary row: {props.which}
        </div>
    )
}

export default PlaceSummaryRow;