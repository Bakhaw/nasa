import React from 'react';
import Title from './Title';

export default function Image({ hdurl, title }) {
  return (
    <div>
      <Title title={title} />
      <a href={hdurl} target='_blank'>
        <img
          alt='Picture of the day, NASA'
          className='Shot__Media'
          src={hdurl}
        />
      </a>
    </div>
  );
}
