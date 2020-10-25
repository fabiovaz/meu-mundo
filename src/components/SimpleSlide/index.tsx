import React, { Component } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Besouro from '../../assets/besouro.jpg';
import Caio from '../../assets/caio.jpg';
import Cicero from '../../assets/cicero.jpg';
import Filipe from '../../assets/filipeCart.jpg';
import Guilherme from '../../assets/guilherme.jpg';
import Raquel from '../../assets/raquel.jpg';
import Vinicius from '../../assets/vinicius.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <FiArrowRight size={40} color="#222f3e" />,
      prevArrow: <FiArrowLeft size={40} color="#222f3e" />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{ width: '420px', color: "#000" }} >
        <Slider {...settings}>
          <div>
            <img src={Cicero} alt="Cicero" />
          </div>
          <div>
            <img src={Raquel} alt="Cicero" />
          </div>
          <div>
            <img src={Caio} alt="Cicero" />
          </div>
          <div>
            <img src={Filipe} alt="Cicero" />
          </div>
          <div>
            <img src={Guilherme} alt="Cicero" />
          </div>
          <div>
            <img src={Besouro} alt="Cicero" />
          </div>
          <div>
            <img src={Vinicius} alt="Cicero" />
          </div>
        </Slider>
      </div >
    );
  }
}
