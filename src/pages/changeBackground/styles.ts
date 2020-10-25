import styled from 'styled-components';

interface ContentProps {
  play: boolean;
}

export const Contender = styled.div`
height:100vh;

`;

export const BackContent = styled.div`
width:100%;
height:80%;
display:flex;
align-self:center;
align-content:center;
align-items:center;
justify-content:center;
`;

export const ViewContent = styled.div`
width:1120px;
height:100%;
overflow:hidden;
`;

export const Content = styled.div<ContentProps>`
margin: 3%;
display:flex;
align-self:center;
align-content:center;
align-items:center;
justify-content:center;
max-width:1120px;
height:100%;
animation-play-state: ${props => (props.play ? 'running' : 'paused')};
background-color: rgb(255,255,255);
    animation-name: colorchange;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-iteration-count: infinite;

    @keyframes colorchange{
        0%{background-color: #1abc9c;}
        10%{background-color: #2ecc71;}
        20%{background-color: #3498db;}
        30%{background-color: #9b59b6;}
        40%{background-color: #34495e}
        50%{background-color: #f1c40f;}
        60%{background-color: #e67e22;}
        70%{background-color: #164a16;}
        80%{background-color: #e74c3c;}
        90%{background-color: #95a5a6;}
        100%{background-color: #bcef32;}
}
`;

export const ButtonPlay = styled.button`
display:flex;
align-items:center;
justify-content:center;
height:50px;
font-weight:bold;
`;
