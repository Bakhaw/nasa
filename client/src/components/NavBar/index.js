import React from 'react';
import Link from 'react-router-dom/Link';
import Star from '../Star';

export default function NavBar() {
  return (
    <div className='NavBar'>
      <Link to='/'>
        <Star />
      </Link>
    </div>
  );
}
