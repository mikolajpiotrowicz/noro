import * as React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../models/WooComerce";

interface Props {
  product: Product;
}

export const ShopLinkItem: React.FC<Props> = ({ product }) => {
  return <Link to={`/shop/${product.id}`}>shop list item</Link>;
};
