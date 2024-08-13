'use client'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        // autoPlay={true}
        interval={100000}
        infiniteLoop={true}
        showThumbs={false}
        animationHandler="fade"
        stopOnHover={false}
        showArrows={false}
        className='h-screen'
      >
        {/* <div> */}
          <img src="/slide1.jpg" style={{ objectFit: 'cover' }} />
          {/* <p className="legend">Legend 1</p> */}
        {/* </div> */}
        {/* <div> */}
          <img src="/slide2.jpg" style={{ objectFit: 'cover' }} />
          {/* <p className="legend">Legend 2</p> */}
        {/* </div> */}
        {/* <div> */}
          <img src="/slide3.jpg" style={{ objectFit: 'cover' }} />
          {/* <p className="legend">Legend 3</p> */}
        {/* </div> */}
      </Carousel>
    );
  }
};


