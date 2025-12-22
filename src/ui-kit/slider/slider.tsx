'use client';

import Button from '@ui-kit/button/button';
import styles from './slider.module.scss';
import composeClassName from '@helpers/compose-class-name';
import { useEffect, useRef, useState } from 'react';

export default function Slider({
  slides,
  customClass,
  dimensions = 'auto',
}: {
  slides: Array<React.ReactNode>,
  customClass?: string,
  dimensions?: 'auto' | { width: number, height: number },
}) {
  const [activeSlideViewDimensions, setActiveSlideViewDimensions] = useState({ width: 0, height: 0 });
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (dimensions !== 'auto') {
      setActiveSlideViewDimensions(dimensions);
      return;
    }
    if (!slidesContainerRef.current) {
      return;
    }
    // choose the largest of the slider's and children's widths and heights
    // and make it the active slide view size
    let width = 0, height = 0;
    [...slidesContainerRef.current.children].forEach(child => {
      width = Math.max(width, (child as HTMLElement).offsetWidth ?? 0);
      height = Math.max(height, (child as HTMLElement).offsetHeight ?? 0);
    });
    setActiveSlideViewDimensions({ width, height });
    slideTo(0);
  }, [slidesContainerRef.current]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const slideTo = (slideIndex: number) => {
    setActiveSlideIndex(slideIndex);
  };

  const slideLeft = () => {
    slideTo(Math.max(activeSlideIndex - 1, 0));
  };

  const slideRight = () => {
    slideTo(Math.min(activeSlideIndex + 1, slides.length - 1));
  }

  return <div className={composeClassName(styles.slider, customClass)}>
    <div
      className={styles['active-slide-view']}
      style={activeSlideViewDimensions}
    >
      <div
        ref={slidesContainerRef}
        className={styles['slides-container']}
        style={{
          left: -1 * activeSlideViewDimensions.width * activeSlideIndex,
        }}
      >
        {slides.map((slide, index) => <div
          key={index}
          className={styles.slide}
          style={{
            width: activeSlideViewDimensions.width || 'unset',
            height: activeSlideViewDimensions.height || 'unset',
          }}
        >{slide}</div>)}
      </div>
    </div>
    <div className={styles['slider-navigation']}>
      <Button onClick={slideLeft}/>
      <Button onClick={slideRight}/>
    </div>
  </div>;
}