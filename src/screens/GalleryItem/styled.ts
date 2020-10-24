import styled from "styled-components";
import { Link } from "react-router-dom";

export const CloseWrapper = styled(Link)`
  position: fixed;
  top: 80px;
  right: 75px;
  z-index: 5;
`;

export const ZoomInWrapper = styled.div`
  position: fixed;
  transform: translate(0, -50%);
  left: 200px;
  top: 50%;
`;

export const GalleryItemWrapper = styled.div`
  position: relative;
  user-select: none;
  .gallery-image {
    width: 650px;
  }
`;

export const PaintingData = styled.div`
  position: fixed;
  left: 55%;
  top: 50%;
  transform: translate(0, -50%);
`;

export const PaintingTitle = styled.h1`
  color: ${(props) => props.theme.colors.gray1};
  margin: 5px 0 10px 0;
`;

export const PaintingDataRow = styled.p`
  margin: 5px 0 5px 0;
  color: ${(props) => props.theme.colors.gray1};
`;
export const LeftArrow = styled.img`
  position: fixed;
  left: 55px;
  transform: translate(0, -50%) rotate(180deg);
  top: 50%;
  cursor: pointer;
  user-select: none;
`;
export const RightArrow = styled.img`
  position: fixed;
  right: 55px;
  transform: translate(0, -50%);
  top: 50%;
  cursor: pointer;
  user-select: none;
`;
export const Lightbulb = styled.img<{ isUv: boolean }>`
  position: fixed;
  top: 72px;
  right: 150px;
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
`;
