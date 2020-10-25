import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Content = styled.div`
`;

export const Header = styled.div`
width:100%;
display:flex;
align-items: center;
justify-content:center;
`;

export const HeaderContent = styled.div`
width: 1120px;
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
  height:150px;
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
