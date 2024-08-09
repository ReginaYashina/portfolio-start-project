import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'
import { Link } from '../../../components/Link'
import { Button } from '../../../components/Button'

const Works = styled.section`
  position: relative;
  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      gap: 47px;
    }
  }
`

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;
    & + ${Link} {
      margin: 0 20px;
    }
  }

  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`
const ImageWrapper = styled.div`
  position: relative;

  &:before {
    content: '';
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:before {
      content: '';
      width: 100%;
      height: 100%;
    }
  }

  @media ${theme.media.tablet} {
    &:before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h3``

const Text = styled.p`
  margin: 14px 0 10px;
  line-height: 1.4;
`

const Description = styled.div`
  padding: 25px 20px;
  /* display: flex;
  flex-direction: column; */
`

// TabMenu
const TabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 40px;
    max-width: 352px;
    width: 100%;
  }
`

const ListItem = styled.li``

export const S = {
  Works,
  Work,
  ImageWrapper,
  Image,
  Description,
  Title,
  Text,
  TabMenu,
  ListItem,
}
