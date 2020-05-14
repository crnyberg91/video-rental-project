import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel } from 'react-bootstrap';
import './carousel-style.css';

function MovieCarousel() {
  return (
    <Carousel id='movieCarousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/www.theartsshelf.com/wp-content/uploads/2019/11/71688301_2238284169614968_7983414201110495232_o.png?fit=1640%2C720&ssl=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/www.theartsshelf.com/wp-content/uploads/2019/11/71688301_2238284169614968_7983414201110495232_o.png?fit=1640%2C720&ssl=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/www.theartsshelf.com/wp-content/uploads/2019/11/71688301_2238284169614968_7983414201110495232_o.png?fit=1640%2C720&ssl=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MovieCarousel;