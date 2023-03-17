import React from 'react';

import {
  TableCellsIcon,
  BookOpenIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import Brand from '../Brand';
import SideNavLink from '../elements/SideNavLink';

export default function Sidebar() {
  const locationPath = useLocation().pathname;

  return (
    <>
      <div className='flex justify-center items-center mb-4 pb-2 border-b border-b-gray-300 py-6 px-5'>
        <div>
          <Brand isSmall />
        </div>
      </div>
      <div >
        <SideNavLink
          href='/dashboard'
          name='dashboard'
          active={locationPath === '/dashboard' && true}
          icon={<BookOpenIcon />}
        />
        <SideNavLink
          href='/dashboard/books-list'
          name='list Data'
          active={locationPath === '/dashboard/books-list' && true}
          icon={<TableCellsIcon />}
        />
        <SideNavLink
          href='/dashboard/books-form/add'
          name='Tambah Buku'
          active={locationPath === '/dashboard/books-form/add' && true}
          icon={<SquaresPlusIcon className='w-5 h-5' />}
        />
      </div>
    </>
  );
}
