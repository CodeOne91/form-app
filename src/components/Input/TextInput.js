import React from "react";
import PropTypes from "prop-types";
import { BaseInput } from "../../styles/input";

function TextInput({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
  minLength,
}) {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <BaseInput
        required={required || false}
        minLength={minLength || null}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  minLength: PropTypes.number,
};
export default TextInput;
