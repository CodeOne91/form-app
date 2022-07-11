import React from "react";
import PropTypes from "prop-types";
import { BaseButton } from "../../styles/buttons";
import { ButtonText } from "../../styles/text";

function Button({ text, disabled, type, onClick }) {
  return (
    <BaseButton disabled={disabled || false} type={type} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </BaseButton>
  );
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};
export default Button;
