import * as React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
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
import { useTranslation } from "react-i18next";
import { LanguageSwitch } from "../LanguageSwitch/LanguageSwitch";

export const HeaderNotConnected: React.FC<RouteComponentProps> = ({
  location,
}) => {
  const { t } = useTranslation();
  const [mobileMenuIsOpen, openMenu] = React.useState(false);
  const scrollY = useScrollPosition(60 /*fps*/);
  const { pathname } = location;

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
          <span className="line line-1" />
          <span className="line line-2" />
          <span className="line line-3" />
        </a>
      </HamburgerWrapper>
      <Overlay isOpen={mobileMenuIsOpen} />
      <MobileMenuWrapper isOpen={mobileMenuIsOpen}>
        <MobileMenu>
          <MobileMenuItem isActive={pathname === ROUTING[ROUTES.MAIN].path}>
            <Link to={ROUTING[ROUTES.MAIN].path}>{t("header.home")}</Link>
          </MobileMenuItem>
          <MobileMenuItem isActive={pathname === ROUTING[ROUTES.GALLERY].path}>
            <Link to={ROUTING[ROUTES.GALLERY].path}>{t("header.gallery")}</Link>
          </MobileMenuItem>
          <MobileMenuItem
            isActive={pathname === ROUTING[ROUTES.SHOP_CATEGORIES].path}
          >
            <Link to={ROUTING[ROUTES.SHOP_CATEGORIES].path}>
              {t("header.shop")}
            </Link>
          </MobileMenuItem>
          <MobileMenuItem isActive={pathname === ROUTING[ROUTES.ABOUT].path}>
            <Link to={ROUTING[ROUTES.ABOUT].path}>{t("header.about")}</Link>
          </MobileMenuItem>
          <MobileMenuItem isActive={pathname === ROUTING[ROUTES.CONTACT].path}>
            <Link to={ROUTING[ROUTES.CONTACT].path}>{t("header.contact")}</Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <LanguageSwitch />
          </MobileMenuItem>
        </MobileMenu>
      </MobileMenuWrapper>
      <DesktopMenu>
        <DesktopMenuItem isActive={pathname === ROUTING[ROUTES.MAIN].path}>
          <Link to={ROUTING[ROUTES.MAIN].path}>{t("header.home")}</Link>
        </DesktopMenuItem>
        <DesktopMenuItem isActive={pathname === ROUTING[ROUTES.GALLERY].path}>
          <Link to={ROUTING[ROUTES.GALLERY].path}>{t("header.gallery")}</Link>
        </DesktopMenuItem>
        <DesktopMenuItem
          isActive={pathname === ROUTING[ROUTES.SHOP_CATEGORIES].path}
        >
          <Link to={ROUTING[ROUTES.SHOP_CATEGORIES].path}>
            {t("header.shop")}
          </Link>
        </DesktopMenuItem>
        <DesktopMenuItem isActive={pathname === ROUTING[ROUTES.ABOUT].path}>
          <Link to={ROUTING[ROUTES.ABOUT].path}>{t("header.about")}</Link>
        </DesktopMenuItem>
        <DesktopMenuItem isActive={pathname === ROUTING[ROUTES.CONTACT].path}>
          <Link to={ROUTING[ROUTES.CONTACT].path}>{t("header.contact")}</Link>
        </DesktopMenuItem>
        <DesktopMenuItem>
          <LanguageSwitch />
        </DesktopMenuItem>
      </DesktopMenu>
    </HeaderWrapper>
  );
};
export const Header = withRouter(HeaderNotConnected);
