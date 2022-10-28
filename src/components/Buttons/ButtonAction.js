import style from './Button.module.scss';

const ButtonAction = (props)=>{
    return (
        <input type="submit" className={[style.button, style.isCta]} value={props.children}/>
    );
}

export default ButtonAction;