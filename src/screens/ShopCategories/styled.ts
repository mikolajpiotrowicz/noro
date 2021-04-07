import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopCategoriesWrapper = styled.div``;
export const Categories = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;
`;
export const Category = styled(Link)`
  width: 100%;
  margin-bottom: 20px;

  @media  screen and (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    width: calc(50% - 25px);
  }

  @media screen and  (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    width: calc(33% - 50px);
  }
`;
export const CategoryImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;
export const CategoryTitle = styled.h3`
  margin-top: 40px;
  text-align: center;
`;
