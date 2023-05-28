import InputField from "./InputField/InputField";
import classes from "./InputFields.module.css"
import { setInput, getTranslation } from "../../redux/translate-reducer";
import { connect } from "react-redux";

const InputFields = (props) => {


    function changeInput(event) {
        let text = event.target.value;
        props.setInput(text);
        props.getTranslation(text);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
            <h3 className={classes.language_header}>Russian</h3>
                <InputField onChange={changeInput} value={props.inputText}
                    placeholder="Click here and enter text to translate " disabled={false} />
            </div>
            <div>
                ---
                ---
            </div>
            <div className={classes.container}>
            <h3 className={classes.language_header}>English</h3>
            <InputField value={props.outputText} placeholder="Translation" disabled={true} />
            </div>
        </div>
    );
}


let mapStateToProps = (state) => {

    return {
        inputText: state.translator.inputText,
        outputText: state.translator.outputText
    }
}


const TranslateContainer = connect(mapStateToProps, { setInput, getTranslation })(InputFields);

export default TranslateContainer;

