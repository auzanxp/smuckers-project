import React from 'react';

export default function Label(className, props) {
  return (
    <label
      {...props}
      className={`${className}block mb-2 text-sm font-medium text-white bg-gray-700`}
    >
      {props.children}
    </label>
  );
}
