import styled from 'styled-components';

export const Container = styled.div`
height:100vh;

@media (max-width: 700px){
  height:100%
}
`;

export const Content = styled.div`
height:80%;

display:flex;
align-items:center;
align-self:center;
justify-content:center;
`;


export const ContainerInformation = styled.div`
max-width:1120px;
margin-top:20px;
height:80%;
color: #222f3e;
display:flex;
width:100%;
align-items:center;
flex-direction:row;
justify-content:space-around;

@media (max-width: 700px){
  flex-direction:column;
}
`;

export const CartSkills = styled.div`
border: 1px solid;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
margin:10px 10px;
border-radius: 20px;
box-shadow: 5px 5px 5px black;

background:#f5f6fa;

h2{
  margin:15px;
  font-weight:bold;
}

ul{
  width:100%;
  align-items:left;
  border-top: 3px solid;
  border-bottom: 3px solid;
  list-style:none;
  margin:5px 0 25px
}
li{
  margin:5px;
  text-decoration:none;
  font-weight:bold;
}
`;
