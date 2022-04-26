import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
   
    return (    
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <div
        className="d-block w-100 pic1 opacity">
        </div>
      <Carousel.Caption>
        <h1 className='font'>First slide label</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="d-block w-100 pic2 opacity">
        </div>

      <Carousel.Caption>
        <h1 className='font'>Second slide label</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="d-block w-100 pic3 opacity">
        </div>

      <Carousel.Caption>
        <h1 className='font'>Third slide label</h1>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
    
      
    );
};

export default Banner;