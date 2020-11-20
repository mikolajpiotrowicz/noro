import * as React from "react";
import { Header1 } from "../../styled/typography";
import { SectionHeading } from "../../styled/reusable";
import { MainScreenVideo } from "../../components/MainScreenVideo/idnex";
import { ImageOverlay, SingleGalleryWrap, Slide, SlidersWrap } from "./styled";
import { Fade } from "react-slideshow-image";
import { getStaticContent } from "../../services/static-file";
import { ROUTES, ROUTING } from "../../services/routing";
import { useTranslation } from "react-i18next";

export const MainScreen = () => {
  const { t } = useTranslation();
  const firstSlider = [
    "small-pics/17-bozenka.jpg",
    "small-pics/11-GENDER.jpg",
    "small-pics/00-mirror.jpg",
    "small-pics/mingx.jpg",
  ];
  const secondSlider = [
    "small-pics/4-Hae-macz-ys-de-fysz.jpg",
    "small-pics/25-pansia.jpg",
    "small-pics/12-zem.jpg",
    "small-pics/13-classic-lollipop.jpg",
  ];
  return (
    <div>
      <SectionHeading>
        <Header1>{t("pageHeading.home")}</Header1>
      </SectionHeading>
      <MainScreenVideo />
      <SlidersWrap>
        <SingleGalleryWrap to={ROUTING[ROUTES.GALLERY].path}>
          <Header1>{t("header.gallery")}.</Header1>
          <Fade duration={2500} arrows={false}>
            {firstSlider.map((image) => {
              return (
                <Slide key={image}>
                  <ImageOverlay className="overlay" />
                  <img src={getStaticContent(image)} />
                </Slide>
              );
            })}
          </Fade>
        </SingleGalleryWrap>
        <SingleGalleryWrap to={ROUTING[ROUTES.SHOP_CATEGORIES].path}>
          <Header1>{t("header.shop")}.</Header1>
          <Fade duration={4000} arrows={false}>
            {secondSlider.map((image) => {
              return (
                <Slide key={image}>
                  <ImageOverlay />
                  <img src={getStaticContent(image)} />
                </Slide>
              );
            })}
          </Fade>
        </SingleGalleryWrap>
      </SlidersWrap>
    </div>
  );
};
