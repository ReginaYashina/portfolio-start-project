import React from 'react';
import photo from '../../../assets/img/photo.jpg';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { stopCoverage } from 'v8';
import { stderr } from 'process';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
          <div>
            <Descrription>Hi There</Descrription>
            <Name>
              I am <span>Regina Yashina</span>
            </Name>
            <MainTitle>A Web Developer</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt='photo' />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &:before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    display: block;

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -10px;
      left: 10px;
    }
  }
`;
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;
const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #c3d3f2;
  display: flex;
`;
const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
`;
const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;

  & span {
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      display: inline-block;
      bottom: 0;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      z-index: -1;
    }
  }
`;
const Descrription = styled.span`
  font-weight: 400;
  font-size: 14px;
`;
