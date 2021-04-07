import * as React from "react";
import { SectionHeading } from "../../styled/reusable";
import { Header1 } from "../../styled/typography";
import {
  ShopCategoriesWrapper,
  Categories,
  Category,
  CategoryImage,
  CategoryTitle,
} from "./styled";
import { getStaticContent } from "../../services/static-file";
import { ROUTES, ROUTING } from "../../services/routing";
import { useTranslation } from "react-i18next";

export const ShopCategories = () => {
  const { t } = useTranslation();
  return (
    <ShopCategoriesWrapper>
      <SectionHeading>
        <Header1>{t("pageHeading.shop")}</Header1>
      </SectionHeading>
      <Categories>
        <Category to={ROUTING[ROUTES.SHOP_ORIGINALS].path}>
          <CategoryImage src={getStaticContent("small-pics/17-bozenka.jpg")} />
          <CategoryTitle>{t("shop.categoryOriginal")}</CategoryTitle>
        </Category>
        {/*<Category to={ROUTING[ROUTES.SHOP_PRINTS].path}>*/}
        {/*  <CategoryImage src={getStaticContent("small-pics/25-pansia.jpg")} />*/}
        {/*  <CategoryTitle>{t("shop.categoryPrints")}</CategoryTitle>*/}
        {/*</Category>*/}
      </Categories>
    </ShopCategoriesWrapper>
  );
};
