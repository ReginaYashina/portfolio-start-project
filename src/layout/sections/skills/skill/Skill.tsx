import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

export const Skill = () => {
  return (
    <StyledSkill>
      <Icon iconId='code' />
      <SkilTitle>html5</SkilTitle>
      <SkillText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim
      </SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div``;
const SkilTitle = styled.h3``;
const SkillText = styled.p``;
