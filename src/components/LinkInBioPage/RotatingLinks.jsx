// components/LinkInBioPage/RotatingLinks.js
import React, { useState, useEffect } from 'react';

const RotatingLinks = ({ links }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
    }, 5000); // Change link every 5 seconds

    return () => clearInterval(interval);
  }, [links.length]);

  return (
    <a href={links[currentIndex].url} style={{ display: 'block', margin: '20px 0' }}>
      {links[currentIndex].text}
    </a>
  );
};

export default RotatingLinks;