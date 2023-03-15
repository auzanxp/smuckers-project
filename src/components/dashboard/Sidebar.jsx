import React from 'react';

import { TableCellsIcon, BookOpenIcon, SquaresPlusIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import Brand from '../Brand';
import SideNavLink from '../elements/SideNavLink';

export default function Sidebar() {
  const locationPath = useLocation().pathname;

  return (
    <>
      <div className='mb-4 pb-2 border-b border-b-gray-300 py-6 px-5'>
        <Link to='/'>
          <Brand />
        </Link>
      </div>
      <div className='border-b'>
        <SideNavLink
          href='/dashboard'
          name='dashboard'
          active={locationPath === '/dashboard' && true}
          icon={<BookOpenIcon />}
        />
        <SideNavLink
          href='/dashboard/books'
          name='list Data'
          active={locationPath === '/dashboard/books' && true}
          icon={<TableCellsIcon />}
        />
        <SideNavLink
          href='/books/add'
          name='Tambah Buku'
          active={locationPath === '/books/add' && true}
          icon={<SquaresPlusIcon className='w-5 h-5' />}
        />
      </div>
    </>
  );
}
