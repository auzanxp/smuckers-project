import React from 'react';
import Brand from './Brand';

function Footer() {
  return (
    <div className='container-fluid text-gray-100 w-full p-10 border-t absolute bottom-0 border-t-gray-600 flex justify-between items-center gap-x-2 h-20'>
      <Brand />
      <span className=' text-gray-100 text-xs font-light'>
        Copyright © 2023 Smucker’s Team
      </span>
    </div>
  );
}

export default Footer;
