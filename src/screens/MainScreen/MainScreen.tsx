import * as React from "react";
import { Header1 } from "../../styled/typography";
import { SectionHeading } from "../../styled/reusable";
import { MainScreenVideo } from "../../components/MainScreenVideo/idnex";
import { SlidersWrap, SingleGalleryWrap, Slide, ImageOverlay } from "./styled";
import { Fade } from "react-slideshow-image";
import { getStaticContent } from "../../services/static-file";
import { ROUTES, ROUTING } from '../../services/routing';

export const MainScreen = () => {
  const firstSlider = [
    "2020/10/17-bozenka.jpg",
    "2020/10/14-Insigthful-scaled.jpeg",
    "2020/10/12-¢emieõ-scaled.jpg",
    "2020/10/mingx.jpg",
  ];
  return (
    <div>
      <SectionHeading>
        <Header1>Polish Contemporary Artist</Header1>
      </SectionHeading>
      <MainScreenVideo />
      <SlidersWrap>
        <SingleGalleryWrap to={ROUTING.GALLERY.path}>
          <Header1>GALLERY.</Header1>

          <Fade arrows={false}>
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
        <SingleGalleryWrap>
          <Header1>SHOP.</Header1>
          <Fade arrows={false}>
            {firstSlider.map((image) => {
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
