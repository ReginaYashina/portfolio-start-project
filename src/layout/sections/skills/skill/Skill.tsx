import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string;
  title: string;
  text: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.IconWrapper>
          <Icon iconId={props.iconId} />
        </S.IconWrapper>
        <S.SkilTitle>{props.title}</S.SkilTitle>
        <S.SkillText>{props.text}</S.SkillText>
      </FlexWrapper>
    </S.Skill>
  );
};
