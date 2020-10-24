import * as React from "react";
import styled from "styled-components";
export type Props = React.HTMLAttributes<HTMLOrSVGElement>;
const HamburgerIconPure: React.FC<Props> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 19" width="24" height="19">
    <defs>
      <image
        width="24"
        height="19"
        id="img1"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATBAMAAAB4ntAIAAAAAXNSR0IB2cksfwAAABVQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgEApAAAAAd0Uk5T/38AvcHMsgBzP64AAAAlSURBVHicY2DACQSRAIMSEiCLY4wEUO1xQQKU2xOKBFDtSUMCAKPuHxUGWUb7AAAAAElFTkSuQmCC"
      />
    </defs>
    <use id="Background" href="#img1" x="0" y="0" />
  </svg>
);

export const HamburgerIcon = styled(HamburgerIconPure)``;
