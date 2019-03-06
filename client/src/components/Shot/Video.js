import React from 'react';
import Title from './Title';

export default function Video({ title, url }) {
  return (
    <div>
      <Title title={title} />
      <iframe
        allowFullScreen
        className='Shot__Media'
        frameBorder={0}
        src={url}
      />
    </div>
  );
}
