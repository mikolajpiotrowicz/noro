import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopLinkItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 32px;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    width: calc(50% - 5px);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: calc(33% - 16px);
  }
`;
export const ShopLinkItemImage = styled.img`
  width: 100%;
  margin-bottom: 40px;
  max-height: 450px;
  object-fit: cover;
`;
export const ShopLinkItemProp = styled.p`
  font-size: ${(props) => props.theme.size.small}px;
  text-align: center;
  margin: 0;
  font-weight: bold;
`;
export const ShopLinkItemName = styled.p`
  font-size: ${(props) => props.theme.size.h3}px;
  text-align: center;
  margin: 0;
  font-weight: bold;
`;
