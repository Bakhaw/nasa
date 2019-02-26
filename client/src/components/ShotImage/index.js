import React from 'react';

export default function ShotImage({ hdurl, height, width }) {
  return (
    <a href={hdurl} target='_blank'>
      <img
        alt='Picture of the day, NASA'
        src={hdurl}
        style={{ height, width }}
      />
    </a>
  );
}
