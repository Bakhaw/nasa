import React from 'react';

export default function Title({ title }) {
  return (
    <h2 className='Shot__Title' data-text={title}>
      {title}
    </h2>
  );
}
