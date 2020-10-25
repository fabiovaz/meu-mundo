import React, { useState } from 'react';
import HeaderLab from '../../components/HeaderLab';
import { BackContent, ButtonPlay, Contender, Content, ViewContent } from './styles';


const ChangeBackground: React.FC = () => {
  const [play, setPlay] = useState(true)
  return (
    <Contender>
      <HeaderLab title='ChangeBackgroud' />
      <BackContent>
        <ViewContent>
          <Content play={play} >
            <ButtonPlay onClick={() => setPlay(!play)} >
              {play ? 'Stop!' : 'Play!'}
            </ButtonPlay>
          </Content>
        </ViewContent>
      </BackContent>
    </Contender>
  )
};

export default ChangeBackground;
