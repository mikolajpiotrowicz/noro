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

export const ShopCategories = () => {
  return (
    <ShopCategoriesWrapper>
      <SectionHeading>
        <Header1>Limited Prints & Exclusive Collectibles</Header1>
      </SectionHeading>
      <Categories>
        <Category>
          <CategoryImage src={getStaticContent("small-pics/17-bozenka.jpg")} />
          <CategoryTitle>FEATURED ORIGINAL WORKS</CategoryTitle>
        </Category>
        <Category>
          <CategoryImage src={getStaticContent("small-pics/25-pansia.jpg")} />
          <CategoryTitle>FINE ART CANVAS PRINTS</CategoryTitle>
        </Category>
        <Category>
          <CategoryImage src={getStaticContent("small-pics/mingx.jpg")} />
          <CategoryTitle>APPAREL</CategoryTitle>
        </Category>
      </Categories>
    </ShopCategoriesWrapper>
  );
};
