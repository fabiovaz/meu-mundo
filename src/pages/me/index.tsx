import React from 'react';
import Cat from '../../assets/cat.gif';
import HeaderMe from '../../components/HeaderMe';
import { ContainerInformations, MyInformations } from './styles';


const Me: React.FC = () => {
  document.body.style.background = "#c8d6e5";
  return (
    <>
      <HeaderMe />
      <ContainerInformations>
        <MyInformations>
          <h2>Primeiramente Bem vindo :</h2>
          <p>Vocês com certeza devem estar se perguntando quem é esse gato tão lindo?</p>
          <p> Eu vou explicar esse rapaz além de lindo, engraçado é também um programador muito determinado
        e ama o que faz.</p>
          <h2>A jornada:</h2>
          <p>Fiquei focado durante 6 meses aperfeiçoando minhas habilidades técnicas apenas estudando e fazendo
          cursos, atualmente procurando um emprego na área de desenvolvimento onde possa
        aperfeiçoar as minhas  habilidades e contribuir com a comunidade.</p>
        </MyInformations>
        <aside>
          <img src={Cat} alt="Cat" />
        </aside>
      </ContainerInformations>
    </>
  );
}

export default Me;
