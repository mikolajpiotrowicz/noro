import * as React from "react";
import { RouteComonentProps, withRouter } from "react-router-dom";
import { CloseIcon } from "../../components/Icons";
import { ROUTES, ROUTING } from "../../services/routing";
import {
  CloseWrapper,
  GalleryItemWrapper,
  ZoomInWrapper,
  PaintingData,
  PaintingDataRow,
  PaintingTitle,
  LeftArrow,
  RightArrow,
  Lightbulb,
  LogoWrapper,
} from "./styled";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { pairedGallery } from "../../services/gallery";
import { getStaticContent } from "../../services/static-file";
import { Logo } from "../../components/Logo";

const MOBILE_BREAKPOINT = 768;

const GalleryItemNotConnected: React.FC<RouteComonentProps<{ id: string }>> = ({
  match,
  history,
}) => {
  const [closeButtonVisible, setCloseButtonVisible] = React.useState(true);
  const [isUV, setUV] = React.useState(false);
  const [index, setIndex] = React.useState<number>();
  const [namesArray, setNamesArray] = React.useState<string[]>();
  const getName = () => {
    const { params } = match;
    const { id } = params;
    return id;
  };
  const currentPainting = pairedGallery[getName()];

  const getNextItem = () => {
    if (index === namesArray.length - 1) {
      const newIndex = 0;
      const element = namesArray[newIndex];
      setIndex(newIndex);
      history.push(`/gallery/${element}`);

      return;
    }

    const newIndex = index + 1;
    const element = namesArray[newIndex];
    setIndex(newIndex);
    history.push(`/gallery/${element}`);
  };

  const getPreviousItem = () => {
    if (index === 0) {
      const newIndex = namesArray.length - 1;
      const element = namesArray[newIndex];
      setIndex(newIndex);
      history.push(`/gallery/${element}`);

      return;
    }
    const newIndex = index - 1;
    const element = namesArray[newIndex];
    setIndex(newIndex);
    history.push(`/gallery/${element}`);
  };

  React.useEffect(() => {
    const name = getName();
    const names = Object.keys(pairedGallery);
    const currentIndex = names.indexOf(name);
    setIndex(currentIndex);
    setNamesArray(names);
  }, []);

  React.useEffect(() => {
    setUV(false);
  }, [match]);

  return (
    <GalleryItemWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <CloseWrapper
        mobileVisible={closeButtonVisible}
        to={ROUTING[ROUTES.GALLERY].path}
      >
        <CloseIcon />
      </CloseWrapper>
      <LeftArrow
        onClick={getPreviousItem}
        src={getStaticContent("misc/gallery-arrow.png")}
      />
      <RightArrow
        onClick={getNextItem}
        src={getStaticContent("misc/gallery-arrow.png")}
      />
      {currentPainting.uv && (
        <Lightbulb
          isUv={isUV}
          onClick={() => setUV(!isUV)}
          src={getStaticContent("misc/mask.png")}
        />
      )}
      <ZoomInWrapper>
        <InnerImageZoom
          afterZoomIn={() => setCloseButtonVisible(false)}
          afterZoomOut={() => setCloseButtonVisible(true)}
          mobileBreakpoint={MOBILE_BREAKPOINT}
          fullscreenOnMobile={true}
          className="gallery-image"
          src={getStaticContent(
            `gallery/${currentPainting.file}${isUV ? "UV" : ""}.jpg`,
          )}
          zoomSrc={getStaticContent(
            `gallery/${currentPainting.file}${isUV ? "UV" : ""}.jpg`,
          )}
        />
      </ZoomInWrapper>
      <PaintingData>
        <PaintingTitle>{currentPainting.name}</PaintingTitle>
        <PaintingDataRow>{currentPainting.size}</PaintingDataRow>
        <PaintingDataRow>{currentPainting.year}</PaintingDataRow>
        <PaintingDataRow>{currentPainting.technique}</PaintingDataRow>
        <PaintingDataRow>{currentPainting.price || ""}</PaintingDataRow>
      </PaintingData>
    </GalleryItemWrapper>
  );
};

export const GalleryItem = withRouter(GalleryItemNotConnected);
