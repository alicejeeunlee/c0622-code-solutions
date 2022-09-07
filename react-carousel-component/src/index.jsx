import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const IMAGES = [
  { url: 'princessbubblegum.webp', alt: 'Princess Bubblegum' },
  { url: 'marceline.webp', alt: 'Marceline' },
  { url: 'lumpyspaceprincess.webp', alt: 'Lumpy Space Princess' },
  { url: 'flameprincess.webp', alt: 'Flame Princess' },
  { url: 'breakfastprincess.webp', alt: 'Breakfast Princess' }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel images={IMAGES} />);
