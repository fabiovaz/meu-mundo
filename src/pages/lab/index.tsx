import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import backgroundChangeImg from '../../assets/background.gif';
import { Content, Header, HeaderButton, Item, ItemImg, ItemText, Links, TextHeader } from './styles';
const Lab: React.FC = () => {
  return (
    <>
      <Header>
        <Links to='/' >
          <HeaderButton> <FiArrowLeft size={34} color="#ecf0f1" /> </HeaderButton>
        </Links>
        <TextHeader>
          <h1>My lab Aqui tem Criações, Testes e outras loucuras</h1>
        </TextHeader>

      </Header>
      <Content>
        <Link to='background'>
          <Item>
            <ItemImg src={backgroundChangeImg} >

            </ItemImg>
            <ItemText>
              ChangeBackgroundColor
          </ItemText>
          </Item>
        </Link>
      </Content>
    </>
  );
}

export default Lab;
