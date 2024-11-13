// components/LinkInBioPage/Button.js
import React from 'react';

const Button = ({ text, url, style }) => (
  <a href={url} style={{ ...defaultButtonStyle, ...style }}>
    {text}
  </a>
);

const defaultButtonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  textAlign: 'center',
};

export default Button;