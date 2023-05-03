import axios from '../../api/Api'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Button from '../../components/elements/Button';
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
        .get('/books')
        .then((res) => {
          setBooks(res.data.data.books);
          setFetchStatus(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
    setInput('')
  }, [fetchStatus]);

  const handleSearch = (e) => {
    e.preventDefault();
    setBooks(null);
    const getSearch = async () => {
      const { data } = await axios.get(
        '/books'
      );
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
      const { data } = await axios.get(
        '/books'
      );
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
                <input
                  className='block p-4 pl-10 rounded-xl bg-slate-600 text-white focus:outline-none antialiased transition duration-200 shadow-sm w-full font-normal placeholder:text-md placeholder:font-ligh'
                  placeholder='Cari Buku'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  required
                />
                <Button
                  type='submit'
                  className='absolute transform hover:scale-110 duration-300 ease-in-out right-2.5 bottom-2.5 px-4 py-2'
                >
                  Cari
                </Button>
              </div>
            </form>
          </div>
          <div className='w-full p-3 mb-4  rounded-xl bg-gray-800'>
            <div className='flex flex-row items-center justify-start text-base font-medium'>
              <div className='flex flex-row gap-2 '>
                {!isShow && (
                  <button
                    onClick={() => {
                      setIsShow(true);
                    }}
                  >
                    <svg
                      className='w-8 h-8 text-white'
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
                      className='w-8 h-8 text-white'
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
                      <label className='block mb-2 text-sm font-medium text-white'>
                        Kategori
                      </label>
                      <select
                        className='border rounded-md p-1 bg-slate-600 text-white  border-indigo-900/30 focus:outline-none antialiased transition duration-200 shadow-sm w-full font-normal placeholder:text-base placeholder:font-normal'
                        name='category'
                        value={input.category}
                        onChange={handleInput}
                        required
                      >
                        <option value='' disabled>
                          Pilih Kategori
                        </option>
                        <option value='Teknologi'>Teknologi</option>
                        <option value='Novel'>Novel</option>
                        <option value='Majalah'>Majalah</option>
                        <option value='Komik'>Komik</option>
                        <option value='Pendidikan'>Pendidikan</option>
                      </select>
                    </div>
                    <div className='mt-2'>
                      <label className='block mb-2 text-sm font-medium text-white'>
                        Penulis
                      </label>
                      <input
                        type='text'
                        className='block w-full p-2 mb-2 bg-slate-600 text-white font-medium rounded-lg focus:outline-none sm:text-xs'
                        name='author'
                        placeholder='exp: Andrea'
                        value={input.author}
                        onChange={handleInput}
                      />
                    </div>
                    <div className='mt-2'>
                      <label className='block mb-2 text-sm font-medium text-white'>
                        Penerbit
                      </label>
                      <input
                        type='text'
                        className='block w-full p-2 mb-4 bg-slate-600 text-white rounded-lg focus:outline-none sm:text-xs'
                        name='publisher'
                        placeholder='exp: Erlangga'
                        value={input.publisher}
                        onChange={handleInput}
                      />
                    </div>
                    <div className='flex flex-row space-x-2'>
                      <button
                        type='submit'
                        className='py-1 px-5 w-24 rounded-lg text-white hover:bg-[#414654]  border border-white focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out'
                      >
                        Simpan
                      </button>
                      <button
                        type='reset'
                        className='py-1 w-24 px-5  text-white rounded-lg border focus:outline-none border-white hover:bg-[#414654] transform transition hover:scale-105 duration-300 ease-in-out '
                        onClick={() => {
                          setFetchStatus(false);
                        }}
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className='w-full overflow-x-scroll'>
            <TableList data={books} setFetchStatus={setFetchStatus} />
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
