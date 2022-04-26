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
        <h1 className='font'>Marriage is a Sacred Bond </h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="d-block w-100 pic2 opacity">
        </div>

      <Carousel.Caption>
        <h1 className='font'>Marriage Unites two Human Beings </h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="d-block w-100 pic3 opacity">
        </div>

      <Carousel.Caption>
        <h1 className='font'>Beauty Comes to Society Through Marriage</h1>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
    
      
    );
};

export default Banner;