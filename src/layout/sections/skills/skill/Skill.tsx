import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
  iconId: string;
  title: string;
  text: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkilTitle>{props.title}</SkilTitle>
      <SkillText>{props.text}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 32%;
  margin: 5px;
  background-color: #ffffff8a;
`;
const SkilTitle = styled.h3``;
const SkillText = styled.p``;
