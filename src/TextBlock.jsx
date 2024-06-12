import React from 'react';

//pass the header and paragraph as props
const TextBlock = ({ header, paragraph }) => (
  <div>
    <h1>{header}</h1>
    <p>{paragraph}</p>
  </div>
);

export default TextBlock;