import React, { useState, useEffect, useCallback } from 'react';

import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

import { Container } from './styles';

export interface Slides {
  id: number;
  img: string;
  url?: string;
}

interface SanCarouselProps {
  slides: Omit<Slides, 'id'>[];
  transitionTime?: number;
  autoPlay?: number;
  width?: string;
  height?: string;
  dots?: boolean;
  dotsDiameter?: number;
  arrows?: boolean;
  slideSize?: string;
  spaceBetweenSlides?: string;
  focusSlide?: boolean;
  slideFocusColor?: string;
  slideBorderRadius?: string;
}

const SanCarousel: React.FC<SanCarouselProps> = ({
  slides,
  transitionTime = 0.45,
  autoPlay,
  width,
  height,
  dots = true,
  dotsDiameter,
  arrows = true,
  slideSize,
  spaceBetweenSlides,
  focusSlide,
  slideFocusColor,
  slideBorderRadius,
}) => {
  const [isAutoPlayed, setIsAutoPlayed] = useState(!!autoPlay);

  const [settings, setSettings] = useState({
    activeSlide: 0,
    translate: 0,
    transition: transitionTime,
  });

  const [_slides] = useState(() =>
    slides.map((slide, index) => ({ ...slide, id: index })),
  );

  const { activeSlide, translate, transition } = settings;

  const nextSlide = useCallback(() => {
    if (activeSlide === _slides.length - 1) {
      return setSettings({
        ...settings,
        activeSlide: 0,
        translate: 0,
      });
    }

    return setSettings({
      ...settings,
      activeSlide: activeSlide + 1,
      translate: (activeSlide + 1) * 100,
    });
  }, [activeSlide, _slides.length, settings]);

  useEffect(() => {
    if (autoPlay && isAutoPlayed) {
      const interval = setInterval(nextSlide, autoPlay);
      return () => clearInterval(interval);
    }

    return () => ({});
  }, [nextSlide, autoPlay, isAutoPlayed]);

  const prevSlide = useCallback(() => {
    if (activeSlide === 0) {
      return setSettings({
        ...settings,
        activeSlide: _slides.length - 1,
        translate: (_slides.length - 1) * 100,
      });
    }

    return setSettings({
      ...settings,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1) * 100,
    });
  }, [activeSlide, _slides.length, settings]);

  const goToSlide = useCallback(
    (index: number) => {
      setSettings({
        ...settings,
        activeSlide: index,
        translate: index * 100,
      });
    },
    [settings],
  );

  return (
    <Container
      onMouseEnter={() => setIsAutoPlayed(false)}
      onMouseLeave={() => setIsAutoPlayed(true)}
      width={width}
      height={height}
    >
      <SliderContent
        translate={translate}
        transition={transition}
        slideSize={slideSize}
      >
        {_slides.map(slide => (
          <Slide
            key={slide.id}
            img={slide.img}
            spaceBetweenSlides={spaceBetweenSlides}
            focusSlide={focusSlide}
            slideFocusColor={slideFocusColor}
            slideBorderRadius={slideBorderRadius}
          />
        ))}
      </SliderContent>

      {arrows && (
        <>
          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </>
      )}

      {dots && (
        <Dots
          activeSlide={activeSlide}
          slides={_slides}
          handleClick={goToSlide}
          dotsDiameter={dotsDiameter}
        />
      )}
    </Container>
  );
};

export default SanCarousel;
