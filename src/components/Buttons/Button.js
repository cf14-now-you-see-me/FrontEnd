import style from './Button.module.scss';

const Button = (props)=>{
    const styles = [style.button]
    if (props.cta) {
        styles.push(style.isCta)
    }
    return (
        <button onClick={props.onClick} className={styles.join(' ')}>
            {props.children}
        </button>
    );
}

export default Button;