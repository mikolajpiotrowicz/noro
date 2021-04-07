import styled from "styled-components";
import { RainbowText, Text } from "../../styled/typography";

export const AboutWrapper = styled.div`
  margin-top: 20px;
`;

export const AboutCharter = styled.p`
  font-size: ${(props) => props.theme.size.h2}px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const AboutContent = styled.div`
  width: 100%;
  line-height: 1.61;
  font-size: ${(props) => props.theme.size.h2}px;
  margin: 20px 0 0 0;
  @media screen and  (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    margin: 0;
    width: 56%;
  }

  ${Text} {
    margin-top: 5px;
  }

  ${AboutCharter}:first-of-type {
    margin-top: 50px;
  }

  ${RainbowText} {
    font-size: ${(props) => props.theme.size.h2}px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    text-align: left;
  }
`;

export const AboutRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;

  @media screen and  (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    flex-direction: row;
  }

  img {
    width: 100%;
    margin: 0 60px 0 0;

    @media screen and  (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      width: 40%;
    }
  }
`;

export const Date = styled(Text)`
  margin: 0;
`;
export const NewDate = styled(Text)`
  margin: 0;
  color: ${(props) => props.theme.colors.gray3};
`;
