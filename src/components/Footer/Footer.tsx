import * as React from "react";
import { FooterWrapper, Links, FooterLink, Copy } from "./styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Links>
        <FooterLink href="https://instagram.com/noro.art">
          Instagram
        </FooterLink>
        <FooterLink href="https://facebook.com/noroart">Facebook</FooterLink>
        <FooterLink href="https://vm.tiktok.com/ZMe5EQ1h2/">TikTok</FooterLink>
        <FooterLink href="https://pinterest.com/nareuko">
          Pintrest
        </FooterLink>
      </Links>
      <Copy>2020©NORO ART. All Rights Reserved</Copy>sd
    </FooterWrapper>
  );
};
