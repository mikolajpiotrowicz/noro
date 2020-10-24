export enum ROUTES {
  MAIN = "MAIN",
  CONTACT = "CONTACT",
  ABOUT = "ABOUT",
  GALLERY = "GALLERY",
  GALLERY_ITEM = "GALLERY_ITEM",
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
};
