import React, { useState } from "react";
import PropTypes from "prop-types";
import { BaseInput } from "../../styles/input";

const CheckboxInput = ({ name, label, onChange }) => {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <BaseInput name={name} type="checkbox" onChange={onChange} />
    </div>
  );
};

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
};

export default CheckboxInput;
