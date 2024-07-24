import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 0.14em;
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 60px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
`;
