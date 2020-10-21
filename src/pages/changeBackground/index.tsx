import React, { useState } from 'react';
import HeaderLab from '../../components/HeaderLab';
import { ButtonPlay, Contender, Content } from './styles';


const ChangeBackground: React.FC = () => {
  const [play, setPlay] = useState(true)
  return (
    <Contender>
      <HeaderLab title='ChangeBackgroud' />
      <Content play={play} >
        <ButtonPlay onClick={() => setPlay(!play)} >
          {play ? 'Stop!' : 'Play!'}
        </ButtonPlay>
      </Content>
    </Contender>
  )
};

export default ChangeBackground;
