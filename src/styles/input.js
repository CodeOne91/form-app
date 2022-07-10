import styled from "styled-components";
import { v } from "./variables/variables";

export const BaseInput = styled.input`
  outline: none;
  border: 1px solid ${(props) => props.theme.SECONDARY_COLOR};
  width: 100%;
  padding: ${v.smSpacing};
  font-size: 14px;
  border-radius: ${v.borderRadius};
`;
