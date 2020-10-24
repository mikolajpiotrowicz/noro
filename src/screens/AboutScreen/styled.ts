import styled from "styled-components";
import { RainbowText, Text } from "../../styled/typography";

export const AboutWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  img {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const AboutCharter = styled.p`
  font-size: ${(props) => props.theme.size.h2}px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const AboutContent = styled.div`
  width: 58%;
  line-height: 1.61;
  font-size: ${(props) => props.theme.size.h2}px;

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
    margin-bottom: 0;
    text-align: left;
  }
`;

export const Date = styled(Text)`
  margin: 0;
`;
export const NewDate = styled(Text)`
  margin: 0;
  color: ${(props) => props.theme.colors.gray3};
`;
