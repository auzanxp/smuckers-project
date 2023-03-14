import { Link } from 'react-router-dom';
import Button from './elements/Button';

export default function navbar() {
  return (
    <header className='h-20 px-8 border-b-white border-b border-[#CBC2C2] gap-5 flex justify-between items-center'>
      <Link to='/' className='text-[#4783FE] hidden md:block'>
        <h1 className='font-bold text-2xl'>SMUCKER'S</h1>
      </Link>
      <form className='flex items-center w-full md:w-1/3'>
        <div className='relative w-full'>
          <input
            type='text'
            id='voice-search'
            className='bg-transparent border transition duration-200 border-gray-300 text-gray-100 text-sm rounded-3xl focus:ring-2 focus:border-gray-500 focus:outline-none focus:ring-gray-500 block w-full px-5 p-2.5'
            placeholder='Cari buku'
            required
          />
          <button
            type='button'
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
      </form>
      <div>
        <Button className='p-10'>Login</Button>
      </div>
    </header>
  );
}
