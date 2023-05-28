import classes from "./InputField.module.css";


const InputField = (props) => {
    
    return(
        <input type="text" onChange={props.onChange} value={props.value} disabled={props.disabled}
               placeholder={props.placeholder} className={props.className}></input>
    );
}

export default InputField;