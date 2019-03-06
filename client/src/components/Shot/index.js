import React from 'react';
import Image from './Image';
import Video from './Video';

export default function Shot(props) {
  if (props.media_type === 'video') return <Video {...props} />;
  return <Image {...props} />;
}
