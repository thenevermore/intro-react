import React, { Component } from "react";

class ButtonClass extends Component {
    
    render() {
        const {id, text, color } = this.props;
        return <button id={id} style={{ color: color}}>{ text }</button>
    }    
}

ButtonClass.defaultProps = {
    id : "0",
    text : "Button Default",
    color : "lightblue" 
}

export default ButtonClass;