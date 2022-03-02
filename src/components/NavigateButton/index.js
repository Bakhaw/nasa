import React from 'react';
import classNames from 'classnames';

export default function NavigateButton({ disabled, icon, onClick }) {
  return (
    <button
      className={classNames(
        'NavigateButton',
        disabled && 'NavigateButton__disabled'
      )}
      onClick={onClick}
    >
      <img height={30} width={30} src={`assets/images/${icon}.svg`} />
    </button>
  );
}
