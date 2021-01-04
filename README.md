# SanCarousel
[![npm](https://img.shields.io/npm/v/sancarousel?color=04D361)](https://www.npmjs.com/package/sancarousel)

A simple Carousel easy to use and very customizable.

### Overview
#
SanCarousel is a performance focused library that helps you create a slide easily and very customizable in just a few steps.


## Getting started
**npm**
```bash
npm install sancarousel --save
```

**yarn**
```bash
yarn add sancarousel
```

### Usage
#
**Example**
```js
import React from 'react';
import SanCarousel from 'sancarousel';

import slide1 from '../assets/slide_1.png'
import slide2 from '../assets/slide_1.png'

const slides = [
  {
    img: slide1,
    url: '/link-1'
  },
  {
    img: slide2,
    url: '/link-2'
  }
];

const App = () => {
  <SanCarousel slides={slides} />
}
```
<br>

You can pass several properties to SanCarousel and customize it the way you prefer

<br>

```js
import React from 'react';
import SanCarousel from 'sancarousel';

import slide1 from '../assets/slide_1.png'
import slide2 from '../assets/slide_1.png'

const slides = [
  {
    img: slide1,
    url: '/link-1'
  },
  {
    img: slide2,
    url: '/link-2'
  }
];

const App = () => {
  <SanCarousel
    slides={slides}
    width="100%"
    height="350px"
    slideSize="90%"
    autoPlay={2000}
    focusSlide
  />
}
```
<br>

### Properties available
#

* `slides`: Array with images and urls (optional) to be displayed

* `transitionTime`: Transition time from one slide to another

* `autoPlay`: Autoplay Speed in milliseconds

* `width`: Main container width

* `height`: Main container height

* `slideSize`: Slide size to be shown

* `dots`: Show dot indicators

* `dotsDiameter`: Diameter of dot indicator

* `arrows`: Prev/Next Arrows

* `spaceBetweenSlides`: Space between slides

* `focusSlide`: Enable focus on selected element (hover)

* `slideFocusColor`: Focus color on the selected element

* `slideBorderRadius`: Slide size radius
