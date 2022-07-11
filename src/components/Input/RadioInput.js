import React from "react";
import PropTypes from "prop-types";
import { BaseInput } from "../../styles/input";

const RadioInput = ({ label, type, name, value, onChange }) => (
  <div>
    {label ? <label>{label}</label> : null}
    <BaseInput type={type} value={value} name={name} onChange={onChange} />
  </div>
);

RadioInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default RadioInput;
