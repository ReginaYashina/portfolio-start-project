import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/img/project-1.jpg";
import timerImg from "../../../assets/img/project-2.jpg";
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles";

const worksItems = ["All", "Landing page", "React", "SPA"];

const workData = [
  {
    src: socialImg,
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    src: timerImg,
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper
          justify={"space-between"}
          align={"flex-start"}
          wrap={"wrap"}
          gap={"30px"}
        >
          {workData.map((w, index: number) => {
            return (
              <Work src={w.src} title={w.title} text={w.text} key={index} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
