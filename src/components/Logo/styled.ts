import styled from "styled-components";
import { LogoIcon } from "../Icons";
import { Link } from "react-router-dom";

export const StyledLogoIcon = styled(LogoIcon)`
  height: 18px;
  margin-left: 20px;
`;
export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin: 10px 0 0 10px;
  @media  screen and (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    display: flex;
    margin-top: 5px;
  }
`;
