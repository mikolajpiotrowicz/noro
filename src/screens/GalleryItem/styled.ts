import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

export const CloseWrapper = styled(Link)`
  position: fixed;
  top: 5px;
  right: 13px;
  z-index: 5;

  @media  screen and (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    right: 75px;
    top: 80px;
  }

  svg {
    width: 25px;

    @media screen and  (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      width: 40px;
    }
  }
`;

export const GalleryItemWrapper = styled.div`
  position: relative;
  user-select: none;
  user-select: none;
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  @media screen and  (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    top: 50px;
    display: none;
  }
  @media  screen and (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    top: 30px;
  }
`;

export const PaintingDataRow = styled.p`
  margin: 5px 0 5px 0;
  color: ${(props) => props.theme.colors.gray1};
`;
export const LeftArrow = styled.img`
  left: 5px;
  transform: translate(0, -50%) rotate(180deg);
  top: 50%;
  cursor: pointer;
  user-select: none;
  display: none;
  z-index: 10;
  @media  screen and (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    left: 15px;
    display: block;
    position: fixed;
  }
  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.tablet}px) {
    left: 55px;
  }
`;
export const RightArrow = styled.img`
  display: none;

  right: 10px;
  transform: translate(0, -50%);
  top: 50%;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}px) {
    right: 15px;
    display: block;
    position: fixed;
  }
  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.tablet}px) {
    right: 55px;
  }
`;

export const PaintingData = styled.div`
  margin: 20px 60px 0 60px;
  position: relative;

  ${LeftArrow}, ${RightArrow} {
    position: absolute;
    display: block;
    width: 20px;
  }

  ${LeftArrow} {
    left: -40px;
  }

  ${RightArrow} {
    right: -40px;
  }

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.tablet}px) {
    position: fixed;
    top: 50%;
    bottom: unset;
    left: 58%;

    ${LeftArrow}, ${RightArrow} {
      display: none;
    }
  }
  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.tablet}px) {
    top: 50%;
    bottom: unset;
    left: 60%;
  }
`;

export const ZoomInWrapper = styled.div`
  position: unset;
  display: flex;
  margin-top: 50px;
  width: 100vw;

  ${LeftArrow}, ${RightArrow} {
    display: none;
  }

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.tablet}px) {
    width: unset;
    max-width: 50%;
    position: fixed;
    transform: translate(0, -50%);
    top: 50%;
    right: 40px;
    left: 120px;
    ${LeftArrow}, ${RightArrow} {
      display: block;
    }
  }
  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.desktop}px) {
    left: 200px;
    max-width: 670px;
  }
`;
export const Lightbulb = styled.img<{ isUv: boolean }>`
  position: fixed;
  display: none;
  top: 9px;
  right: 50px;
  width: 30px;
  z-index: 5;
  cursor: pointer;

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
  animation: rainbow 1s ease infinite;

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.tablet}px) {
    top: 77px;
    right: 160px;
    display: block;
  }
`;
export const PaintingTitle = styled.h1`
  color: ${(props) => props.theme.colors.gray1};
  margin: 5px 0 10px 0;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.mdMobile}px) {
    font-size: 32px;
  }

  ${Lightbulb} {
    position: relative;
    right: unset;
    display: block;
    top: unset;
    margin-left: 20px;

    @media screen and (min-width: ${(props) =>
        props.theme.breakpoints.tablet}px) {
      display: none;
    }
  }
`;
