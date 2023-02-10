import { Component, React } from "react";

import P from 'prop-types'

import "./styles.css"

export class Button extends Component {
    render() {
        const {text, onClick, disabled = false} = this.props // As props já vêem com o constructor, por isso do this

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

Button.defaulProps = {
  disabled: false,
}

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool
}
