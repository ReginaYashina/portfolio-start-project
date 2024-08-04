import React from "react";
import photo from "../../../assets/img/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
          <S.ContentWrapper>
            <S.Description>Hi There</S.Description>
            <S.Name>
              I am <span>Regina Yashina</span>
            </S.Name>
            <S.MainTitle>A Web Developer</S.MainTitle>
          </S.ContentWrapper>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt='photo' />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
