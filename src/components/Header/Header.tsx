import * as React from "react";
import { Link } from "react-router-dom";
import {
  DesktopMenu,
  DesktopMenuItem,
  HamburgerWrapper,
  HeaderWrapper,
  MobileMenu,
  MobileMenuItem,
  MobileMenuWrapper,
  Overlay,
} from "./styled";
import { Logo } from "../Logo";
import { ROUTES, ROUTING } from "../../services/routing";
import useScrollPosition from "@react-hook/window-scroll";

export const Header = () => {
  const [mobileMenuIsOpen, openMenu] = React.useState(false);
  const scrollY = useScrollPosition(60 /*fps*/);

  const handleHamburgerClick = () => {
    openMenu(!mobileMenuIsOpen);
  };

  return (
    <HeaderWrapper hideBoxShadow={scrollY < 100}>
      <Logo />
      <HamburgerWrapper isOpen={mobileMenuIsOpen}>
        <a
          onClick={handleHamburgerClick}
          id="hamburger-icon"
          className={mobileMenuIsOpen && "active"}
          title="Menu"
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </a>
      </HamburgerWrapper>
      <Overlay isOpen={mobileMenuIsOpen} />
      <MobileMenuWrapper isOpen={mobileMenuIsOpen}>
        <MobileMenu>
          <MobileMenuItem>
            <Link to={ROUTING[ROUTES.MAIN].path}>home</Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link to={ROUTING[ROUTES.GALLERY].path}>gallery</Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link to={ROUTING[ROUTES.SHOP_CATEGORIES].path}>shop</Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link to={ROUTING[ROUTES.ABOUT].path}>about</Link>
          </MobileMenuItem>

          <MobileMenuItem>
            <Link to={ROUTING[ROUTES.CONTACT].path}>contact</Link>
          </MobileMenuItem>
        </MobileMenu>
      </MobileMenuWrapper>
      <DesktopMenu>
        <DesktopMenuItem>
          <Link to={ROUTING[ROUTES.MAIN].path}>home</Link>
        </DesktopMenuItem>
        <DesktopMenuItem>
          <Link to={ROUTING[ROUTES.GALLERY].path}>gallery</Link>
        </DesktopMenuItem>
        <DesktopMenuItem>
          <Link to={ROUTING[ROUTES.SHOP_CATEGORIES].path}>shop</Link>
        </DesktopMenuItem>
        <DesktopMenuItem>
          <Link to={ROUTING[ROUTES.ABOUT].path}>about</Link>
        </DesktopMenuItem>
        <DesktopMenuItem>
          <Link to={ROUTING[ROUTES.CONTACT].path}>contact</Link>
        </DesktopMenuItem>
      </DesktopMenu>
    </HeaderWrapper>
  );
};
