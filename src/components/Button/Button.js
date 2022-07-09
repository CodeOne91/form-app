import React from 'react'
import PropTypes from "prop-types";

const Button = ({text,disabled, type, onClick}) => (
    <button
        disabled={disabled ? disabled : false}
        type={type}
        onClick={onClick}
    >{text}

    </button>
)
Button.propTypes = {
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    text: PropTypes.string,


}
export default Button
