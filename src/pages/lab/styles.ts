import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const Contender = styled.div`
height: 100vh;
text-align:center
`;
export const Header = styled.div`
display:flex;
align-items:center;
align-self:center;
justify-content:center;

@media (max-width: 700px){
margin-top:5%;
}
`;

export const HeaderContent = styled.div`
max-width:1120px;
width:100%;
color: #222f3e;
display:flex;
align-items:center;
align-self:center;
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
margin-right:25px;
`;


export const Links = styled(Link)`
text-decoration:none;
color: inherit;
`;


export const TextHeader = styled.div`
padding:32px;
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
display:flex;
align-items:center;
align-self:center;
justify-content:center;
width:100%;
`;

export const ContentInformation = styled.div`
max-width:1120px;
width:100%;
margin-top: 32px;
display:flex;
align-items:center;
align-self:center;
flex-wrap:wrap;
justify-content:space-around;


@media (max-width: 700px){
  display:flex;
  align-self:center;
  align-items:center;
  justify-content:center;
}
`;


export const Item = styled.div`
border-radius:20px;
margin:24px;
background: #ecf0f1 ;
height:250px;
width: 300px;

& + &{
  margin: 24px;
}
`;

export const Linkto = styled(Link)`
display:flex;
align-items:center;
flex-direction:column;
text-decoration:none;
`
export const ItemImg = styled.img`
border:1px solid black;
border-radius:8px;
margin:8px;
height:200px;
width: 286px;
`;


export const ItemText = styled.strong`
color: #000;
text-align:center;
font-weight:bold;
font-size:16px;
`;
