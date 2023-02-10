import "./styles.css"
import React from "react"

import P from 'prop-types'

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
        className="text-input"
        onChange={handleChange}
        value={searchValue}
        type="search"
        placeholder="Search here..."
        />
    )
}

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired
}