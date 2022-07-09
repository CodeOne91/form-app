import React  from "react";
import PropTypes from "prop-types";

const RadioInput = ({ label,type, name, value, onChange }) => (
    <div>
        {label ?  <label>{label}</label>:null}
        <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
        />
    </div>
);

RadioInput.propTypes={
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string
}

export default RadioInput;
