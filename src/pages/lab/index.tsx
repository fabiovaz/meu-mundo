import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import backgroundChangeImg from '../../assets/background.gif';
import { Contender, Content, Header, HeaderButton, Item, ItemImg, ItemText, Links, Linkto, TextHeader } from './styles';
const Lab: React.FC = () => {
  return (
    <Contender>
      <Header>
        <Links to='/' >
          <HeaderButton> <FiArrowLeft size={34} color="#ecf0f1" /> </HeaderButton>
        </Links>
        <TextHeader>
          <h1>My lab Aqui tem Criações, Testes e outras loucuras</h1>
        </TextHeader>

      </Header>
      <Content>
        <Item>
          <Linkto to='background'>
            <ItemImg src={backgroundChangeImg} >

            </ItemImg>
            <ItemText>
              ChangeBackgroundColor
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
        <Item>
          <Linkto to='background'>
            <ItemImg src={backgroundChangeImg} >

            </ItemImg>
            <ItemText>
              ChangeBackgroundColor
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
        <Item>
          <Linkto to='background'>
            <ItemImg src={backgroundChangeImg} >

            </ItemImg>
            <ItemText>
              ChangeBackgroundColor
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
      </Content>
    </Contender>
  );
}

export default Lab;
