import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, color, ...props }) {
  const clasName = [
    'flex items-center tracking-wider justify-center text-sm sm:text-md text-white rounded-md transition duration-200',
  ];

  if (!color) clasName.push(' bg-slate-800 hover:bg-slate-600');

  if (color === 'green') clasName.push(' bg-amber-400 hover:bg-amber-500');

  if (color === 'red') clasName.push(' bg-red-600  hover:bg-red-700');

  if (props.isBlock) clasName.push(' w-full');
  props.isLarge ? clasName.push(' py-2 px-4') : clasName.push(' py-1 px-3');

  if (props.type === 'link') {
    return (
      <Link
        to={props.href}
        className={`${clasName.join('')} w-fit gap-x-2 [&>svg]:w-5 [&>svg]:h-5`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={props.onClick}
        type={props.type}
        disabled={props.disabled}
        className={`${clasName.join('')} border gap-x-2 [&>svg]:w-5 [&>svg]:h-5`}
      >
        {children}
      </button>
    );
  }
}
