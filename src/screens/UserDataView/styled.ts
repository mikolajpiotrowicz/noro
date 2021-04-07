import styled from "styled-components";
import { BuyButton } from "../../styled/reusable";

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${BuyButton} {
    width: 100%;
    margin-top: 25px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
