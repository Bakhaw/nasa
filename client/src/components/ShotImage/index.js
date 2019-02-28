import React from 'react';

export default function ShotImage({ hdurl }) {
  return (
    <a href={hdurl} target='_blank'>
      <img
        alt='Picture of the day, NASA'
        src={hdurl}
        style={{ height: 500, width: 600, objectFit: 'contain' }}
      />
    </a>
  );
}
