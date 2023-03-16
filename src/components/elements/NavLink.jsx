import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink({ className, children, href }) {
  return (
    <Link
      to={href}
      className={`${
        className ? className : ''
      }text-sm sm:text-md text-white hover:text-primary dark:text-gray-100 transition duration-200 tracking-wider`}
    >
      {children}
    </Link>
  );
}
