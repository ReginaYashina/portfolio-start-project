import React from 'react';
import photo from '../../../assets/img/photo.jpg';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { stopCoverage } from 'v8';
import { stderr } from 'process';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={'space-around'} align={'center'}>
        <div>
          <Descrription>Hi There</Descrription>
          <Name>
            I am <span>Regina Yashina</span>
          </Name>
          <MainTitle>A Web Developer</MainTitle>
        </div>
        <Photo src={photo} alt='photo' />
      </FlexWrapper>
    </StyledMain>
  );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;
const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #91b2ef;
`;

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
`;

const Name = styled.h2`
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
`;
const Descrription = styled.span`
  font-weight: 400;
  font-size: 14px;
`;
