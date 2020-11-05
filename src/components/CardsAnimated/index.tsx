import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { Card, CardBack, CardFront, Content, Reasons } from './styles';

interface CardsProps {
  name: string;
  picture: string;
  description: string;
  link?: string;
}

const CardAnimated: React.FC<CardsProps> = ({
  name,
  description,
  link,
  picture,
}: CardsProps) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const divFlippedFront = {
    opacity: opacity.interpolate((o: any) => 1 - o),
    transform,
  };

  const divFlippedBack = {
    opacity,
    transform: transform.interpolate(t => `${t} rotateX(180deg)`),
  };

  return (
    <Content>
      <Card onClick={() => set(state => !state)}>
        <CardFront style={divFlippedFront}>
          <img src={picture} alt={name} />
        </CardFront>
        <CardBack style={divFlippedBack}>
          <h3>{name}</h3>
          <Reasons>
            <p>
              <strong>Motivo: </strong>
              {description}
            </p>
          </Reasons>
          {link && (
            <a rel="noopener noreferrer" href={link} target="_blank">
              click e Tire suas Conclusões
            </a>
          )}
        </CardBack>
      </Card>
    </Content>
  );
};

export default CardAnimated;
