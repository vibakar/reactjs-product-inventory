import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
	return (
		<Carousel>
		  <Carousel.Item>
		    <img
		      className="d-block w-100 carousel-img-h"
		      src="/images/c1.jpg"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100 carousel-img-h"
		      src="/images/c2.jpg"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100 carousel-img-h"
		      src="/images/c3.jpg"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>

	);
}

export default Banner;