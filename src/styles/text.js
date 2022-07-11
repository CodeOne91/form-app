import styled from "styled-components";
import { v } from "./variables/variables";
import { Link } from "react-router-dom";

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

export const Subtitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.TEXT_COLOR};
`;
export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 80%;
  margin: 10px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.SECONDARY_COLOR};
  }
`;

export const CardTextTitle = styled.h2`
  background-clip: text;
  margin: 10px;
  color: ${(props) => props.theme.TEXT_COLOR};
`;

export const CardTextBody = styled.p`
  color: ${(props) => props.theme.TEXT_COLOR};
  font-size: 15px;
  font-weight: 300;
  padding: 5px;
`;

export const ButtonText = styled.p`
  color: ${(props) => props.theme.TEXT_COLOR};
  font-size: 15px;
  font-weight: 300;
  padding: 5px;
`;
