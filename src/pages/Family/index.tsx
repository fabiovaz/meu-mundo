import React from 'react';
import HeaderMe from '../../components/HeaderMe';
import SimpleSlider from '../../components/SimpleSlide';
import { Container, ContainerInformation } from './styles';



const Family: React.FC = () => {

  document.body.style.background = "#c8d6e5";
  return (
    <Container>
      <HeaderMe />
      <ContainerInformation>
        <SimpleSlider />
      </ContainerInformation>

    </Container >
  );
}

export default Family;
