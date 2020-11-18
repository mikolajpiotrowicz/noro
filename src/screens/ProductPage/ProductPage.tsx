import * as React from "react";
import { ProductPageWrapper } from "./styled";
import { SectionHeading } from "../../styled/reusable";
import { Header1 } from "../../styled/typography";
import { categoriesData } from "../../services/shop";
import { RouteComponentProps } from "react-router";
import { Product } from "../../models/WooComerce";

export const ProductPage: React.FC<RouteComponentProps<
  null,
  null,
  { product: Product }
>> = ({ location }) => {
  const getProduct = React.useCallback(() => {
    if (location.state && location.state.product) {
      return location.state.product;
    }
    return null;
  }, []);

  const product = getProduct();

  if (!product) {
    <div>not found</div>;
  }
  return (
    <ProductPageWrapper>
      <SectionHeading>
        <Header1>{categoriesData[product.categories[0].id].title}</Header1>
      </SectionHeading>
      product!
    </ProductPageWrapper>
  );
};
