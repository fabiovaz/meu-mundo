import styled from 'styled-components';
export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
color: #222f3e;

h1{
  margin-top:20px;
  font-size:40px;
  font-weight:bold;
}
`;
export const ContainerInformation = styled.div`
border:1px solid red;
margin-top:36px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;

@media (max-width: 700px){
  flex-direction:column;
}
`;


export const Item = styled.div`
display:flex;
align-items:center;
flex-direction:column;
border:1px solid;

img {
  height:400px;
  margin-left:10px;
}
`;
