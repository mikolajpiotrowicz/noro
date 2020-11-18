import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 32px 0 20px 0;
  flex-wrap: wrap;
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: row;
  }
`;

export const GalleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    width: calc(50% - 5px);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: calc(33% - 16px);
  }

  img {
    width: 100%;
    margin-bottom: 10px;

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {

    margin-bottom: 32px;
    }
  }
`;
