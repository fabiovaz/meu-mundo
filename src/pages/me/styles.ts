import { shade } from 'polished';
import styled from 'styled-components';


export const Content = styled.div`
height:100vh;

@media (max-width: 700px){
  height:100%
}
`;

export const Container = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
height:80%;
`;

export const ContainerInformations = styled.div`
max-width:1120px;
display:flex;
align-items:center;
justify-content:space-between;
aside{
  img{
    border-radius:10px;
    width:80%;
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
width:80%;
box-shadow: 5px 5px 5px black;

background:#f5f6fa;

color: ${shade(0.05, "#222f3e")};
font-weight:normal;

h2{
  color: #222f3e;
  font-size:25px;
  margin-top:20px;
  font-weight:bold;
  margin-left:13px;
}

p{
  font-size:20px;
  margin: 10px 15px;
  line-height:1.2;

}
@media (max-width: 760px){
  h2{
  font-size:20px;
  }
  p{
    font-size:16px;
  }
}
`;
