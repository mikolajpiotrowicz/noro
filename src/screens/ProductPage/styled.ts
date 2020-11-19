import styled from "styled-components";

export const ProductPageWrapper = styled.div``;
export const ProductDataWrap = styled.div`
  margin-top: 32px;
  display: flex;
`;
export const ProductInfo = styled.div``;
export const ProductName = styled.h1``;
export const ProductDataRow = styled.p``;
export const ProductPrice = styled.h3`
  color: ${(props) => props.theme.colors.gray1};
`;
export const ProductImage = styled.div`
  width: 480px;
  margin-right: 64px;
  
  .gallery-image {
    width: 480px;
  }
`;

export const BuyButton = styled.button`
  transition: 0.2s all ease-in;
  border-radius: 5px;
  color: white;
  position: relative;
  font-weight: bold;
  padding: 13px 60px;
  border: none;
  font-size: ${(props) => props.theme.size.h2}px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  background-image: linear-gradient(
    ${(props) =>
      `${props.theme.colors.gradient1}, ${props.theme.colors.gradient2}`}
  );
  z-index: 1;

  &:hover {
    box-shadow: 0px 13px 24px 1px rgba(246, 26, 26, 0.51);
    transform: scale(1.04);
  }
`;
export const Lightbulb = styled.img<{ isUv: boolean }>`
  width: 30px;
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

export const ProductVariants = styled.select``;
export const ProductVariant = styled.option``;
