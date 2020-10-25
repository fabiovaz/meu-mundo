import React from 'react';
import { FiArrowLeft, FiGithub } from 'react-icons/fi';
import { Content, Header, HeaderButton, HeaderContent, Links, TextHeader } from './styles';

interface HeaderProps {
  title: string;
}

const HeaderLab: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <Content>
      <Header>
        <HeaderContent>
          <Links to='/lab' >
            <HeaderButton> <FiArrowLeft size={34} color="#ecf0f1" /> </HeaderButton>
          </Links>
          <TextHeader>
            <h1>{title}</h1>
          </TextHeader>
          <HeaderButton>
            <a target="_blanck" href='https://github.com/Cavalcantefilipe' >
              <FiGithub size={34} color="#ecf0f1" />
            </a>
          </HeaderButton>
        </HeaderContent>
      </Header>
    </Content>
  );
}

export default HeaderLab;
