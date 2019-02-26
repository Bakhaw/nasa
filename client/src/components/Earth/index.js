import React from 'react';
import Link from 'react-router-dom/Link';
import Tooltip from '@material-ui/core/Tooltip';

import Star from '../Star';

const stars = [
  {
    id: 1,
    to: '/search-shot',
    title: 'Search shot'
  },
  {
    id: 2,
    to: '/shot-of-the-day',
    title: 'Shot of the day'
  },
  {
    id: 3,
    to: '/archives',
    title: 'Archives'
  }
];

export default function Earth() {
  return (
    <div className='Earth'>
      {stars.map(({ id, title, to }) => (
        <Tooltip key={id} placement='top' title={title}>
          <Link className='Star' to={to}>
            <Star />
          </Link>
        </Tooltip>
      ))}
    </div>
  );
}
