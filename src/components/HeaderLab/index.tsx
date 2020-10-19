import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Header, HeaderButton, Links, TextHeader } from './styles';

interface HeaderProps {
  title: string;
}

const HeaderLab: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <Header>
      <Links to='/lab' >
        <HeaderButton> <FiArrowLeft size={34} color="#ecf0f1" /> </HeaderButton>
      </Links>
      <TextHeader>
        <h1>{title}</h1>
      </TextHeader>
    </Header>
  );
}

export default HeaderLab;
