import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopLinkItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 32px;

  &:nth-of-type(3) {
    margin-right: 0px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    width: calc(50% - 5px);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: calc(33% - 18px);
    box-sizing: border-box;
  }
`;
export const ShopLinkItemImage = styled.img`
  width: 100%;
  margin-bottom: 40px;
  max-height: 427px;
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
