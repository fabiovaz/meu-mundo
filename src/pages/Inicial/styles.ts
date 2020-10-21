import { shade } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Conteiner = styled.div`
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
align-self:center;

h1{
  font-size: 40px;
  font-weight:bold;
}

span,p{
  font-weight:bold;
  font-size:20px;
  margin-top:10px;
}
img{
  margin-top:15px;
  height:250px;
  width:230px;
  border-radius: 50%;
}
p{
  margin-top:10px;
}
`;

export const Buttons = styled.div`
margin-top:15px;
`;


export const ButtonMe = styled.button`
background: #ef233c;
width:150px;
border: 0;
color: #fff;
height: 56px;
border-radius:10px;
padding:0 5px;
font-weight:bold;

&:hover{
  background:${shade(0.2, '#ef233c')}
}
`;

export const ButtonMyLab = styled.button`
margin-left:7px;
background: #00b4d8;
border: 0;
color: #fff;
height: 56px;
width:150px;
border-radius:10px;
padding:0 5px;
font-weight:bold;

&:hover{
  background:${shade(0.2, '#00b4d8')}
}
`;


export const Linkto = styled(Link)`
text-decoration:none;
color: #fff;
`;
