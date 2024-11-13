// components/LinkInBioPage/TextImageSection.js
import React from 'react';

const TextImageSection = ({ text, imageUrl }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0' }}>
    <img src={imageUrl} alt="Section" style={{ width: '150px', borderRadius: '8px' }} />
    <p>{text}</p>
  </div>
);

export default TextImageSection;