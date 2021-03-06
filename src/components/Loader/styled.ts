import styled from "styled-components";

interface Props {
  isLoading: boolean;
}

export const LoaderWrapper = styled.div<Props>`
  width: 100%;
  height: 500px;

`;

export const AnimationWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;
