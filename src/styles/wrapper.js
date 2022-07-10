import styled from "styled-components";
import { b, s, v } from "./variables/variables";
import img from "../assets/img/form-icon.svg";

export const BaseForm = styled.form`
  width: 100%;
  text-align: center;
  background: ${(props) => props.theme.PRIMARY_COLOR};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
`;

export const BaseFormControl = styled.div`
    :first-of-type {
        margin-top: ${v.mdSpacing};
    }
    :not(:last-of-type) {
        margin-bottom: ${v.smSpacing};
`;

export const BaseHeader = styled.div`
  background: ${(props) => props.theme.PRIMARY_COLOR};
  color: ${(props) => props.theme.TEXT_COLOR};
`;

export const BaseHeaderContent = styled.div`
  height: ${v.headerHeight};
  max-width: 1920px;
  display: flex;
  align-items: center;
  padding: 0 ${v.mdSpacing};
`;

export const Logo = styled.span`
  padding-left: 50px;
  font-size: 24px;
  font-weight: 600;
`;
export const Link = styled.a`
  color: ${(props) => props.theme.TEXT_COLOR};
`;

export const Main = styled.main`
  transition: 0.3s ease padding;
  padding: ${v.mdSpacing} ${v.mdSpacing};
  @media ${b.sm} {
    padding: ${v.lgSpacing} ${v.mdSpacing};
  }
  @media ${b.lg} {
    padding: ${v.lgSpacing} ${v.lgSpacing};
    margin: 0 auto;
    width: 100%;
    max-width: ${s.sm};
  }
  /* display: flex;
    justify-content: center; */
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FixedContainer = styled.div`
  max-width: ${({ size }) => (!size ? "initial" : `${size}px`)};
  width: 100%;
  margin: 0 auto;
`;
