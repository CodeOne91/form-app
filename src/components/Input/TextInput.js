import React  from "react";
import PropTypes from "prop-types";

const TextInput = ({ label,type, name, placeholder, value, onChange, required, minLength }) => (
    <div>
        {label ?  <label>{label}</label>:null}
        <input
            required={ required ? required : false}
            minLength={minLength ? minLength: null}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
);


 TextInput.propTypes={
     label: PropTypes.string,
     type: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     placeholder: PropTypes.string,
     minLength: PropTypes.number,
 }
export default TextInput;
