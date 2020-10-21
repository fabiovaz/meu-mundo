import styled from 'styled-components';
export const Container = styled.div`
height:100vh;

@media (max-width: 700px){
  height:100%
}
`;
export const ContainerInformation = styled.div`

margin-top:5%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

@media (max-width: 700px){
  flex-direction:column;
}
`;


