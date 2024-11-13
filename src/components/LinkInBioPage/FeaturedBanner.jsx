// components/LinkInBioPage/FeaturedBanner.js
import React from 'react';

const FeaturedBanner = ({ imageUrl, text, link }) => (
  <a href={link} style={{ display: 'block', textAlign: 'center', margin: '20px 0' }}>
    <img src={imageUrl} alt={text} style={{ width: '100%', borderRadius: '8px' }} />
    <p>{text}</p>
  </a>
);

export default FeaturedBanner;