import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const IMAGES = [
  { url: '../images/princessbubblegum.webp', alt: 'Princess Bubblegum' },
  { url: '../images/marceline.webp', alt: 'Marceline' },
  { url: '../images/lumpyspaceprincess.webp', alt: 'Lumpy Space Princess' },
  { url: '../images/flameprincess.webp', alt: 'Flame Princess' },
  { url: '../images/breakfastprincess.webp', alt: 'Breakfast Princess' }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel images={IMAGES} />);
