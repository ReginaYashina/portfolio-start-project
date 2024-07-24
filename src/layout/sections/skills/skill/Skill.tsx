import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type SkillPropsType = {
  iconId: string;
  title: string;
  text: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={'column'} align={'center'}>
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <SkilTitle>{props.title}</SkilTitle>
        <SkillText>{props.text}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 40px;
`;
const SkilTitle = styled.h3`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 70px 0 15px;
`;
const SkillText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
`;

const IconWrapper = styled.div`
  position: relative;

  &:before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-45deg) translate(-50%, -50%);
    transform-origin: top left;

    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
