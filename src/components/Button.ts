import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  z-index: 0;

  position: relative;

  &:hover {
    &:before {
      content: '';
      width: 100%;
      height: 100%;
    }
  }

  &:before {
    content: '';
    display: inline-block;
    width: 50%;
    height: 10px;
    background-color: ${theme.colors.accent};
    z-index: -1;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
