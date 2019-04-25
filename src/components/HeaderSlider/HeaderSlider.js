import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';

import 'swiper/dist/css/swiper.min.css';
import './styles.scss';


export default class HeaderSlider extends Component {
    render() {
        const params = {
          effect: 'fade',
          spaceBetween: 20,
          modules: [Pagination, Navigation],
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (i, className="swiperBullets") => {
              return `<span class="${className}">${++i}</span>`;
            },
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        }
        return (
          <Swiper {...params} className="swiper-container">
              <div className="swiper-slide">Slide 1</div>
              <div className="swiper-slide">Slide 2</div>
              <div className="swiper-slide">Slide 3</div>
              <div className="swiper-slide">Slide 4</div>
              <div className="swiper-slide">Slide 5</div>
              <div className="swiper-slide">Slide 6</div>
              <div className="swiper-slide">Slide 7</div>
              <div className="swiper-slide">Slide 8</div>
          </Swiper>
        )
    }
}
