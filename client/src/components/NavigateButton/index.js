import React from 'react';

export default function NavigateButton({ icon, onClick }) {
  return (
    <button className='NavigateButton' onClick={onClick}>
      <img height={30} width={30} src={`assets/images/${icon}.svg`} />
    </button>
  );
}
