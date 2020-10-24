import * as React from "react";
import { FooterWrapper, Links, FooterLink, Copy } from "./styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Links>
        <FooterLink>Instagram</FooterLink>
        <FooterLink>Facebook</FooterLink>
        <FooterLink>YouTube</FooterLink>
        <FooterLink>TikTok</FooterLink>
        <FooterLink>Pintrest</FooterLink>
      </Links>
      <Copy>©NORO ART. All Rights Reserved</Copy>
    </FooterWrapper>
  );
};
