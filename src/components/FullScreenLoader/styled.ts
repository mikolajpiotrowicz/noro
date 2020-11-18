import styled from "styled-components";

interface Props {
  isLoading: boolean;
}

export const LoaderWrapper = styled.div<Props>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  left: 0;
  top: 0;
  z-index: 100;
  transition: 0.3s opacity ease-in;
  opacity: ${(props) => Number(props.isLoading)};
  pointer-events: none;
`;

export const AnimationWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;
