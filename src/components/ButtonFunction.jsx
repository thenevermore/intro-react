import React from "react";

const ButtonFunction = (props) => {
    const {id, color, text} = props;
    return <button id={id ? id : "0"} style={{ color: color ? color : "lightblue" }}>{ text ? text : "I'm button function default" }</button>
}

export default ButtonFunction;