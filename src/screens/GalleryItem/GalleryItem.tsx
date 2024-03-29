import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
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
import { theme } from "../../styled/theme";
import { Translation, withTranslation, WithTranslation } from "react-i18next";
import { withProps } from "recompose";

interface State {
  isUv: boolean;
  closeButtonVisible: boolean;
  index?: number;
  namesArray: string[];
}

export class GalleryItemNotConnected extends React.Component<
  RouteComponentProps<{
    id: string;
  }> &
    WithTranslation,
  State
> {
  constructor(props) {
    super(props);
    this.state = {
      namesArray: [],
      isUv: false,
      closeButtonVisible: true,
    };
  }
  public async componentDidMount() {
    const currentPainting = pairedGallery[this.getName()];
    const { isUv } = this.state;
    window.addEventListener("keydown", this.handleKeyPress);

    const name = this.getName();
    const names = Object.keys(pairedGallery);
    const currentIndex = names.indexOf(name);

    this.setState({ namesArray: names, index: currentIndex });
  }
  public componentWillUnmount(): void {
    window.removeEventListener("keydown", this.handleKeyPress);
  }
  public handleKeyPress = (e: KeyboardEvent): void => {
    if (e.key === "ArrowRight") this.getNextItem();
    if (e.key === "ArrowLeft") this.getPreviousItem();
  };

  public getNextItem = (): void => {
    const { index, namesArray } = this.state;
    const { history } = this.props;

    if (index === namesArray.length - 1) {
      const newIndex = 0;
      const element = namesArray[newIndex];
      this.setState({ index: newIndex });
      history.push(`/gallery/${element}`);

      return;
    }

    const newIndex = index + 1;
    const element = namesArray[newIndex];
    this.setState({ index: newIndex, isUv: false });
    history.push(`/gallery/${element}`);
  };

  public getPreviousItem = (): void => {
    const { index, namesArray } = this.state;
    const { history } = this.props;
    if (index === 0) {
      const newIndex = namesArray.length - 1;
      const element = namesArray[newIndex];
      this.setState({ index: newIndex });
      history.push(`/gallery/${element}`);

      return;
    }
    const newIndex = index - 1;
    const element = namesArray[newIndex];
    this.setState({ index: newIndex, isUv: false });
    history.push(`/gallery/${element}`);
  };

  public getName = (): string => {
    const { params } = this.props.match;
    const { id } = params;
    return id;
  };

  public render() {
    const { isUv } = this.state;
    const currentPainting = pairedGallery[this.getName()];
    if (!currentPainting) {
      return null;
    }
    return (
      <GalleryItemWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <CloseWrapper to={ROUTING[ROUTES.GALLERY].path}>
          <CloseIcon />
        </CloseWrapper>
        {currentPainting.uv && (
          <Lightbulb
            isUv={isUv}
            onClick={() => this.setState({ isUv: !isUv })}
            src={getStaticContent("misc/bulb-mask.png")}
          />
        )}

        <LeftArrow
          onClick={this.getPreviousItem}
          src={getStaticContent("misc/gallery-arrow.png")}
        />
        <RightArrow
          onClick={this.getNextItem}
          src={getStaticContent("misc/gallery-arrow.png")}
        />
        <ZoomInWrapper>
          <InnerImageZoom
            afterZoomIn={() => this.setState({ closeButtonVisible: false })}
            afterZoomOut={() => this.setState({ closeButtonVisible: true })}
            mobileBreakpoint={theme.breakpoints.mobile}
            fullscreenOnMobile={true}
            className="gallery-image"
            src={getStaticContent(
              `gallery/${currentPainting.file}${isUv ? "UV" : ""}.jpg`,
            )}
            zoomSrc={getStaticContent(
              `gallery/${currentPainting.file}${isUv ? "UV" : ""}.jpg`,
            )}
          />
        </ZoomInWrapper>
        <PaintingData>
          <PaintingTitle>
            {currentPainting.name}{" "}
            {currentPainting.uv && (
              <Lightbulb
                isUv={isUv}
                onClick={() => this.setState({ isUv: !isUv })}
                src={getStaticContent("misc/bulb-mask.png")}
              />
            )}
          </PaintingTitle>
          <PaintingDataRow>{currentPainting.size}</PaintingDataRow>
          <PaintingDataRow>{currentPainting.year}</PaintingDataRow>

          <Translation>
            {(t, { i18n }) => (
              <>
                <PaintingDataRow>
                  {currentPainting.technique.map((tech, i) => {
                    return `${t(tech)}${
                      i !== currentPainting.technique.length - 1 ? "," : ""
                    } `;
                  })}
                </PaintingDataRow>
                <PaintingDataRow>
                  {t(currentPainting.price) || ""}
                </PaintingDataRow>
              </>
            )}
          </Translation>

          <LeftArrow
            onClick={this.getPreviousItem}
            src={getStaticContent("misc/gallery-arrow.png")}
          />
          <RightArrow
            onClick={this.getNextItem}
            src={getStaticContent("misc/gallery-arrow.png")}
          />
        </PaintingData>
      </GalleryItemWrapper>
    );
  }
}

export const GalleryItem = withProps(
  withTranslation,
  withRouter,
)(GalleryItemNotConnected);
