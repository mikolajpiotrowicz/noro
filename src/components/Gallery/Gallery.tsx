import * as React from "react";
import {
  COLUMNS_HARDCODE,
  galleryPaintingsData,
} from "./../../services/gallery";
import { GalleryWrapper, GalleryColumn } from "./styled";
import { getStaticContent } from "../../services/static-file";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useMediaQuery } from "react-responsive";

export const Gallery = () => {
  const tabletModeCol1 = [];
  const tabletModeCol2 = [];

  const column1 = [];
  const column2 = [];
  const column3 = [];

  const isTabletToSmallDesktop = useMediaQuery({
    minDeviceWidth: 768,
    maxDeviceWidth: 1024,
  });

  galleryPaintingsData.forEach((item, i) => {

    if (i % 2 === 1) {
      tabletModeCol2.push(item);
    }
    if (i % 2 === 0) {
      tabletModeCol1.push(item);
    }
  });
  
  galleryPaintingsData.forEach((item, i) => {
    if (i % 3 === 2) {
      column3.push(item);
    }
    if (i % 3 === 1) {
      column2.push(item);
    }
    if (i % 3 === 0) {
      column1.push(item);
    }
  });
  
  
  
  
  
  console.log("Web ver: ", column1, column2, column3);
  console.log("Mobile ver: ", tabletModeCol1, tabletModeCol2);
  return (
    <GalleryWrapper>
      {isTabletToSmallDesktop ? (
        <>
          <GalleryColumn>
            {tabletModeCol1.map((item) => (
              <Link key={item.name} to={`/gallery/${item.name}`}>
                <LazyLoadImage
                  alt={item.name}
                  effect="blur"
                  src={getStaticContent(`small-pics/${item.file}.jpg`)}
                />
              </Link>
            ))}
          </GalleryColumn>
          <GalleryColumn>
            {tabletModeCol2.map((item) => (
              <Link key={item.name} to={`/gallery/${item.name}`}>
                <LazyLoadImage
                  alt={item.name}
                  effect="blur"
                  src={getStaticContent(`small-pics/${item.file}.jpg`)}
                />
              </Link>
            ))}
          </GalleryColumn>
        </>
      ) : (
        <>
          <GalleryColumn>
            {column1.map((item) => (
              <Link key={item.name} to={`/gallery/${item.name}`}>
                <LazyLoadImage
                  alt={item.name}
                  effect="blur"
                  src={getStaticContent(`small-pics/${item.file}.jpg`)}
                />
              </Link>
            ))}
          </GalleryColumn>
          <GalleryColumn>
            {column2.map((item) => (
              <Link key={item.name} to={`/gallery/${item.name}`}>
                <LazyLoadImage
                  alt={item.name}
                  effect="blur"
                  src={getStaticContent(`small-pics/${item.file}.jpg`)}
                />
              </Link>
            ))}
          </GalleryColumn>
          <GalleryColumn>
            {column3.map((item) => (
              <Link key={item.name} to={`/gallery/${item.name}`}>
                <LazyLoadImage
                  alt={item.name}
                  effect="blur"
                  src={getStaticContent(`small-pics/${item.file}.jpg`)}
                />
              </Link>
            ))}
          </GalleryColumn>
        </>
      )}
    </GalleryWrapper>
  );
};
