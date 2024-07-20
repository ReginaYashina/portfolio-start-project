import React from 'react';
import styled from 'styled-components';

type WorkPropsType = {
  src: string;
  title: string;
  text: string;
}


export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt='' />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href=''>demo</Link>
      <Link href=''>code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #bdf8c8;
  max-width: 540px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
`;

const Title = styled.h3``;

const Text = styled.p``;

const Link = styled.a``;
