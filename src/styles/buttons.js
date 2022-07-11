import styled from "styled-components";
import { v } from "./variables/variables";

export const BaseButton = styled.button`
  max-width: 200px;
  width: 100%;
  background: ${(props) => props.theme.BUTTON_COLOR};
  color: ${(props) => props.theme.TEXT_COLOR};
  padding: ${v.smSpacing};
  border-radius: ${v.borderRadius};
  margin-top: ${v.mdSpacing};
  cursor: pointer;
  margin-bottom: ${v.mdSpacing};
`;
