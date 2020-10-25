import React from 'react';
import { FiArrowLeft, FiGithub } from 'react-icons/fi';
import backgroundChangeImg from '../../assets/background.gif';
import randomMeal from '../../assets/randomMeal.gif';
import { Contender, Content, ContentInformation, Header, HeaderButton, HeaderContent, Item, ItemImg, ItemText, Links, Linkto, TextHeader } from './styles';
const Lab: React.FC = () => {
  return (
    <Contender>
      <Header>
        <HeaderContent>
          <Links to='/' >
            <HeaderButton> <FiArrowLeft size={34} color="#ecf0f1" /> </HeaderButton>
          </Links>
          <TextHeader>
            <h1>Criações, Testes e outras loucuras</h1>
          </TextHeader>
          <HeaderButton>
            <a target="_blanck" href='https://github.com/Cavalcantefilipe' >
              <FiGithub size={34} color="#ecf0f1" />
            </a>
          </HeaderButton>
        </HeaderContent>
      </Header>
      <Content>
        <ContentInformation>
          <Item>
            <Linkto to='random-meal'>
              <ItemImg src={randomMeal} >

              </ItemImg>
              <ItemText>
                Random Meal Generator
          </ItemText>
            </Linkto>
          </Item>
          <Item>
            <Linkto to='background'>
              <ItemImg src={backgroundChangeImg} >

              </ItemImg>
              <ItemText>
                ChangeBackgroundColor
          </ItemText>
            </Linkto>
          </Item>
        </ContentInformation>
      </Content>
    </Contender>
  );
}

export default Lab;
