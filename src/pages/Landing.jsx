import { BookOpenIcon, HomeIcon, KeyIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Brand from '../components/Brand';
import DropDown from '../components/Dropdown';
import Button from '../components/elements/Button';
import useAppContext from '../context/AppContext';

export default function Landing() {
  const {
    username: { username },
  } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Librarify';
  }, []);

  function searchHandler(e) {
    e.preventDefault();
    const search = e.target[0].value;
    navigate(`/books?search=${search}`);
  }

  return (
    <div
      className='leading-normal min-h-screen tracking-normal text-indigo-400 bg-cover pt-6 bg-fixed'
      style={{ backgroundImage: 'url("/header.png")' }}
    >
      <div className='h-full px-8'>
        {/*Nav*/}
        <div className='w-full container mx-auto'>
          <div className='w-full flex items-center justify-between'>
            <Brand />
            <div className='flex w-1/2 justify-end content-center'>
              <div className='flex items-center justify-end gap-5'>
                {username ? (
                  <>
                    <Button
                      type='link'
                      className='transform hover:scale-125 duration-300 ease-in-out'
                      to='/dashboard'
                    >
                      <HomeIcon className='w-2 h-2 sm:h-4 sm:w-4' />
                      Dashboard
                    </Button>
                    <Button
                      type='link'
                      className='transform hover:scale-125 duration-300 ease-in-out'
                      to='/books'
                    >
                      <BookOpenIcon className='w-2 h-2 sm:h-4 sm:w-4' />
                      Koleksi Buku
                    </Button>
                  </>
                ) : (
                  <Button
                    type='link'
                    className='transform hover:scale-125 duration-300 ease-in-out'
                    to='/books'
                  >
                    <BookOpenIcon className='w-2 h-2 sm:h-4 sm:w-4' />
                    Koleksi Buku
                  </Button>
                )}
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
          </div>
        </div>
        {/*Main*/}
        <div className='container md:pt-[78px] mx-auto flex flex-wrap flex-col md:flex-row items-center'>
          {/*Left Col*/}
          <div className='flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden'>
            <h1 className='my-4 text-3xl md:text-5xl text-white font-bold leading-tight text-center md:text-left'>
              Temukan inspirasi &nbsp;
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500'>
                bacamu &nbsp;
              </span>
              segera!
            </h1>
            <p className='leading-normal text-base md:text-xl mb-8 text-center md:text-left'>
              Suasana baru literasi dan aktivitas bagi Kawan Perpus!
            </p>
            <form
              className='bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4'
              onSubmit={searchHandler}
            >
              <div className='mb-4'>
                <label
                  className='block text-blue-300 py-2 font-bold mb-2'
                >
                  Ketik Buku yang anda cari!
                </label>
                <input
                  className='shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out'
                  type='text'
                  placeholder='Cari Buku'
                />
              </div>
              <div className='flex items-center justify-between pt-4'>
                <button
                  className='bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out'
                  type='submit'
                >
                  Cari Buku
                </button>
              </div>
            </form>
          </div>
          {/*Right Col*/}
          <div className='w-full xl:w-3/5 p-12 overflow-hidden'>
            <img
              className='mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6'
              src='/macbook.svg'
            />
          </div>
          {/*Footer*/}
          <div className='w-full pt-16 pb-6 text-sm text-center md:text-left fade-in'>
            <span
              className='text-gray-500 no-underline hover:no-underline'
              href='#'
            >
              Copyright © 2023
            </span>
            &nbsp; - Smucker’s Team
          </div>
        </div>
      </div>
    </div>
  );
}
