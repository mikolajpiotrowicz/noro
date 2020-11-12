import styled from "styled-components";
import { Link } from "react-router-dom";

export const CloseWrapper = styled(Link)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 5;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    ${(props) => props.asd && "mobileVisible: none;"}
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    right: 75px;
    top: 80px;
  }
`;

export const ZoomInWrapper = styled.div`
  position: fixed;
  transform: translate(0, -50%);
  top: 50%;
  left: 60px;
  right: 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    left: 120px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    left: 200px;
  }
`;

export const GalleryItemWrapper = styled.div`
  position: relative;
  user-select: none;
  .gallery-image {
    width: calc(100% - 20px);

    @media (min-width: ${(props) => props.theme.breakpoints.mdMobile}px) {
      width: 280px;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
      width: 370px;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      width: 420px;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
      width: 600px;
    }
  }
`;
export const LogoWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    top: 50px;
    display: none;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    top: 30px;
  }
`;

export const PaintingData = styled.div`
  position: fixed;
  left: 60px;
  transform: translate(0, 0%);
  bottom: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.mdMobile}px) {
    top: 50%;
    bottom: unset;
    left: 57%;
    transform: translate(0, -50%);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    top: 50%;
    bottom: unset;
    left: 58%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    top: 50%;
    bottom: unset;
    left: 55%;
  }
`;

export const PaintingTitle = styled.h1`
  color: ${(props) => props.theme.colors.gray1};
  margin: 5px 0 10px 0;
  font-size: 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.mdMobile}px) {
    font-size: 32px;
  }
`;

export const PaintingDataRow = styled.p`
  margin: 5px 0 5px 0;
  color: ${(props) => props.theme.colors.gray1};
`;
export const LeftArrow = styled.img`
  position: fixed;
  left: 5px;
  transform: translate(0, -50%) rotate(180deg);
  top: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    left: 15px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    left: 55px;
  }
`;
export const RightArrow = styled.img`
  position: fixed;
  right: 10px;
  transform: translate(0, -50%);
  top: 50%;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    right: 15px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    right: 55px;
  }
`;
export const Lightbulb = styled.img<{ isUv: boolean }>`
  position: fixed;

  top: 13px;
  right: 77px;
  width: 50px;
  z-index: 5;

  background: ${(props) =>
    props.isUv
      ? `linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
    )`
      : `
      linear-gradient(
    124deg,
    #5f4b8b,
    #2b1de8,
    #5f4b8b,
    #e03fd8,
    #2b1de8,
    #5f4b8b,
    #2b1de8,
    #e03fd8,
    #5f4b8b
  )
      
      `};
  background-size: 300% 300%;

  -webkit-animation: rainbow 3s ease infinite;
  -z-animation: rainbow 3s ease infinite;
  -o-animation: rainbow 3s ease infinite;
  animation: rainbow 3s ease infinite;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    top: 72px;
    right: 150px;
  }
`;
