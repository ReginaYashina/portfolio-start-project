import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";

const SocialItemData = [
  {
    iconId: "instagram",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "vk",
  },
  {
    iconId: "linkedin",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Regina</S.Name>
        <S.SocialList>
          {SocialItemData.map((s, index: number) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon
                    iconId={s.iconId}
                    width={"21"}
                    height={"21"}
                    viewBox={"0 0 21 21"}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>© 2024 Regina Yashina, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
