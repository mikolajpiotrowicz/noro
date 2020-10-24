import styled from "styled-components";

export const Video = styled.video`
  width: 100%;
  margin-top: 15px;
`;
export const VideoControl = styled.img<{ visible: boolean }>`
  position: absolute;
  width: 70px;
  height: 70px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  display: ${(props) => (props.visible ? "block" : "none")};
  cursor: pointer;
  z-index: 5;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
`;
