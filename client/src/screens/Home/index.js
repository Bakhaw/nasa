import React from 'react';
import Earth from '../../components/Earth';
import Star from '../../components/Star';

const stars = [
  {
    background: '#fff',
    blur: '10px',
    height: 50,
    width: 50
  },
  {
    background: '#fff',
    blur: 0,
    height: 7,
    width: 7
  },
  {
    background: '#0EC8DB',
    blur: '7px',
    height: 35,
    width: 35
  },
  {
    background: '#0EC8DB',
    blur: '7px',
    height: 35,
    width: 35
  },
  {
    background: '#0EC8DB',
    blur: '7px',
    height: 35,
    width: 35
  }
];

export default function Home() {
  return (
    <div className='Home'>
      <div className='Home__Navbar'>
        <Star {...stars[0]} />
        <Star {...stars[1]} />
      </div>
      <div className='Home__Planets'>
        <Star {...stars[2]} />
        <Star {...stars[3]} />
        <Star {...stars[4]} />
      </div>
      <Earth />
    </div>
  );
}
