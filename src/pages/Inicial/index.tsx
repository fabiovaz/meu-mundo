import React from 'react';
import { Link } from 'react-router-dom';
import euImg from '../../assets/filipe.jpg';
import { ButtonMe, ButtonMyLab, Buttons, Conteiner } from './styles';
const Inicial: React.FC = () => {
  document.body.style.background = "#022b3a";
  return (
    <Conteiner>
      <h1>Bem Vindo!!</h1>
      <span>Eu sou o Filipe</span>
      <img src={euImg} alt="Eu" />
      <p>E esse é o meu mundo</p>
      <p>de desenvolvedor</p>
      <Buttons>
        <Link to="/me"> <ButtonMe>Sobre mim</ButtonMe> </Link>
        <Link to="/lab"><ButtonMyLab>Meu laboratório</ButtonMyLab> </Link>
      </Buttons>
    </Conteiner >
  )
}


export default Inicial;
