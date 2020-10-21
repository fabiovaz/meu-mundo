import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const Contender = styled.div`
height: 100vh;
`;
export const Header = styled.div`
width: 100vw;
color: #222f3e;
display:flex;
align-items:center;
height:50px;

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
border:0;
background: #022b3a;
`;


export const Links = styled(Link)`
text-decoration:none;
color: inherit;
`;


export const TextHeader = styled.div`
width:100%;
display:flex;
justify-content:center;
justify-items:center;

h1{
font-weight:bold;
color: #ecf0f1;
}
`;


export const Content = styled.div`
margin-top: 5%;
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:center;
`;


export const Item = styled.div`
border-radius:20px;
margin: 3%;
background: #ecf0f1 ;
height:250px;
width: 300px;

& + &{
  margin: 3%;
}
`;

export const Linkto = styled(Link)`
display:flex;
align-items:center;
flex-direction:column;
text-decoration:none;
`
export const ItemImg = styled.img`
margin:10px;
height:200px;
width: 280px;
`;


export const ItemText = styled.strong`
color: #000;
text-align:center;
font-weight:bold;
font-size:20px;
`;
