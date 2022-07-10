import React from "react";
import PropTypes from "prop-types";
import { BaseButton } from "../../styles/buttons";

function Button({ text, disabled, type, onClick }) {
  return (
    <BaseButton disabled={disabled || false} type={type} onClick={onClick}>
      {text}
    </BaseButton>
  );
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};
export default Button;
