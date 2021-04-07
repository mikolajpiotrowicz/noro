export enum ROUTES {
  MAIN = "MAIN",
  CONTACT = "CONTACT",
  ABOUT = "ABOUT",
  GALLERY = "GALLERY",
  GALLERY_ITEM = "GALLERY_ITEM",
  SHOP_CATEGORIES = "SHOP_CATEGORIES",
  SHOP_ORIGINALS = "SHOP_ORIGINALS",
  SHOP_PRINTS = "SHOP_PRINTS",
  SHOP_APPAREL = "SHOP_APPAREL",
  SHOP_ITEM = "SHOP_ITEM",
  FINALIZATION = "",
}

export const ROUTING = {
  [ROUTES.MAIN]: {
    path: "/",
  },
  [ROUTES.CONTACT]: {
    path: "/contact",
  },
  [ROUTES.ABOUT]: {
    path: "/about",
  },
  [ROUTES.GALLERY]: {
    path: "/gallery",
  },
  [ROUTES.GALLERY_ITEM]: {
    path: "/gallery/:id",
  },
  [ROUTES.SHOP_CATEGORIES]: {
    path: "/shop",
  },
  [ROUTES.SHOP_APPAREL]: {
    path: "/shop/apparel",
  },
  [ROUTES.SHOP_ORIGINALS]: {
    path: "/shop/orginal-paintings",
  },
  [ROUTES.SHOP_PRINTS]: {
    path: "/shop/prints",
  },
  [ROUTES.SHOP_ITEM]: {
    path: "/shop/:id",
  },
  [ROUTES.FINALIZATION]: {
    path: "/order-finalize",
  },
};
