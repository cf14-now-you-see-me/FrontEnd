/**
 * @param {{label?: string, name?: string, id: string}} props
 */
const DateSelection = (props)=>{
    if (typeof(props.name) == 'undefined') {
        props.name = props.id;
    }
    if (typeof(props.label) == 'undefined') {
        props.label = props.name;
    }
    return (
        <>
        <label for={props.id}>{props.label}</label>
        <input type="date"  style={{color: 'black'}} id={props.id} name={props.name}></input>
        </>
    )
}

export default DateSelection;