import React from 'react';
import photo from '../../../assets/img/photo.jpg';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
          <div>
            <Description>Hi There</Description>
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
  margin-top: 65px;

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

    @media screen and (max-width: 950px) {
      top: -18px;
      left: 5px;
    }

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`;
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

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
  ${font({
    weight: 400,
    Fmax: 27,
    Fmin: 20,
  })}
`;
const Name = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36,
  })}
  letter-spacing: 0.05em;
  margin: 10px 0;

  & span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

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

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;
const Description = styled.span`
  font-weight: 400;
  font-size: 14px;
`;
