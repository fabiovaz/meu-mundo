import React from 'react';
import HeaderMe from '../../components/HeaderMe';
import { CartSkills, Container, ContainerInformation } from './styles';


const Skills: React.FC = () => {
  document.body.style.background = "#c8d6e5";
  return (
    <Container>
      <HeaderMe />
      <ContainerInformation>
        <CartSkills>
          <h2>Linguagens e Banco de dados:</h2>

          <ul>
            <li>
              Javascript: Intermediário;
            </li>
            <li>
              NodeJs: Intermediário;
            </li>
            <li>
              ReactJs: Intermediário;
            </li>
            <li>
              React Native: Intermediário;
            </li>
            <li>
              PHP: Intermediário;
            </li>
            <li>
              Laravel: Intermediário;
            </li>
            <li>
              MySQL: Intermediário;
            </li>
            <li>
              Postgres: Intermediário;
            </li>
            <li>
              Redis: Básico;
            </li>
            <li>
              mongodb: Básico;
            </li>
          </ul>
        </CartSkills>

        <CartSkills>
          <h2>Boas Praticas:</h2>

          <ul>
            <li>
              SOLID
            </li>
            <li>
              TDD
            </li>
            <li>
              DDD
            </li>
            <li>
              Microservices
            </li>
            <li>
              MVC
            </li>
            <li>
              RestFull
            </li>
            <li>
              Clean Code
            </li>
          </ul>
        </CartSkills>

        <CartSkills>
          <h2>Pessoais:</h2>

          <ul>
            <li>
              Bonito
            </li>
            <li>
              Determinado
            </li>
            <li>
              Comunicativo | "Falador se preferir"
            </li>
            <li>
              Esforçado
            </li>
            <li>
              Focado
            </li>
            <li>
              Autodidata
            </li>
            <li>
              Engraçado | "Não é Ave Maria, mas é cheio de graça"
            </li>
            <li>
              Ja disse Bonito Lindo e Maravilhoso
            </li>
          </ul>
        </CartSkills>

      </ContainerInformation>
    </Container>
  );
}

export default Skills;
