import * as React from "react";
import { Image, Product } from "../../models/WooComerce";
import {
  ShopLinkItemImage,
  ShopLinkItemWrapper,
  ShopLinkItemName,
  ShopLinkItemProp,
} from "./styled";
interface Props {
  product: Product;
}

const getThumbnailSrc = (images: Image[]): string => {
  let thumbnail;
  if (!images || images.length === 0) {
    return "";
  }
  images.forEach((img) => {
    if (img.src.includes("small-pics")) {
      thumbnail = img.src;
    }
  });

  if (!thumbnail) {
    thumbnail = images[0].src;
  }
  console.log('wtf', images)
  return thumbnail;
};

export const ShopLinkItem: React.FC<Props> = ({ product }) => {

  return (
    <ShopLinkItemWrapper
      to={{ pathname: `/shop/${product.slug}`, state: { product } }}
    >
      <ShopLinkItemImage src={getThumbnailSrc(product.images)} />
      <ShopLinkItemName>{product.name}</ShopLinkItemName>
      {/*<ShopLinkItemProp>{product.regular_price}zł</ShopLinkItemProp>*/}
    </ShopLinkItemWrapper>
  );
};
