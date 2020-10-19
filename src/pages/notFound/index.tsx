import React from 'react';
import { Link } from 'react-router-dom';
import FilipeImg from '../../assets/filipe.jpg';
import { Content, ContentText, ImageContent } from './styles';


const notFound: React.FC = () => {

  return (
    <Content>
      <ContentText>
        <h1>
          404 notFound
        </h1>
        <h2>
          Ooops: Pagina não encontrada, aposto que isso pode ter sido uma malandragem sua.
        </h2>

        <h2>
          Mas não tem problema click na foto do bonitão ao lado e ele ira te redirecionar.
        </h2>
      </ContentText>
      <Link to='/' >
        <ImageContent src={FilipeImg} />
      </Link>
    </Content>
  );
}


export default notFound;
