import * as React from "react";
import {
  ProductInfo,
  ProductPageWrapper,
  ProductDataWrap,
  ProductImage,
  BuyButton,
  ProductPrice,
  ProductName,
  Lightbulb,
} from "./styled";
import { SectionHeading } from "../../styled/reusable";
import { Header1 } from "../../styled/typography";
import { RouteComponentProps, withRouter } from "react-router";
import { Product } from "../../models/WooComerce";
import InnerImageZoom from "react-inner-image-zoom";
import { theme } from "../../styled/theme";
import { getStaticContent } from "../../services/static-file";
const ProductPageNotConnected: React.FC<RouteComponentProps<
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
  console.log(product);
  if (!product) {
    <div>not found</div>;
  }
  return (
    <ProductPageWrapper>
      <SectionHeading>
        <Header1>Original Artwork</Header1>
      </SectionHeading>
      <ProductDataWrap>
        <ProductImage>
          <InnerImageZoom
            mobileBreakpoint={theme.breakpoints.mobile}
            fullscreenOnMobile={true}
            className="gallery-image"
            src={product.images[0].src}
            zoomSrc={product.images[0].src}
          />
        </ProductImage>
        <ProductInfo>
          <ProductName>
            {product.name}
            <Lightbulb
              isUv={true}
              onClick={() => null}
              src={getStaticContent("misc/mask.png")}
            />
          </ProductName>
          <div
            dangerouslySetInnerHTML={{ __html: product.short_description }}
          />
          <ProductPrice>Price: {product.price}zł</ProductPrice>
          <BuyButton>add to cart</BuyButton>
        </ProductInfo>
      </ProductDataWrap>
    </ProductPageWrapper>
  );
};
export const ProductPage = withRouter(ProductPageNotConnected);
