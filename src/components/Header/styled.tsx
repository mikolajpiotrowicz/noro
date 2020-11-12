import styled from "styled-components";

export const HeaderWrapper = styled.div<{ hideBoxShadow: boolean }>`
  display: flex;
  justify-content: space-between;
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

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    position: unset;
    box-shadow: none;
  }
`;

export const DesktopMenu = styled.ul`
  display: none;
  list-style: none;
  margin-top: 20px;
  
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
		display: flex;
  }
}
`;
export const DesktopMenuItem = styled.li`
  text-transform: uppercase;
  margin-right: 20px;
  cursor: pointer;
  font-weight: bold;

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

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
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
export const MobileMenuItem = styled.div`
  padding: 20px 0;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.gray4};
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
