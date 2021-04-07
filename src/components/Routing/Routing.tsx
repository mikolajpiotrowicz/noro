import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { RouteWithLayout } from "../../templates/RouteWithLayout/RouteWithLayout";
import { ROUTES, ROUTING } from "../../services/routing";
import { MainScreen } from "../../screens/MainScreen";
import { ContactScreen } from "../../screens/ContactScreen";
import { AboutScreen } from "../../screens/AboutScreen";
import { GalleryScreen } from "../../screens/GalleryScreen/GalleryScreen";
import { GalleryItem } from "../../screens/GalleryItem";
import { ShopCategories } from "../../screens/ShopCategories";
import { ShopCategory } from "../../screens/ShopCategory";
import { ProductPage } from "../../screens/ProductPage";
import { UserDataView } from '../../screens/UserDataView';

export const Routing = () => {
  return (
    <Switch>
      <RouteWithLayout exact component={MainScreen} path={ROUTING.MAIN.path} />
      <RouteWithLayout component={ContactScreen} path={ROUTING.CONTACT.path} />
      <RouteWithLayout component={AboutScreen} path={ROUTING.ABOUT.path} />
      <Route path={ROUTING[ROUTES.GALLERY_ITEM].path} component={GalleryItem} />
      <RouteWithLayout component={GalleryScreen} path={ROUTING.GALLERY.path} />
      <RouteWithLayout
        component={ShopCategory}
        path={[
          ROUTING[ROUTES.SHOP_ORIGINALS].path,
          ROUTING[ROUTES.SHOP_PRINTS].path,
          ROUTING[ROUTES.SHOP_APPAREL].path,
        ]}
      />
      <RouteWithLayout
        component={ProductPage}
        path={ROUTING[ROUTES.SHOP_ITEM].path}
      />
      <RouteWithLayout
        component={ShopCategories}
        path={ROUTING[ROUTES.SHOP_CATEGORIES].path}
      />
      <RouteWithLayout component={UserDataView} path={ROUTING[ROUTES.FINALIZATION].path} />
    </Switch>
  );
};
