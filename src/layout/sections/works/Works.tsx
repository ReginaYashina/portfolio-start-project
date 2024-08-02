import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/img/project-1.jpg';
import timerImg from '../../../assets/img/project-2.jpg';
import { Container } from '../../../components/Container';

const worksItems = ['All', 'Landing page', 'React', 'SPA'];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper
          justify={'space-between'}
          align={'flex-start'}
          wrap={'wrap'}
          gap={'30px'}
        >
          <Work
            src={socialImg}
            title={'Social Network'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
          />
          <Work
            src={timerImg}
            title={'Timer'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
            }
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section``;
