import * as React from "react";
import {
  ProductInfo,
  ProductPageWrapper,
  ProductDataWrap,
  ProductImage,
  ProductPrice,
  ProductName,
  Lightbulb,
  ProductVariants,
  ProductVariant,
} from "./styled";
import { BuyButton, SectionHeading } from "../../styled/reusable";
import { Header1 } from "../../styled/typography";
import { RouteComponentProps, withRouter } from "react-router";
import { Product } from "../../models/WooComerce";
import InnerImageZoom from "react-inner-image-zoom";
import { theme } from "../../styled/theme";
import { useTranslation } from "react-i18next";
import { ROUTES, ROUTING } from "../../services/routing";
import { createOrder } from "../../services/api/client";

const ProductPageNotConnected: React.FC<RouteComponentProps<
  null,
  null,
  { product: Product }
>> = ({ location, history }) => {
  const { t } = useTranslation();
  const getProduct = React.useCallback(() => {
    if (location.state && location.state.product) {
      return location.state.product;
    }
    return null;
  }, []);

  const product = getProduct();
  const handleBuy = () => createOrder();
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
            {/*<Lightbulb*/}
            {/*  isUv={true}*/}
            {/*  onClick={() => null}*/}
            {/*  src={getStaticContent("misc/mask.png")}*/}
            {/*/>*/}
          </ProductName>
          <div
            dangerouslySetInnerHTML={{ __html: product.short_description }}
          />
          {/*<ProductPrice>*/}
          {/*  {t("shop.price")}: {product.price}zł*/}
          {/*</ProductPrice>*/}
          <BuyButton onClick={handleBuy}>{t("shop.buyNow")}</BuyButton>
        </ProductInfo>
      </ProductDataWrap>
    </ProductPageWrapper>
  );
};
export const ProductPage = withRouter(ProductPageNotConnected);
