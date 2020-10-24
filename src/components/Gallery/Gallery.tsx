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
import { theme } from "../../styled/theme";

export const Gallery = () => {
  const tabletModeCol1 = galleryPaintingsData.slice(
    0,
    Math.ceil(galleryPaintingsData.length / 2),
  );
  const tabletModeCol2 = galleryPaintingsData.slice(
    Math.ceil(galleryPaintingsData.length / 2),
    galleryPaintingsData.length
  );

  const column1 = galleryPaintingsData.slice(0, COLUMNS_HARDCODE.FIRST);
  const column2 = galleryPaintingsData.slice(
    COLUMNS_HARDCODE.FIRST,
    COLUMNS_HARDCODE.SECOND + COLUMNS_HARDCODE.FIRST,
  );
  const column3 = galleryPaintingsData.slice(
    COLUMNS_HARDCODE.SECOND + COLUMNS_HARDCODE.FIRST,
    galleryPaintingsData.length,
  );

  const isTabletToSmallDesktop = useMediaQuery({
    minDeviceWidth: 768,
    maxDeviceWidth: 1024,
  });

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
