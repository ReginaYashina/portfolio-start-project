import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

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
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`;
const Name = styled.span`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 700,
    Fmax: 22,
    Fmin: 16,
  })}
  letter-spacing: 0.14em;
`;
const SocialList = styled.ul`
  display: flex;
  margin: 30px 0;
  gap: 20px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`;
const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;
