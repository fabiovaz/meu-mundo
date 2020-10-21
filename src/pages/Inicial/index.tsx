import React from 'react';
import euImg from '../../assets/filipe.jpg';
import { ButtonMe, ButtonMyLab, Buttons, Conteiner, Linkto } from './styles';
const Inicial: React.FC = () => {
  document.body.style.background = "#022b3a";
  return (
    <Conteiner>
      <h1>Bem Vindo!!</h1>
      <span>Eu sou o Filipe</span>
      <img src={euImg} alt="Filipe" />
      <p>E esse é o meu mundo</p>
      <p>de desenvolvedor</p>
      <Buttons>
        <Linkto to="/me"><ButtonMe>Sobre mim</ButtonMe></Linkto>
        <Linkto to="/lab"><ButtonMyLab>Meu laboratório</ButtonMyLab></Linkto>
      </Buttons>
    </Conteiner >
  )
}


export default Inicial;
