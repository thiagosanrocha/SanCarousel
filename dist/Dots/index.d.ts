import React from 'react';
import { Slides } from '../index';
interface DotsProps {
    slides: Slides[];
    activeSlide: number;
    dotsDiameter?: number;
    handleClick(index: number): void;
}
declare const Dots: React.FC<DotsProps>;
export default Dots;
