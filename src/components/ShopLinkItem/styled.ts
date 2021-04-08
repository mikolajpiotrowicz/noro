import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopLinkItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 32px;

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}px) {
    width: calc(50% - 26px);
    margin-right: 24px;
    &:nth-of-type(2) {
      margin-right: 0px;
    }
  }

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.desktop}px) {
    width: calc(33% - 28px);
    margin-right: 32px;
    &:nth-of-type(2) {
      margin-right: 32px;
    }
    &:nth-of-type(3) {
      margin-right: 0px;
    }
  }
`;
export const ShopLinkItemImage = styled.img`
  width: 100%;
  margin-bottom: 40px;
  height: 100%;
  max-height: 400px;
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
