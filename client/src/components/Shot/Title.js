import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

export default function Title({ title }) {
  return (
    <Tooltip placement='top' title={title || ''}>
      <h2 className='Shot__Title'>{title}</h2>
    </Tooltip>
  );
}
