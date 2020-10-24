import * as React from "react";
import { AnimatedLogo } from "../AnimatedLogo";
import { LogoWrapper, StyledLogoIcon } from "./styled";
import { ROUTES, ROUTING } from "../../services/routing";

export const Logo = () => {
  return (
    <LogoWrapper to={ROUTING[ROUTES.MAIN].path}>
      <AnimatedLogo />
      <StyledLogoIcon className="" />
    </LogoWrapper>
  );
};
