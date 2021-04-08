import styled from "styled-components";
import { LogoWrapper } from "../Logo/styled";
export const HeaderWrapper = styled.div<{ hideBoxShadow: boolean }>`
  display: flex;
  justify-content: flex-start;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.white};
  padding-bottom: 10px;
  box-shadow: ${(props) =>
    props.hideBoxShadow
      ? "0 3px 8px rgba(0, 0, 0, 0)"
      : "0 3px 8px rgba(0, 0, 0, 0.25)"};
  transition: box-shadow 0.3s ease-in-out;
  ${LogoWrapper} {
    margin-left: 5px;
  }
  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}px) {
    justify-content: space-between;
    position: unset;
    box-shadow: none;
    ${LogoWrapper} {
      margin-left: 0;
    }
  }
  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.tablet}px) {
    justify-content: center;
  }
`;

export const DesktopMenu = styled.ul`
  display: none;
  list-style: none;
  margin-top: 20px;
  @media screen and  (min-width: ${(props) =>
    props.theme.breakpoints.mobile}px) {
		display: flex;
		padding-left: 20px;
  }
    @media screen and  (min-width: ${(props) =>
      props.theme.breakpoints.tablet}px) {
		margin-left: 50px;
  }
    @media screen and  (min-width: ${(props) =>
      props.theme.breakpoints.desktop}px) {
		margin-left: 125px;
  }
}
`;
export const DesktopMenuItem = styled.li<{ isActive?: boolean }>`
  text-transform: uppercase;

  cursor: pointer;
  font-weight: bold;
  a {
    font-size: 15px;
    margin-right: 15px;
  }

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.tablet}px) {
    a {
      font-size: 19px;
      margin-right: 40px;
    }
  }
  ${(props) => props.isActive && `a { color: ${props.theme.colors.gray2}; }`}
  &:hover {
    font-weight: 900;
  }
`;
export const HamburgerWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: ${(props) => (props.isOpen ? "calc(50% - 50px)" : "10px")};
  top: 19px;
  z-index: 11;
  transition: 0.28s all ease-in;
  transition-delay: 0.1s;

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}px) {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: ${(props) => (props.isOpen ? "0%" : "-50%")};
  width: 50%;
  min-height: 100vh;
  transition: 0.35s all ease-in;
  z-index: 10;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.colors.white};
`;
export const MobileMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const MobileMenuItem = styled.div<{ isActive?: boolean }>`
  padding: 20px 0;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;

  background-color: ${(props) =>
    props.isActive ? props.theme.colors.gray4 : "transparent"};
  &:hover,
  &:focus {
    &:not(&:last-of-type) {
      background-color: ${(props) => props.theme.colors.gray4};
    }
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 8;
  opacity: ${(props) => (props.isOpen ? "100" : "0")};
  transition: 0.3s opacity linear;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
