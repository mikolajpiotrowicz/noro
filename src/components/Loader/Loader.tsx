import * as React from "react";
import { AnimatedLogo } from "../AnimatedLogo";
import { AnimationWrapper, LoaderWrapper } from "./styled";

interface Props {
  isLoading: boolean;
}

export const Loader: React.FC<Props> = ({ isLoading}) => {
  return (
    <LoaderWrapper isLoading={isLoading}>
      <AnimationWrapper>
	      <AnimatedLogo isBig />
      </AnimationWrapper>
    </LoaderWrapper>
  );
};
