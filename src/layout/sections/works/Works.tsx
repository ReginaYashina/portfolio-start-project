import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';

const items = ['All', 'Landing page', 'React', 'SPA'];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={items} />
      <FlexWrapper>
        <Work />
        <Work />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #e3e0ff;
`;
