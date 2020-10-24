import styled from "styled-components";

export const Header1 = styled.h1`
  font-size: ${(props) => props.theme.size.h1}px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.size.h3}px;
`;

export const RainbowText = styled.p`
  background: linear-gradient(
    to right,
    #6666ff,
    #0099ff,
    #00ff00,
    #ff3399,
    #6666ff
  );
  -webkit-background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
`;
