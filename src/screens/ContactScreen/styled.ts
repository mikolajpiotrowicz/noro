import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: row;
  }

  img {
    margin-bottom: 50px;
    width: 100%;

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
      margin-bottom: 100px;
      width: 50%;
    }
  }
`;

export const ContactInfo = styled.div`
  font-size: ${(props) => props.theme.size.h2}px;
  margin: 0 0 50px 0;
  text-align: center;
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    text-align: left;
    margin: 30px 0 0 55px;
  }
`;
