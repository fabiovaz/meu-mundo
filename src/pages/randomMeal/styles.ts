import styled from 'styled-components';

export const Conteiner = styled.div`

`;


export const MealView = styled.div`
margin-top: 5%;
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
justify-content:center;
flex-direction:row;
flex-wrap:wrap;
width:100%;
`;


export const MealImg = styled.img`
width:450px;
margin:3% 2% 1% 5%;
`;


export const MealInstructions = styled.p`
width:550px;
margin:3% 5% 1% 2%;
font-size:17px;
`;

export const MealTypes = styled.div`
width:20%;
display:flex;
align-self:auto;
flex-direction:column;
margin:0 23%;

@media(max-width: 700px){
  width:70%;
}
`;

export const MealTypesItem = styled.div`
align-items:center;
font-weight:bold;
display:flex;
flex-direction:row;
`;

export const MealTypesText = styled.p`
font-weight:normal;
margin:3px;
`;


export const MealIngredients = styled.div`
width:20%;
display:flex;
align-self:auto;
flex-direction:column;
margin:0 23%;

h3{
  font-weight:bold;
}
@media(max-width: 700px){
  width:70%;
}
`;

export const ListIngredients = styled.ul`
list-style:none;
`;


export const ItemIngredients = styled.li`
margin: 2px 4px;
`;
