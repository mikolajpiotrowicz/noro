import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header1 } from "../../styled/typography";

export const ImageOverlay = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  height: 100%;
  background-color: ${(props) => props.theme.colors.gray1};
  opacity: 0;
  pointer-events: none;
  transition: 0.3s opacity ease-in;
  z-index: 2;
`;

export const Slide = styled.div`
  position: relative;

  &:hover > ${ImageOverlay} {
    opacity: 0.65;
  }
`;

export const SingleGalleryWrap = styled(Link)`
  height: 600px;
  overflow: hidden;
  position: relative;
  display: block;

  img {
    min-height: 700px;
    width: 100%;
    object-fit: cover;
    transition: 0.3s all linear;
    object-position: 50% 50%;
  }

  img:hover {
    transform: scale(1.11);
  }
`;

export const SlidersWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 50px 0;

  ${Header1} {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }

  ${SingleGalleryWrap}:nth-of-type(1) {
    width: calc(63% - 12px);
  }
  ${SingleGalleryWrap}:nth-of-type(2) {
    width: calc(37% - 12px);
  }
`;
