import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section``;

const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 59px;

  @media ${theme.media.mobile} {
    padding: 27px 0 75px;
  }
`;
const SkilTitle = styled.h3`
  text-transform: uppercase;
  margin: 70px 0 15px;
`;
const SkillText = styled.p`
  text-align: center;
  line-height: 1.4;
`;
const IconWrapper = styled.div`
  position: relative;

  &:before {
    content: "";
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
export const S = {
  Skills,
  Skill,
  SkilTitle,
  SkillText,
  IconWrapper,
}