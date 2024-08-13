'use client'
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import clsx from "clsx";

const Carousel = ({ images, interval = 1000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval]);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={clsx(styles.carousel__btn, styles.carousel__btn__prev)}>
        &lt;
      </button>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className={styles.carousel__img}
      />
      <button onClick={nextSlide} className={clsx(styles.carousel__btn, styles.carousel__btn__next)}>
        &gt;
      </button>
    </div>
  );
};
export default Carousel;
