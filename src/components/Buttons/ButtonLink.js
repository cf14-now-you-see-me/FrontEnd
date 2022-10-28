import { Link } from 'react-router-dom';
import style from './Button.module.scss';

const ButtonLink = (props)=>{
    const styles = [style.button]
    if (props.cta) {
        styles.push(style.isCta)
    }
    if (props.noroute) {
        return (
            <a href={props.to} className={styles.join(' ')}>
                {props.children}
            </a>
        );
    }
    return (
        <Link to={props.to} className={styles.join(' ')}>
            {props.children}
        </Link>
    );
}

export default ButtonLink;