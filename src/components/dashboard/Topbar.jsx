import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/20/solid';
import NavLink from '../elements/NavLink';
// import DropDown from '../Dropdown';

function Topbar({ handleClick }) {
  const [user, setUser] = useState(null);
  const location = useLocation();

  let pageName = location.pathname.split('/');
  pageName = pageName[1];

  // useEffect(() => {
  //     if (user === null) {
  //         setUser(Cookies.get('user'))
  //     }
  // }, [user])

  return (
    <div className='flex items-center justify-between px-5 py-3 mr-5  rounded-lg text-gray-100 bg-gray-800 border border-y-zinc-500'>
      <div className='flex items-center gap-x-3'>
        <Bars3Icon
          className='w-5 h-5 transition duration-200 cursor-pointer hover:text-amber-500'
          onClick={() => handleClick()}
        />
        <h2 className='hidden text-lg font-medium capitalize sm:block'>
          {pageName} Page
        </h2>
      </div>
      <div className='flex items-center justify-center space-x-2'>
        <NavLink href={'/'}>Beranda</NavLink>
        <div className='flex space-x-2'>{/* <DropDown value={user} /> */}</div>
      </div>
    </div>
  );
}

export default Topbar;