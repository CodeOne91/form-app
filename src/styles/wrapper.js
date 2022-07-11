import styled from "styled-components";
import { b, s, v } from "./variables/variables";

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

//Form
export const BaseForm = styled.form`
  width: 100%;
  text-align: center;
  background: ${(props) => props.theme.PRIMARY_COLOR};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
`;

export const UserViewWrapper = styled.div`
  width: 80%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BaseFormControl = styled.div`
  margin: 25px;

    :first-of-type {
        margin-top: ${v.mdSpacing};
    }
    :not(:last-of-type) {
        margin-bottom: ${v.smSpacing};
`;

//Header

export const BaseHeader = styled.div`
  background: ${(props) => props.theme.PRIMARY_COLOR};
  color: ${(props) => props.theme.TEXT_COLOR};
  border-bottom: 1px solid ${(props) => props.theme.BUTTON_COLOR};
`;
export const BaseHeaderContent = styled.div`
  height: ${v.headerHeight};
  max-width: 1920px;
  display: flex;
  align-items: center;
  padding: 0 ${v.mdSpacing};
  justify-content: space-between;
`;
export const Logo = styled.span`
  padding-left: 50px;
  font-size: 100%;

  font-weight: 600;
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

//Card

export const CardWrapper = styled.div`
  border-radius: ${v.borderRadius};
  border: 0.5px solid ${(props) => props.theme.BUTTON_COLOR};

  background: ${(props) => props.theme.PRIMARY_COLOR};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const CardTextWrapper = styled.div`
  margin: 25px;
`;

export const CardStatWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: ${v.borderRadius};
  border-bottom-right-radius: ${v.borderRadius};
  background: ${(props) => props.theme.BUTTON_COLOR};
`;

//Buttons container
export const ButtonsContainer = styled.div`
  padding: 15px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const SwitchContainer = styled.div`
  padding: 15px;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;
