import styled from 'styled-components';

export const Conteiner = styled.div`
`;

export const MealConteiner = styled.div`

width:100%;
display:flex;
align-items:center;
align-content:center;
justify-content:center;
`;

export const MealView = styled.div`
max-width:1120px;
display:flex;
align-items:center;
align-content:center;
justify-content:center;
flex-direction:column;
`;

export const MealSize = styled.div`
margin-top: 5%;
width:100%;
background:#f5f6fa;
display:flex;
align-items:center;
align-content:center;
justify-content:center;
flex-direction:column;
min-height:84vh;
color: #000;

`;


export const MealButton = styled.button`
display:flex;
font-weight:bold;
align-self:center;
align-items:center;
align-content:center;
justify-content:center;
background:#25CCF7;
border:0;
height:50px;
width:160px;
margin:5px;
border-radius:10px;
`;

export const MealContent = styled.div`
display:flex;
align-self:center;
align-content:center;
flex-direction:column;
width:100%;
`;

export const MealText = styled.h1`
margin-top:1%;
font-weight:bold;
text-align:center
`;

export const MealInformation = styled.div`
margin-top:1%;
display:flex;
align-self:center;
justify-content:space-around;
flex-direction:row;
flex-wrap:wrap;
width:100%;

@media (max-width:700px){
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
`;


export const MealImg = styled.img`
width:40%;
height:40%;
`;

export const MealRequirements = styled.div`
display:flex;
align-items:center;
align-self:center;
flex-direction:column;
width:50%;
`;

export const MealTypes = styled.div`
margin-left:3%;
display:flex;
align-self:auto;
justify-content:space-around;
flex-direction:row;


@media(max-width: 700px){
  width:70%;
}
`;

export const MealTypesItem = styled.div`
padding:10px;
align-items:center;
font-weight:bold;
display:flex;
flex-direction:column;
`;

export const MealTypesText = styled.p`
display:flex;
flex-direction:column;
font-weight:500;
margin:3px;
`;


export const MealIngredients = styled.div`
width:100%;
display:flex;
align-self:auto;
flex-direction:column;
text-align:center;

h3{
  margin-top:16px;
  font-size:30px;
  font-weight:700px;
  margin-bottom:20px;
}
@media(max-width: 700px){
  width:100%;
}
`;

export const ListIngredients = styled.ul`
width:100%;
columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
list-style:decimal;

@media(max-width:700px){
  width:120%;
}
`;


export const ItemIngredients = styled.li`
font-size:16px;
margin: 14px;
`;


export const MealInstructions = styled.div`
h3{
  font-size:32px;
  font-weight:700;
}

p{
  font-size:15px;
  font-weight:500;
}

width:95%;
margin:2%;
`;
