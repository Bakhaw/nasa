import React from 'react';

export default function Video({ height, url, width }) {
  return (
    <iframe
      allowFullScreen
      frameBorder={0}
      src={url}
      height={500}
      width={600}
    />
  );
}
