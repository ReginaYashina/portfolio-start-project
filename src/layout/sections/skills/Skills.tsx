import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper direction={'column'}>
        <Skill></Skill>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
