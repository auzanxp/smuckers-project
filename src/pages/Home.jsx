import { KeyIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import DropDown from '../components/Dropdown';
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';
import Label from '../components/elements/Label';
import NavLink from '../components/elements/NavLink';
import Footer from '../components/Footer';
import useAppContext from '../context/AppContext';

export default function Home() {
  const {
    username: { username },
  } = useAppContext();

  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <div className='bg-primaryLogin min-h-screen'>
      <div className='flex place-items-end justify-end p-8'>
        <div className='flex items-center justify-end gap-5'>
          {username && <NavLink href='/dashboard'>Dashboard</NavLink>}
          {!username ? (
            <Button type='link' to='/login'>
              <KeyIcon className='w-2 h-2 sm:h-4 sm:w-4' />
              Login
            </Button>
          ) : (
            <DropDown value={username} />
          )}
        </div>
      </div>
      <div className='continer mx-auto flex flex-col place-items-center space-y-14'>
        <h1 className='text-7xl font-bold text-primary'>LIBRARIFY</h1>
        <div className='flex w-1/2'>
          <form className='w-full'>
            <Label className='sr-only'>Cari</Label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-white dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
              <Input
                className='block w-full p-4 pl-10 rounded-full transition duration-200 focus:shadow-[0_0_15px_5px_#FAF2F240]'
                placeholder='Cari Buku'
              />
            </div>
          </form>
        </div>
        <div>
          <Button
            className='py-2 px-20 rounded-sm active:scale-95 transition duration-200'
            type='link'
            to='/books'
          >
            Browse a books
          </Button>
        </div>
        <div className='font-bold text-white'>
          <p>“Sistem Perpustakaan untuk mencari buku yang di perlukan“</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
