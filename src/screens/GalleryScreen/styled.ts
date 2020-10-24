import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;

  img {
    max-height: 600px;
    margin-bottom: 100px;
  }
`;

export const ContactInfo = styled.div`
  font-size: ${(props) => props.theme.size.h2}px;
  margin: 30px 0 0 55px;
`;
