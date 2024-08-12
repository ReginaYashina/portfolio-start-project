import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { font } from '../../styles/Common'

const Footer = styled.footer`
  position: relative;
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`
const Name = styled.span`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 700,
    Fmax: 22,
    Fmin: 16,
  })}
  letter-spacing: 0.14em;
`
const SocialList = styled.ul`
  display: flex;
  margin: 30px 0;
  gap: 20px;
`
const SocialItem = styled.li``

const SocialLink = styled.a`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animations.transition};
  
  color: ${theme.colors.accent};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`
const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
}
