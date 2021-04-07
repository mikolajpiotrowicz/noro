import { Header1 } from "./typography";
import styled, { css } from "styled-components";
import { theme } from "./theme";

export const SectionHeading = styled.div`
  width: 100%;
  border-bottom: 3px solid ${(props) => props.theme.colors.gray3};

  ${Header1} {
    text-align: center;
    font-weight: 900;
    font-size: ${(props) => props.theme.size.h3}px;
    
    @media screen and  (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
      font-size: ${(props) => props.theme.size.h2}px;
    }
        @media screen and  (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      font-size: ${(props) => props.theme.size.h1}px;
    }
`;

export const Input = css`
  font-size: 14px;
  padding: 12px 10px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.gray3};
  border-radius: 4px;
  &:focus,
  &:active {
    outline: 0;
    border-color: ${(props) => props.theme.colors.gray3};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.gray3};
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.colors.gray3};
    opacity: 1; /* Firefox */
  }
`;
export const GenericInput = styled.input<{ error: boolean; icon: boolean }>`
  ${Input};
  position: relative;
  padding-left: 10px;
  width: 100%;
  ${(props) =>
    props.error
      ? `border-color: ${theme.colors.gradient2} !important; box-shadow: inset 0 0 0 1px ${theme.colors.gradient2} !important; outline: 0;`
      : ""}
`;

export const BuyButton = styled.a`
  transition: 0.2s all ease-in;
  border-radius: 5px;
  color: white;
  position: relative;
  cursor: pointer;
  font-weight: bold;
  padding: 13px 60px;
  border: none;
  font-size: ${(props) => props.theme.size.h2}px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  background-image: linear-gradient(
    ${(props) =>
      `${props.theme.colors.gradient1}, ${props.theme.colors.gradient2}`}
  );
  z-index: 1;

  &:hover {
    box-shadow: 0px 13px 24px 1px rgba(246, 26, 26, 0.51);
    transform: scale(1.04);
  }
`;
export const FormRow = styled.div`
  display: flex;
  & > div {
    width: calc(50% - 10px);
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(50% - 10px);

  &:last-child {
    margin-left: 20px;
  }
`;
