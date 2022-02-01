import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        swipeable={true}
        useKeyboardArrows={true}
        interval={4000}
        emulateTouch={true}
        showStatus
      >
        <div className='cursor-pointer'>
          <img loading='lazy' src="/image-first-banner.jpg" alt="" />
        </div>
        <div className='cursor-pointer'>
          <img loading='lazy' src="/image-second-banner.jpg" alt="" />
        </div>
        <div className='cursor-pointer'>
          <img loading='lazy' src="/image-third-banner.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;