import { HomeIcon, KeyIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useAppContext from '../context/AppContext';
import Brand from './Brand';
import DropDown from './Dropdown';
import Button from './elements/Button';

export default function Navbar({ books = [] }) {
  const [fillteredBook, setFillteredBook] = useState([]);
  const [hiddenData, setHiddenData] = useState(true);
  const {
    username: { username },
  } = useAppContext();

  const inputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        formRef.current &&
        !formRef.current.contains(event.target)
      ) {
        setHiddenData(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function searchBookHandler(e) {
    e.preventDefault();
    setHiddenData(false);
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(e.target[0].value.toLowerCase()) ||
        book.author.toLowerCase().includes(e.target[0].value.toLowerCase()) ||
        book.category.toLowerCase().includes(e.target[0].value.toLowerCase()) ||
        book.year.toString().includes(e.target[0].value) ||
        book.language.toLowerCase().includes(e.target[0].value.toLowerCase()) ||
        book.publisher
          .toLowerCase()
          .includes(e.target[0].value.toLowerCase()) ||
        book.isbn.toLowerCase().includes(e.target[0].value.toLowerCase())
    );
    setFillteredBook(filteredBooks);
  }

  return (
    <header className='md:h-20 px-8 gap-2 md:gap-5 flex flex-col md:flex-row justify-between items-center'>
      <div className='text-[#4783FE] text-2xl'>
        <Brand />
      </div>
      <form
        className='relative block md:flex flex-col items-center w-full md:w-1/3 form-search'
        onSubmit={searchBookHandler}
        ref={formRef}
      >
        <div className='relative w-full'>
          <input
            type='text'
            id='search'
            className='bg-transparent border transition duration-200 border-gray-300 text-gray-100 text-sm rounded-3xl focus:outline-none focus:shadow-[0_0_10px_3px_#FAF2F240] block w-full px-5 p-2.5 transform hover:scale-105  ease-in-out'
            placeholder='Cari buku'
            name='keyword'
            required
          />
          <button
            type='submit'
            className='absolute inset-y-0 right-0 flex items-center px-3 border-l'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-400 transform transition hover:scale-125 duration-300 ease-in-out'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div
          ref={inputRef}
          className={`${
            hiddenData ? 'hidden' : 'absolute'
          } z-10 mt-11 h-auto w-full rounded opacity-90 bg-gray-500 text-gray-700 p-2 input-search`}
        >
          <div className='flex flex-col gap-2 p-2'>
            <p className='text-gray-100'>Hasil:</p>
            {fillteredBook.length !== 0 ? (
              fillteredBook.map((book) => (
                <Link
                  to={`/books/${book.id}`}
                  key={book.id}
                  className='border rounded-md flex justify-between items-center px-2 py-1 transition duration-150 hover:bg-gray-400'
                >
                  <div className='text-gray-100'>
                    <h1>{book.title}</h1>
                  </div>
                  <img
                    src={
                      book.cover ??
                      'https://media.istockphoto.com/id/1223190360/id/vektor/buka-siluet-vektor-buku-ikon-logo-simbol-tanda-tangan-ilustrasi-hitam-putih.jpg?s=612x612&w=0&k=20&c=hlKnSXIvdC7_n7Zfmzh-XcSmXnqrE3prOfphfkhG_Os='
                    }
                    className='w-10'
                    alt={book.title}
                  />
                </Link>
              ))
            ) : (
              <div className='border rounded-md flex items-center justify-center p-2'>
                <p className='text-gray-100'>Buku tidak temukan...</p>
              </div>
            )}
          </div>
        </div>
      </form>
      <div>
        <div className='flex items-center justify-end gap-5'>
          {username ? (
            <>
              <Button
                type='link'
                className='transform hover:scale-110 duration-300 ease-in-out'
                to='/dashboard'
              >
                <HomeIcon className='w-2 h-2 sm:h-4 sm:w-4' />
                Dashboard
              </Button>
            </>
          ) : (
            <Button
              type='link'
              className='transform hover:scale-125 duration-300 ease-in-out'
              to='/'
            >
              <HomeIcon className='w-2 h-2 sm:h-4 sm:w-4' />
              Beranda
            </Button>
          )}
          {!username ? (
            <Button
              type='link'
              to='/login'
              className='transform hover:scale-125 duration-300 ease-in-out'
            >
              <KeyIcon className='w-2 h-2 sm:h-4 sm:w-4' />
              Login
            </Button>
          ) : (
            <DropDown value={username} />
          )}
        </div>
      </div>
    </header>
  );
}
