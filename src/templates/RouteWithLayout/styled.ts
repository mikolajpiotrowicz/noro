import styled from "styled-components";

export const Screen = styled.div`
  max-width: ${(props) => props.theme.breakpoints.desktop}px;
  margin: 80px 10px 0 10px;
  min-height: calc(100vh - 61px);

  @media screen and  (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    margin: 0 10px;
  }
  @media  screen and (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    margin: 0 auto;
  }
`;
