import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Header, HeaderButton, Links, Options } from './styles';

const HeaderMe: React.FC = () => (
  <Header>
    <Links to='/' >
      <HeaderButton> <FiArrowLeft size={34} color="#222f3e" /> </HeaderButton>
    </Links>
    <Options>
      <ul>
        <li>
          <Links to="/me">
            Sobre Mim
              </Links>
        </li>
        <li>
          <Links to="/skills">
            Habilidades
              </Links>
        </li>
        <li>
          <Links to="/family">
            Família
              </Links>
        </li>
      </ul>
    </Options>
  </Header>
)

export default HeaderMe;
