import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAppContext from '../context/AppContext';
import Button from './elements/Button';

export default function Navbar({ books= [] }) {
  const [fillteredBook, setFillteredBook] = useState([]);
  const [hiddenData, setHiddenData] = useState(true);
  const {
    username: { username },
    logoutHandler,
  } = useAppContext();

  function searchBookHandler(e){
    e.preventDefault()
    setHiddenData(false);
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(e.target[0].value.toLowerCase()) || book.author.toLowerCase().includes(e.target[0].value.toLowerCase()) || book.category.toLowerCase().includes(e.target[0].value.toLowerCase()) || book.year.toString().includes(e.target[0].value) || book.language.toLowerCase().includes(e.target[0].value.toLowerCase()) || book.publisher.toLowerCase().includes(e.target[0].value.toLowerCase()) || book.isbn.toLowerCase().includes(e.target[0].value.toLowerCase()));
    setFillteredBook(filteredBooks);
  }

  return (
    <header className='h-20 px-8 border-b-white border-b border-[#CBC2C2] gap-5 flex justify-between items-center'>
      <Link to='/' className='text-[#4783FE] hidden md:block'>
        <h1 className='font-bold text-xl tracking-wide'>
          <span className='font-extrabold text-3xl text-[#80a0e5]'>L</span>
          ibrarify
        </h1>
      </Link>
      <form className='relative flex flex-col items-center w-full md:w-1/3' onSubmit={searchBookHandler}>
        <div className='relative w-full'>
          <input
            type='text'
            id='search'
            className='bg-transparent border transition duration-200 border-gray-300 text-gray-100 text-sm rounded-3xl focus:outline-none focus:shadow-[0_0_10px_3px_#FAF2F240] block w-full px-5 p-2.5'
            placeholder='Cari buku'
            name='keyword'
            required
          />
          <button
            type='submit'
            className='absolute inset-y-0 right-0 flex items-center pr-3'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-400'
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
          className={`${
            hiddenData ? 'hidden' : 'absolute'
          } mt-11 h-auto w-full rounded opacity-90 bg-gray-500 text-gray-700 p-2 search-box`}
        >
          <div className='flex flex-col gap-2 p-2'>
          <p className='text-gray-100'>Hasil:</p>
            {fillteredBook.length !== 0 ? (
              fillteredBook.map((book) => (
                <Link to={`/books/${book.id}`} className='border rounded-md flex justify-between items-center px-2 py-1'>
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
        {username ? (
          <button
            type='button'
            onClick={logoutHandler}
            className='text-red-400 cursor-pointer font-bold hover:text-red-300'
          >
            Logout
          </button>
        ) : (
          <Button className='px-7 py-1'>
            <Link to='/login'>Login</Link>
          </Button>
        )}
      </div>
    </header>
  );
}
