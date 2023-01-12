import "./styles.css"

import { Component } from "react";

export class Button extends Component {
    render() {
        const {text, onClick, disabled} = this.props // As props já vêem com o constructor, por isso do this

        return (
        <button 
            className="button" 
            onClick={onClick}
            disabled={disabled}
        >
                
            {text}
        </button>
        )
    }
}