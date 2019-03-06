import React from 'react';

export default function Image({ hdurl }) {
  return (
    <a href={hdurl} target='_blank'>
      <img alt='Picture of the day, NASA' className='Shot' src={hdurl} />
    </a>
  );
}
