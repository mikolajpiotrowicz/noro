import * as React from "react";
import { Product } from "../../models/WooComerce";
import {
  ShopLinkItemImage,
  ShopLinkItemWrapper,
  ShopLinkItemName,
  ShopLinkItemProp,
} from "./styled";
interface Props {
  product: Product;
}

export const ShopLinkItem: React.FC<Props> = ({ product }) => {
  return (
    <ShopLinkItemWrapper
      to={{ pathname: `/shop/${product.slug}`, state: { product } }}
    >
      <ShopLinkItemImage src={product.images[0] && product.images[0].src} />
      <ShopLinkItemName>{product.name}</ShopLinkItemName>
      <ShopLinkItemProp>{product.regular_price}zł</ShopLinkItemProp>

    </ShopLinkItemWrapper>
  );
};
