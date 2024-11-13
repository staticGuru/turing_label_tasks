// components/LinkInBioPage/SocialIcons.js
import React from 'react';

const SocialIcons = ({ links }) => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
    {links.map((link, index) => (
      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
        <img src={link.icon} alt={link.name} style={{ width: '30px' }} />
      </a>
    ))}
  </div>
);

export default SocialIcons;