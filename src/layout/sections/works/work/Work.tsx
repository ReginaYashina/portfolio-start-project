import React from 'react';
import styled from 'styled-components';

export const Work = () => {
  return (
    <StyledWork>
      <Image src='' alt='' />
      <Title>Social Network</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit.
      </Text>
      <Link></Link>
      <Link></Link>
    </StyledWork>
  );
};

const StyledWork = styled.div``;

const Image = styled.img``;

const Title = styled.h3``;

const Text = styled.p``;

const Link = styled.a``;
