import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Regina</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"instagram"}
                width={"21"}
                height={"21"}
                viewBox={"0 0 21 21"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"telegram"}
                width={"21"}
                height={"21"}
                viewBox={"0 0 21 21"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"vk"}
                width={"21"}
                height={"21"}
                viewBox={"0 0 21 21"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"linkedin"}
                width={"21"}
                height={"21"}
                viewBox={"0 0 21 21"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2024 Regina Yashina, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 30vh;
  background-color: #bcead0;
`;
const Name = styled.span``;
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a``;
const Copyright = styled.small``;
