import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 600,
    Fmax: 36,
    Fmin: 30,
  })}
  text-align: center;
  letter-spacing: 0.14em;
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 60px;

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
  @media ${theme.media.mobile} {
    padding-bottom: 24px;
    margin-bottom: 50px;
  }
`;
