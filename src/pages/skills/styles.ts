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
height:100%;
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
