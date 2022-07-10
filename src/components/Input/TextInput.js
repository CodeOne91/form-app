import React from "react";
import PropTypes from "prop-types";
import { BaseInput } from "../../styles/input";
import { FormLabel } from "../../styles/text";

function TextInput({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
  minLength,
  onBlur,
}) {
  return (
    <div>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <BaseInput
        onBlur={() => onBlur(true)}
        onFocus={() => onBlur(false)}
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
