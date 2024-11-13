// components/LinkInBioPage/InstagramGrid.js
import React from 'react';

const InstagramGrid = ({ images }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
    {images.map((image, index) => (
      <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
        <img src={image.url} alt={`Instagram ${index}`} style={{ width: '100%' }} />
      </a>
    ))}
  </div>
);

export default InstagramGrid;