import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Category from '../components/elements/Category';
import CardBook from '../components/elements/CardBook';
import CardLoading from '../components/elements/CardLoading';
import ButtonGroup from '../components/elements/ButtonGroup';

export default function BookList() {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isReset, setIsReset] = useState(false);
  const [activeButton, setActiveButton] = useState('Terkait');

  useEffect(() => {
    document.title = 'Book List';
    (async () => {
      const {
        data: {
          data: { books },
        },
      } = await axios.get('http://18.136.104.200/books');
      setBooks(books);
    })();
  }, [isReset]);

  const handleButtonClick = (option) => {
    setActiveButton(option);
    // urutkan buku berdasarkan terbaru
    if (option === 'Terbaru') {
      const sortedBooks = books.sort((a, b) => b.year - a.year);
      setBooks(sortedBooks);
    } else {
      // urutkan berdasarkan rating
      const sortedBooks = books.sort((a, b) => b.rating - a.rating);
      setBooks(sortedBooks);
    }
  };

  function renderBooks() {
    if (filteredBooks.length > 0) {
      return filteredBooks.map((book) => (
        <CardBook key={book.id} data={book} />
      ));
    }

    if (books.length > 0) {
      return books.map((book) => <CardBook key={book.id} data={book} />);
    }
    return (
      <>
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
      </>
    );
  }

  function filterBooksHandler(e) {
    e.preventDefault();
    setFilteredBooks([]);
    const bookYearStart = e.target[5].value;
    const bookYearEnd = e.target[6].value;
    const checkedBoxes = Array.from(e.target).filter((input) => input.checked);
    const checkedValues = checkedBoxes.map((input) => input.value);
    const filteredBooks = books.filter(
      (book) =>
        checkedValues.includes(book.category) ||
        (book.year >= bookYearStart && book.year <= bookYearEnd)
    );
    if (filteredBooks.length === 0) {
      return alert('Tidak ada buku yang sesuai dengan filter yang dipilih');
    }
    setFilteredBooks(filteredBooks);
    console.log(bookYearStart, bookYearEnd);
  }

  return (
    <div className='bg-[#212327] text-white min-h-screen pb-10'>
      <Navbar />
      <div className='container px-2 md:px-0 md:flex mx-auto space-x-5'>
        <div className='pt-2 md:pt-[60px] flex flex-col'>
          <h2 className='uppercase font-bold text-lg'>FILTER</h2>
          <div className='w-full md:w-72 border border-white mt-3 shadow-[0_2px_4px_3px_#FAF2F240]'>
            <div className='flex flex-col justify-center items-start px-8 py-7'>
              <div
                className='flex items-center justify-between w-full mb-1 cursor-pointer'
                onClick={() => setIsOpenFilter(!isOpenFilter)}
              >
                <p className='font-bold text-lg -ml-3'>Kategori</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={18}
                  height={18}
                  fill='currentColor'
                  className='bi bi-chevron-up ml-16'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
                  />
                </svg>
              </div>
              <div className={isOpenFilter ? 'hidden' : ''}>
                <form onSubmit={filterBooksHandler}>
                  <div className='space-y-1'>
                    <Category name='Teknologi' />
                    <Category name='Novel' />
                    <Category name='Majalah' />
                    <Category name='Komik' />
                    <Category name='Pendidikan' />
                  </div>
                  <div className='my-1'>
                    <p className='font-bold text-lg -ml-3'>Tahun Terbit</p>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <input
                      type='number'
                      placeholder='Dari'
                      className='w-24 py-1 px-3 bg-slate-600 focus:outline-none focus:outline-slate-500'
                    />
                    &nbsp;-&nbsp;
                    <input
                      type='number'
                      placeholder='Sampai'
                      className='w-24 py-1 px-3 bg-slate-600 focus:outline-none focus:outline-slate-500'
                    />
                  </div>
                  <div className='flex gap-4 md:justify-between w-full mt-4'>
                    <button
                      type='submit'
                      className='py-1 px-5 w-24 rounded-lg text-gray-800 font-bold bg-[#63C37C] hover:bg-[#3e9d57] transition duration-200 focus:outline-none focus:outline-[#63C37C]'
                    >
                      Simpan
                    </button>
                    <button
                      type='reset'
                      className='py-1 w-24 px-5 font-bold rounded-lg border-2 focus:outline-none border-white hover:bg-white hover:text-gray-800 transition duration-200 focus:outline-gray-50'
                      onClick={() => {
                        setFilteredBooks([]);
                        setIsReset(!isReset);
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='border border-white my-3'>
            <div className='md:flex justify-between items-center px-8 py-4'>
              <div className='md:flex items-center gap-2'>
                <p className='font-medium text-lg mb-2 md:mb-0'>Urutkan</p>
                <ButtonGroup
                  options={['Terkait', 'Terbaru']}
                  activeOption={activeButton}
                  onChange={handleButtonClick}
                />
              </div>
              <div className='mt-2 md:mt-0 flex items-center gap-1'>
                <button type='button'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={16}
                    height={16}
                    fill='currentColor'
                    className='bi bi-chevron-left stroke-2'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
                    />
                  </svg>
                </button>
                1/{Math.ceil(books.length / 8)}
                <button type='button'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={16}
                    height={16}
                    fill='currentColor'
                    className='bi bi-chevron-right'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 place-items-stretch gap-6'>
            {renderBooks()}
          </div>
        </div>
      </div>
    </div>
  );
}
