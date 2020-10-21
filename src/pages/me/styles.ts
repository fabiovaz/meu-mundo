import { shade } from 'polished';
import styled from 'styled-components';


export const Content = styled.div`
height:100vh;

@media (max-width: 700px){
  height:100%
}
`;

export const ContainerInformations = styled.div`
height:80%;
display:flex;
align-items:center;
justify-content:center;
margin-top:40px;
aside{
  margin-right:5px;
  img{
    margin:0 20px;
    border-radius:10px;
    width:400px;
    height:400px
}
}

@media (max-width: 700px){
  margin-top:30px;
  display:flex;

  img{
    display:none;
  }
}
`;

export const MyInformations = styled.div`
border: 1px solid;
margin:20px 15px;
border-radius: 20px;
width:700px;
box-shadow: 5px 5px 5px black;

background:#f5f6fa;

color: ${shade(0.05, "#222f3e")};
font-weight:bold;

h2{
  color: #222f3e;
  font-size:30px;
  margin-top:20px;
  font-weight:bold;
  margin-left:13px;
}

p{
  font-size:20px;
  margin: 10px 15px;
  line-height:1.2;

}
@media (max-width: 720px){
  h2{
  font-size:25px;
  }
  p{
    font-size:16px;
  }
}
`;
