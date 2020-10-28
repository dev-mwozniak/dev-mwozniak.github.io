import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'

import Slide0 from '../../assets/img/slider0.jpg';
import Slide1 from '../../assets/img/slider1.jpg';
import Slide2 from '../../assets/img/slider2.jpg';
import Slide3 from '../../assets/img/slider3.jpg';
import Slide4 from '../../assets/img/slider4.jpg';

import '../../sass/hero.scss';

class Hero extends Component {

  render() {
    return (
      <section className="slider">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={Slide0}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={Slide1} 
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Slide2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Slide3}
              alt="Four slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Slide4}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  } 
}

export default Hero;
