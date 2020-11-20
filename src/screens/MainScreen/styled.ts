import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header1 } from "../../styled/typography";

export const ImageOverlay = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0;
  pointer-events: none;
  transition: 0.3s opacity ease-in;
  z-index: 2;
`;

export const Slide = styled.div`
  position: relative;

  &:hover > ${ImageOverlay} {
    opacity: 0.55;
  }
`;

export const SingleGalleryWrap = styled(Link)`
  overflow: hidden;
  position: relative;
  display: block;
  margin-bottom: 10px;

  img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    transition: 0.3s all linear;
    height: 500px;
  }

  img:hover {
    transform: scale(1.11);
  }

  ${Header1} {
    text-transform: uppercase;
  }
`;

export const SlidersWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 0 50px 0;
  height: 650px;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    height: 400px;
    flex-direction: row;
    margin: 20px 0 50px 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    height: 500px;
  }

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
    width: 100%;
    @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
      width: calc(50% - 5px);
    }

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      width: calc(60% - 12px);
    }
  }
  ${SingleGalleryWrap}:nth-of-type(2) {
    width: 100%;
    @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
      width: calc(50% - 5px);
    }

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      width: calc(40% - 12px);
    }
  }
`;
