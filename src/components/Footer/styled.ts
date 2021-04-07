import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};
  padding: 10px 0;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10px;
  max-width: 800px;

  @media  screen and (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    margin: 0 auto 10px auto;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  margin-bottom: 3px;
`;

export const Copy = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
  font-size: 12px;
  width: 100%;
  text-align: center;
  margin-bottom: 0;

  @media  screen and (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: row;
    font-size: ${(props) => props.theme.size.h3}px;
  }
`;
