import * as React from "react";
import { Product } from "../../models/WooComerce";
import {
  ProductPreviewWrapper,
  PreviewName,
  PreviewImage,
  PreviewPrice,
} from "./styled";

interface Props {
  product: Product;
}

export const ProductPreview: React.FC<Props> = ({ product }) => {
  return (
    <ProductPreviewWrapper>
      <PreviewImage src={product.images[0].src} alt="Product image preview" />
      <PreviewName>{product.name}</PreviewName>
      <PreviewPrice>{product.regular_price}zł</PreviewPrice>
    </ProductPreviewWrapper>
  );
};
