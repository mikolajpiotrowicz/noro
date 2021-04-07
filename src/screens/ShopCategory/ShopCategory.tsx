import * as React from "react";
import { ShopCategoryWrapper, Products } from "./styled";
import { SectionHeading } from "../../styled/reusable";
import { Header1 } from "../../styled/typography";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { getProducts } from "../../services/api/client";
import { ShopLinkItem } from "../../components/ShopLinkItem";
import { categoriesData } from "../../services/shop";
import { Loader } from "../../components/Loader";
import { ROUTES, ROUTING } from "../../services/routing";

const spaPathToCategory = {
  [ROUTING[ROUTES.SHOP_ORIGINALS].path]: "16",
  [ROUTING[ROUTES.SHOP_PRINTS].path]: "17",
  [ROUTING[ROUTES.SHOP_APPAREL].path]: "18",
};

const ShopCategoryNotConnected: React.FC<RouteComponentProps> = ({
  location,
}) => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const { pathname } = location;
  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = React.useCallback(async () => {
    setLoading(true);
    setProducts(
      await getProducts({ category: spaPathToCategory[location.pathname] }),
    );
    setLoading(false);
  }, []);

  return (
    <ShopCategoryWrapper>
      <SectionHeading>
        <Header1>{categoriesData[pathname].title}</Header1>
      </SectionHeading>
      {isLoading && <Loader isLoading={isLoading} />}
      <Products>
        {products.map((product) => (
          <ShopLinkItem product={product} key={product.id} />
        ))}
      </Products>
    </ShopCategoryWrapper>
  );
};

export const ShopCategory = withRouter(ShopCategoryNotConnected);
