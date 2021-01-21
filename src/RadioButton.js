import React from "react";
import "./RadioButton.css";

const RadioButton = (props) => {
    return (
        <div className="radio-toolbar col-s-3 col-m-3 col-l-3" aria-label={props.value}>
            <input name={props.label+props.id} onKeyPress={props.changed} id={props.id} onChange={props.changed} aria-label={props.value} value={props.value} type="radio" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default RadioButton;