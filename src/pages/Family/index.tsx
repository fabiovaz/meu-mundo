import React from 'react';
import HeaderMe from '../../components/HeaderMe';
import SimpleSlider from '../../components/SimpleSlide';
import { Container } from './styles';



const Family: React.FC = () => {

  document.body.style.background = "#c8d6e5";
  return (
    <Container>
      <HeaderMe />
      <h1>Família</h1>

      <SimpleSlider />

    </Container >
  );
}

export default Family;
