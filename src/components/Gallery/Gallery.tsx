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

  const isMobile = useMediaQuery({
    minDeviceWidth: 0,
    maxDeviceWidth: 505,
  });
  const isTablet = useMediaQuery({
    minDeviceWidth: 506,
    maxDeviceWidth: 1023,
  });
  const isDesktop = useMediaQuery({
    minDeviceWidth: 1024,
    maxDeviceWidth: 4096,
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

  
  
  return (
    <GalleryWrapper>
      {isMobile && (
        <GalleryColumn>
          {galleryPaintingsData.map((item) => (
            <Link key={item.name} to={`/gallery/${item.name}`}>
              <LazyLoadImage
                alt={item.name}
                effect="blur"
                src={getStaticContent(`small-pics/${item.file}.jpg`)}
              />
            </Link>
          ))}
        </GalleryColumn>
      )}
      {isTablet && (
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
      )}

      {isDesktop && (
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
