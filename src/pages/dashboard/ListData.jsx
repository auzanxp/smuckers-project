import { useState } from 'react';
import Input from '../../components/elements/Input';
import TableList from '../../components/TableList';

export default function ListData () {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className='w-full min-h-screen shadow-xl rounded-xl'>
      <div className='grid grid-flow-row grid-cols-1 overflow-hidden h-fit lg:grid-flow-col lg:grid-cols-6'>
        <div className='flex flex-col items-center my-5 lg:col-span-6 lg:mx-5'>
          <div className='flex mb-4 w-full'>
            <form className='w-full'>
              <label
                htmlFor='default-search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Search
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-500 dark:text-gray-400'
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
                  className='block p-4 pl-10 rounded-xl'
                  placeholder='Cari Buku'
                />
                <button
                  type='submit'
                  className='text-white absolute right-2.5 bottom-2.5 bg-primary shadow-md hover:bg-pink-700 focus:ring-4 focus:border-pink-500 focus:outline-none focus:ring-pink-500 font-medium rounded-lg text-sm px-4 py-2'
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className='w-full p-3 mb-2  rounded-xl bg-slate-600'>
            <div className='flex flex-row items-center justify-start text-base font-medium'>
              <div className='flex flex-row gap-2 '>
                {!isShow && (
                  <button
                    onClick={() => {
                      setIsShow(true);
                    }}
                  >
                    <svg
                      className='w-8 h-8 text-primary'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />{' '}
                      <polyline points='6 9 12 15 18 9' />
                    </svg>
                  </button>
                )}
                {isShow && (
                  <button
                    onClick={() => {
                      setIsShow(false);
                    }}
                  >
                    <svg
                      className='w-8 h-8 text-primary'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />{' '}
                      <polyline points='6 15 12 9 18 15' />
                    </svg>
                  </button>
                )}
                <span className='pr-2 mt-1 text-white'>Filter Data</span>
              </div>
            </div>

            {isShow && (
              <div className='m-5'>
                <div className='flex'>
                  <form className='w-full'>
                    <div className='mt-2'>
                      <label
                        htmlFor='small-input'
                        className='block mb-2 text-sm font-medium '
                      >
                        Company
                      </label>
                      <input
                        type='text'
                        className='block w-full p-2 mb-2 text-gray-900 bg-white border border-pink-300 rounded-lg focus:outline-none sm:text-xs focus:ring-pink-700 focus:border-pink-700 '
                        name='company_name'
                        placeholder='exp: PT XXX'
                        // value={input.company_name}
                        // onChange={handleInput}
                      />
                    </div>
                    <div className='mt-2'>
                      <label
                        htmlFor='small-input'
                        className='block mb-2 text-sm font-medium '
                      >
                        Location
                      </label>
                      <input
                        type='text'
                        className='block w-full p-2 mb-2 text-gray-900 bg-white border border-pink-300 rounded-lg focus:outline-none sm:text-xs focus:ring-pink-700 focus:border-pink-700'
                        name='company_city'
                        placeholder='exp: Bali'
                        // value={input.company_city}
                        // onChange={handleInput}
                      />
                    </div>
                    <div className='mt-2'>
                      <label
                        htmlFor='small-input'
                        className='block mb-2 text-sm font-medium '
                      >
                        Tenure
                      </label>
                      <input
                        type='text'
                        className='block w-full p-2 mb-4 text-gray-900 bg-white border border-pink-300 rounded-lg focus:outline-none sm:text-xs focus:ring-pink-700 focus:border-pink-700'
                        name='job_tenure'
                        placeholder='exp: Internship'
                        // value={input.job_tenure}
                        // onChange={handleInput}
                      />
                    </div>
                    <button
                      type='submit'
                      className='px-2 py-1 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pink-500 rounded-lg shadow-md hover:bg-pink-700'
                    >
                      Simpan
                    </button>
                    <button
                      className='px-2 py-1 ml-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-pink-900 rounded-lg shadow-md hover:bg-pink-700'
                      //   onClick={() => setFetchStatus(false)}
                    >
                      Reset Data
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div>
            <TableList />
          </div>
        </div>
      </div>
    </div>
  );
}
