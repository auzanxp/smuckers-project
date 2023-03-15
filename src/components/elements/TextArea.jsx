import React from 'react';

export default function TextArea(props) {
  return (
    <textarea
      {...props}
      className='resize-none border text-white font-normal bg-slate-600 border-indigo-900/30 rounded-md focus:outline-none antialiased focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition duration-200 shadow-sm w-full h-28 py-2 px-2 text-sm'
    ></textarea>
  );
}
