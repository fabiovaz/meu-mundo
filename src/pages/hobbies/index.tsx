import React from 'react';
import AyrtonSenna from '../../assets/ayrton-senna.jpg';
import Cerveja from '../../assets/cerveja.jpg';
import Corinthians from '../../assets/corinthians.jpg';
import Programacao from '../../assets/desenvolvimento.jpg';
import Ronaldo from '../../assets/fenomeno.jpg';
import Leonardo from '../../assets/leonardo.jpg';
import Musica from '../../assets/musica.jpg';
import Musk from '../../assets/musk.jpg';
import Viagens from '../../assets/viagens.jpg';
import CardAnimated from '../../components/CardsAnimated';
import HeaderLab from '../../components/HeaderLab';
import { Content, ItensDiv, View } from './styles';

const Hobbies: React.FC = () => {
  return (
    <Content>
      <HeaderLab
        title="Hobbies e pessoas que gosto e admiro
       que podem ser constantemente mudados"
      />

      <View>
        <ItensDiv>
          <CardAnimated
            name="Ayrton Senna"
            description="Sempre ouvi as pessoas falarem bem dele e de seus feitos
           após pesquisar percebi que ele era Simplesmente Incrível."
            link="https://www.youtube.com/watch?v=1RkOMEjG-J4"
            picture={AyrtonSenna}
          />

          <CardAnimated
            name="Leonardo"
            description="Admiro ele por ser muito cara de pau esta sempre
          sorrindo e brincando e sem falar que as musicas do 'homi' e muito boa."
            picture={Leonardo}
          />

          <CardAnimated
            name="Musica"
            description="Na Maior parte do meu tempo sempre estou ouvindo todos os
          estilos e sempre buscando cada vez musicas novas."
            picture={Musica}
          />

          <CardAnimated
            name="Corinthians"
            description="Um time que eu amo apesar de tudo e tenho orgulho de falar
           que faço parte desse bando de louco esse nunca vai sair daqui."
            link="https://www.youtube.com/watch?v=0v6FoUEMclM"
            picture={Corinthians}
          />

          <CardAnimated
            name="Ronaldo Fenômeno"
            description="A historia da copa de 2002 pra mim resume tudo
          eu vi ele jogar no meu time, pra mim foi o melhor da historia."
            link="https://www.youtube.com/watch?v=XaHg8qF_vyk"
            picture={Ronaldo}
          />

          <CardAnimated
            name="Elon Musk"
            description="Esse cara é um gênio eu sinto que ele é uma pessoa do bem
          posso esta profundamente errado mas faz parte."
            link="https://www.youtube.com/watch?v=jUb6jH-Zo_k"
            picture={Musk}
          />

          <CardAnimated
            name="Programação"
            description="Atualmente a coisa que mais faço e tenho uma historia muito
          legal de como meu amor ficou forte por isso."
            link="https://www.notion.so/Meu-amor-por-T-I-993f6329fe234fada48254d4ee912843"
            picture={Programacao}
          />

          <CardAnimated
            name="Viagens"
            description="Atualmente não tem como viajar tanto mas é uma coisa sempre
          que tenho a oportunidade eu faço não importa para onde."
            picture={Viagens}
          />

          <CardAnimated
            name="Cerveja"
            description="Gosto muito de beber um cerveja e conversar agua nem sempre
           devemos conversar coisas serias pois tomar uma e falar agua e ótimo."
            picture={Cerveja}
          />
        </ItensDiv>
      </View>
    </Content>
  );
};

export default Hobbies;
