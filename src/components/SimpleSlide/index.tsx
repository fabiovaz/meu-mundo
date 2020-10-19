import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Besouro from '../../assets/besouro.jpeg';
import Caio from '../../assets/caio.jpeg';
import Cicero from '../../assets/cicero.jpeg';
import Filipe from '../../assets/filipeCart.jpeg';
import Guilherme from '../../assets/guilherme.jpeg';
import Raquel from '../../assets/raquel.jpeg';
import Vinicius from '../../assets/vinicius.jpeg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{ width: '300px', color: "#000" }} >
        <Slider {...settings}>
          <div>
            <img style={{ width: '300px' }} src={Cicero} alt="Cicero" />
          </div>
          <div>
            <img style={{ width: '300px' }} src={Raquel} alt="Cicero" />
          </div>
          <div>
            <img style={{ width: '300px' }} src={Caio} alt="Cicero" />
          </div>
          <div>
            <img style={{ width: '300px' }} src={Filipe} alt="Cicero" />
          </div>
          <div>
            <img style={{ width: '300px' }} src={Guilherme} alt="Cicero" />
          </div>
          <div>
            <img style={{ width: '300px' }} src={Besouro} alt="Cicero" />
          </div>
          <div>
            <img style={{ width: '300px' }} src={Vinicius} alt="Cicero" />
          </div>
        </Slider>
      </div>
    );
  }
}
