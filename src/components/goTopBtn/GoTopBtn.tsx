import React from 'react'
import { styled } from 'styled-components'
import { Icon } from '../icon/Icon'

export const GoTopBtn: React.FC = () => {
  return (
    <StyledGoTopBtn>
      <Icon iconId={'toTop'} height={'15'} width={'16'} />
    </StyledGoTopBtn>
  )
}

const StyledGoTopBtn = styled.button`
  /* width: 30px;
  height: 30px; */
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999999;
`
