import React from 'react'
import { Icon } from '../icon/Icon'
import { animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components'

export const Logo: React.FC = () => {
  return (
    <LogoLink
      onClick={() => {
        scroll.scrollToTop()
      }}
    >
      <Icon iconId={'code'} />
    </LogoLink>
  )
}

const LogoLink = styled.a`
  cursor: pointer;
`
