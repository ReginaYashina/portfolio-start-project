import React from 'react'
import photo from '../../../assets/img/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { S } from './Main_Styles'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt'

export const Main: React.FC = () => {
  return (
    <S.Main id={'home'}>
      <Container>
        <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
          <S.ContentWrapper>
            <S.Description>Hi There</S.Description>
            <S.Name>
              I am <span>Regina Yashina</span>
            </S.Name>
            {/* <S.MainTitle>A Web Developer</S.MainTitle> */}

            <S.MainTitle>
              <p>A Web Developer</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Frontend Developer.'],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                }}
              />
            </S.MainTitle>
          </S.ContentWrapper>
          <Tilt
            className='background-stripes parallax-effect-glare-scale'
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <S.PhotoWrapper>
              <S.Photo src={photo} alt='photo' />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  )
}
