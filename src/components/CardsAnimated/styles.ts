import { animated } from 'react-spring';
import styled from 'styled-components';
export const Content = styled.div`
  margin-top: 50px;
  margin-left: 25px;
  margin-right: 25px;
  width: 250px;
  height: 150px;
`;

export const Card = styled(animated.div)`
  position: absolute;
  color: #000;
  width: 250px;
  height: 150px;
  cursor: pointer;
  will-change: transform, opacity;
`;

export const CardFront = styled(animated.div)`
  position: absolute;
  img {
    width: 250px;
    height: 150px;
  }
`;

export const CardBack = styled(animated.div)`
  text-align: center;
  background: white;
  position: absolute;
  width: 250px;
  height: 150px;
  a {
    text-decoration: none;
    color: red;
  }
`;

export const Reasons = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;

  p {
    font-size: 15px;
    margin-bottom: 15px;
  }

  strong {
    font-size: 17px;
    font-weight: bold;
  }
`;
