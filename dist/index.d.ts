import React from 'react';
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
declare const SanCarousel: React.FC<SanCarouselProps>;
export default SanCarousel;
