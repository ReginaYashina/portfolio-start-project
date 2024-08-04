import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

// Menu
const Link = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 110%;
  color: transparent;
`;
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  /* outline: 1px solid red; */
  color: ${theme.colors.accent};

  & + & {
    top: 50%;
    span {
      transform: translateY(-50%);
      display: inline-block;
    }
  }
`;
const MenuItem = styled.li`
  position: relative;
  &:hover {
    ${Mask} {
      color: ${theme.colors.font};
      transform: skewX(12deg) translateX(5px);

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }

    &:before {
      transform: scale(1);
    }
  }
  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }
`;

// Mobile Menu
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(31, 31, 32, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99999;
    `}

  ul {
    display: flex;
    gap: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const MobileMenu = styled.nav``;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  right: 24px;
  top: 30px;
  width: 36px;
  height: 20px;
  z-index: 999999;

  span {
    position: absolute;
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: transparent;
      `}

    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(0) rotate(-45deg);
        `}
    }

    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      transform: translateY(10px);
      right: 0;

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(0) rotate(45deg);
          width: 36px;
        `}
    }
  }
`;

// Desktop Menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 25px;
  }
`;

export const S = {
  Link,
  Mask,
  MenuItem,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
  DesktopMenu
}