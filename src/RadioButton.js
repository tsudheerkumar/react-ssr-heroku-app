import React from "react";
import "./RadioButton.css";

const RadioButton = (props) => {
    return (
        <div className="radio-toolbar col-s-6 col-m-6 col-l-6">
            <input id={props.id} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default RadioButton;