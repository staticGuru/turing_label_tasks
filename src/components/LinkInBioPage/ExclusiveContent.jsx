// components/LinkInBioPage/ExclusiveContent.js
import React from 'react';

const ExclusiveContent = ({ condition, content }) => (
  condition ? <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>{content}</div> : null
);

export default ExclusiveContent;