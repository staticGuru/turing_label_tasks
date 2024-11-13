// components/LinkInBioPage/Logo.js
import React from 'react';

const Logo = ({ url, alt = 'Logo' }) => (
  <img src={url} alt={alt} style={{ maxWidth: '100px' }} />
);

export default Logo;