'use client';

import Button from '@ui-kit/button/button';
import styles from './slider.module.scss';
import composeClassName from '@helpers/compose-class-name';
import { useEffect, useRef, useState } from 'react';

export default function Slider({
  slides,
  customClass,
  dimensions = 'auto',
  slidesGap = 0,
}: {
  slides: Array<React.ReactNode>,
  customClass?: string,
  dimensions?: 'auto' | { width: number, height: number },
  slidesGap?: number,
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
          left: -1 * (activeSlideViewDimensions.width + slidesGap) * activeSlideIndex,
          gap: `${slidesGap}px`,
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
      <Button
        customClass={composeClassName(styles['slide-button'], styles['slide-left-button'])}
        style='text-only'
        icon={{ path: '/icons/arrow-right.svg', width: 44, height: 44 }}
        onClick={slideLeft}
      />
      <div className={styles['navigation-dashes']}>
        {/* not all that great but the design didn't specify the animation so */}
        <div className={composeClassName(
          styles.dash,
          activeSlideIndex === 0 && styles.active,
        )}></div>
        <div className={composeClassName(
          styles.dash,
          activeSlideIndex > 0 && activeSlideIndex < slides.length - 1 && styles.active,
        )}></div>
        <div className={composeClassName(
          styles.dash,
          activeSlideIndex === slides.length - 1 && styles.active,
        )}></div>
      </div>
      <Button
        customClass={styles['slide-button']}
        style='text-only'
        icon={{ path: '/icons/arrow-right.svg', width: 44, height: 44 }}
        onClick={slideRight}
      />
    </div>
  </div>;
}