import React from "react";
import "./RadioButton.css";

const RadioButton = (props) => {
    return (
        <div className="radio-toolbar col-s-3 col-m-3 col-l-3">
            <input id={props.id} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default RadioButton;