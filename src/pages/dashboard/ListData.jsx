import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Input from '../../components/elements/Input';
import TableList from '../../components/TableList';

export default function ListData() {
  const [isShow, setIsShow] = useState(false);
  const [books, setBooks] = useState(null);
  const [search, setSearch] = useState('');
  const [fetchStatus, setFetchStatus] = useState(true);
  const [input, setInput] = useState({
    category: '',
    author: '',
    publisher: '',
  });

  useEffect(() => {
    document.title = 'List Data';
    const getData = () => {
      axios
        .get('https://books-api.anggakurnia.me/books')
        .then((res) => {
          setBooks(res.data.data.books);
          setFetchStatus(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [fetchStatus]);

  const handleSearch = (e) => {
    e.preventDefault();
    setBooks(null);
    const getSearch = async () => {
      const { data } = await axios.get('http://18.136.104.200/books');
      const response = data.data.books;
      const searchData = response.filter((ress) => {
        return Object.values(ress)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase());
      });

      setBooks([...searchData]);
    };
    getSearch();
    setSearch('');
  };

  const handleInput = (e) => {
    let { value, name, type } = e.target;

    if (type === 'radio') {
      setInput({ ...input, [name]: parseInt(value) });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleFilterData = (e) => {
    e.preventDefault();
    setBooks(null);
    const getFilterData = async () => {
      const { data } = await axios.get('http://18.136.104.200/books');
      const response = data.data.books;
      const filterData = response.filter((res) => {
        return (
          res.category === input.category ||
          res.author === input.author ||
          res.publisher === input.publisher
        );
      });
      setBooks([...filterData]);
    };
    getFilterData();
    setInput({
      category: '',
      author: '',
      publisher: '',
    });
  };

  const handleDeleteData = (param) => {
    let IdBook = parseInt(param);
    console.log(IdBook)
    // try {
    //   axios.delete(`http://18.136.104.200/books/${IdBook}`, {
    //     headers: {
    //       token: JSON.parse(localStorage.getItem('authentications')),
    //     },
    //   });
    //   setFetchStatus(false);
    //   toast.success('Data Berhasil Dihapus!', {
    //     position: 'top-center',
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'dark',
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className='w-full min-h-screen shadow-xl rounded-xl'>
      <div className='grid grid-flow-row grid-cols-1 overflow-hidden h-fit lg:grid-flow-col lg:grid-cols-6'>
        <div className='flex flex-col items-center my-5 lg:col-span-6 lg:mx-5'>
          <div className='flex mb-4 w-full'>
            <form onSubmit={handleSearch} className='w-full'>
              <label
                htmlFor='default-search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Cari
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  required
                />
                <button
                  type='submit'
                  className='text-white absolute right-2.5 bottom-2.5 bg-primary shadow-md hover:bg-slate-300 hover:text-black focus:ring-4 focus:border-primary focus:outline-none focus:ring-slate-400 font-medium rounded-lg text-sm px-4 py-2'
                >
                  Cari
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
                  <form onSubmit={handleFilterData} className='w-full'>
                    <div className='mt-2'>
                      <label
                        htmlFor='small-input'
                        className='block mb-2 text-sm font-medium '
                      >
                        Kategori
                      </label>
                      <input
                        type='text'
                        className='block w-full p-2 mb-2 text-gray-900 bg-white border border-pink-300 rounded-lg focus:outline-none sm:text-xs focus:ring-pink-700 focus:border-pink-700 '
                        name='category'
                        placeholder='exp: Novel'
                        value={input.category}
                        onChange={handleInput}
                      />
                    </div>
                    <div className='mt-2'>
                      <label
                        htmlFor='small-input'
                        className='block mb-2 text-sm font-medium '
                      >
                        penulis
                      </label>
                      <input
                        type='text'
                        className='block w-full p-2 mb-2 text-gray-900 bg-white border border-pink-300 rounded-lg focus:outline-none sm:text-xs focus:ring-pink-700 focus:border-pink-700'
                        name='author'
                        placeholder='exp: Andrea'
                        value={input.author}
                        onChange={handleInput}
                      />
                    </div>
                    <div className='mt-2'>
                      <label
                        htmlFor='small-input'
                        className='block mb-2 text-sm font-medium '
                      >
                        Penerbit
                      </label>
                      <input
                        type='text'
                        className='block w-full p-2 mb-4 text-gray-900 bg-white border border-pink-300 rounded-lg focus:outline-none sm:text-xs focus:ring-pink-700 focus:border-pink-700'
                        name='publisher'
                        placeholder='exp: Erlangga'
                        value={input.publisher}
                        onChange={handleInput}
                      />
                    </div>
                    <button
                      type='submit'
                      className='py-1 px-5 w-24 rounded-lg text-[#171717] font-bold bg-[#63C37C] hover:bg-[#3e9d57] transition duration-200 focus:outline-none focus:outline-[#63C37C]'
                    >
                      Simpan
                    </button>
                    <button
                      type='reset'
                      className='py-1 w-24 px-5 font-bold rounded-lg border-2 focus:outline-none border-white hover:bg-white hover:text-[#171717] transition duration-200 focus:outline-gray-50'
                      onClick={() => setFetchStatus(false)}
                    >
                      Reset
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className='w-full overflow-x-scroll'>
            <TableList data={books} handleDeleteBook={handleDeleteData} />
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}
