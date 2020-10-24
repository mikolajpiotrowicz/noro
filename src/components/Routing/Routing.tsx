import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { RouteWithLayout } from "../../templates/RouteWithLayout/RouteWithLayout";
import { ROUTES, ROUTING } from "../../services/routing";
import { MainScreen } from "../../screens/MainScreen";
import { ContactScreen } from "../../screens/ContactScreen";
import { AboutScreen } from "../../screens/AboutScreen";
import { GalleryScreen } from "../../screens/GalleryScreen/GalleryScreen";
import { GalleryItem } from "../../screens/GalleryItem";

export const Routing = () => {
  return (
    <Switch>
      <RouteWithLayout exact component={MainScreen} path={ROUTING.MAIN.path} />
      <RouteWithLayout component={ContactScreen} path={ROUTING.CONTACT.path} />
      <RouteWithLayout component={AboutScreen} path={ROUTING.ABOUT.path} />
      <Route path={ROUTING[ROUTES.GALLERY_ITEM].path} component={GalleryItem} />
      <RouteWithLayout component={GalleryScreen} path={ROUTING.GALLERY.path} />
    </Switch>
  );
};
