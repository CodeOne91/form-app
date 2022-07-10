import styled from "styled-components";
import { v } from "./variables/variables";

export const TitleText = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.TEXT_COLOR};
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  color: ${(props) => props.theme.TEXT_COLOR};

  margin-bottom: calc(${v.smSpacing} / 4);
`;
