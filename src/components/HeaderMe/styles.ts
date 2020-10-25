import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.div`
`;

export const Header = styled.div`
width:100%;
display:flex;
justify-content:center;
text-align:center;
`;

export const HeaderContent = styled.div`
width: 1120px;
color: #222f3e;
display:flex;
align-items:center;
justify-content:center;
height:70px;

@media (max-width: 700px){
  display:flex;
  align-self:center;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  height:200px;
}

`;


export const HeaderButton = styled.button`
display:flex;
align-items:center;
background:#c8d6e5;
border:0;

`;


export const Options = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
align-self:center;


font-size:34px;
font-weight:bold;


ul{
  display:flex;
  flex-direction:row;
  list-style:none;

}
li{
  margin: 0 15px 0 15px;
  &:hover{
    color: #000;
  }
}

@media (max-width: 700px){
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

font-size:24px;
font-weight:bold;

  ul{
  display:flex;
  flex-direction:column;
  list-style:none;

}
li{
  margin: 0 15px 0 15px;
  &:hover{
    color: #000;
  }
}
}
`;

export const Links = styled(Link)`
text-decoration:none;
color: inherit;
`;
