import React, { useState } from 'react';
import './style.css';
import FirstFirePic from '../../assets/coursePage/1.png';
import SecondFirePic from '../../assets/coursePage/2.png';
import LeftArrow from '../../assets/coursePage/LeftArrow.png';
import { Button, Image } from '@nextui-org/react';

const images = [FirstFirePic, SecondFirePic, FirstFirePic];

const ImageCard = ({ image, index }) => (
  <div className="relative w-[404px] h-[243px]" key={index}>
    <Image src={image} alt={`Image ${index + 1}`} className="image z-10" />
    <div className=' absolute inset-0 bg-[#27262652]/[0.32] z-20 rounded-[10px]' />
  </div>
);

const HorizontalScrollGallery = () => {
  const [scrollX, setScrollX] = useState(0);

  const scrollLeft = () => {
    const maxScrollX = -((images.length - 1) * 150); // Adjust the width of the content as needed
    const newScrollX = Math.max(scrollX - 150, maxScrollX);
    setScrollX(newScrollX);
  };

  const scrollRight = () => {
    const newScrollX = Math.min(scrollX + 150, 0);
    setScrollX(newScrollX);
  };

  const hideLeftArrow = scrollX === 0;
  const hideRightArrow = scrollX === -((images.length - 1) * 150);

  return (
    <div className="horizontal-scroll-container w-[1000px] overflow-x-hidden relative">
      <div className="image-container gap-x-4" style={{ transform: `translate3d(${scrollX}px, 0, 0)`, transition: 'transform 0.5s ease-in-out' }}>
        {images.map((image, index) => (
          <ImageCard key={index} image={image} index={index} />
        ))}
      </div>
      <Button
        isIconOnly
        className={`w-12 h-12 rounded-full absolute top-[40%] left-[1%] bg-primary ${hideLeftArrow && 'hidden'}`}
        onPress={scrollRight}
      >
        <Image src={LeftArrow} alt="left arrow" />
      </Button>
      <Button
        isIconOnly
        className={`w-12 h-12 rounded-full absolute top-[40%] right-[1%]  rotate-180 bg-primary ${hideRightArrow && 'hidden'}`}
        onPress={scrollLeft}
      >
        <Image src={LeftArrow} alt="left arrow" />
      </Button>
    </div>
  );
};

export default HorizontalScrollGallery;
