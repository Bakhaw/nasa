import React from 'react';

export default function Video({ url }) {
  return <iframe allowFullScreen className='Shot' frameBorder={0} src={url} />;
}
