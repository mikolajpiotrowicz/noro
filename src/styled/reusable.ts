import { Header1 } from "./typography";
import styled from "styled-components";

export const SectionHeading = styled.div`
  width: 100%;
  border-bottom: 3px solid ${(props) => props.theme.colors.gray3};

  ${Header1} {
    text-align: center;
    font-weight: 900;
    font-size: ${(props) => props.theme.size.h3}px;
    
    @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
      font-size: ${(props) => props.theme.size.h2}px;
    }
        @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      font-size: ${(props) => props.theme.size.h1}px;
    }
`;
