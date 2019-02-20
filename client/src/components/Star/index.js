import React from 'react';

export default function Star({ background, blur, height, width }) {
  return (
    <div
      className='Star'
      style={{
        background,
        filter: `blur(${blur})`,
        height,
        width
      }}
    />
  );
}
