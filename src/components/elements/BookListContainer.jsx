import React, { useState, useEffect } from 'react';
import ButtonGroup from './ButtonGroup';
import CardBook from './CardBook';
import CardLoading from './CardLoading';

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState('Terkait');
  const pageSize = props.pageSize;
  const data = props.data;
  const pageCount = props.filteredBooks.length > 0 ? Math.ceil(props.filteredBooks.length / pageSize) : Math.ceil(data.length / pageSize);

  const handleButtonClick = (option) => {
    setActiveButton(option);
    // urutkan buku berdasarkan terbaru
    if (option === 'Terbaru') {
      const sortedBooks = props.data.sort((a, b) => b.year - a.year);
      props.setBooks(sortedBooks);
    } else {
      // urutkan berdasarkan rating
      const sortedBooks = props.data.sort((a, b) => b.rating - a.rating);
      props.setBooks(sortedBooks);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [data, pageSize]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderData = () => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    if (props.filteredBooks.length > 0) {
      return props.filteredBooks.map((book) => (
        <CardBook key={book.id} data={book} />
      ));
    }

    if (data.length > 0) {
      return data
        .slice(start, end)
        .map((item) => <CardBook key={item.id} data={item} />);
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
  };

  return (
    <div>
      <div className='border border-white my-3 bg-gray-900 rounded-lg'>
        <div className='md:flex justify-between items-center px-8 py-4'>
          <div className='md:flex items-center gap-2'>
            <p className='font-medium text-lg mb-2 md:mb-0'>Urutkan : </p>
            <ButtonGroup
              options={['Terkait', 'Terbaru']}
              activeOption={activeButton}
              onChange={handleButtonClick}
            />
          </div>
          <div className='mt-2 md:mt-0 flex items-center gap-1'>
            <button
              type='button'
              disabled={currentPage === 1}
              onClick={handlePrevPage}
              className='disabled:cursor-not-allowed disabled:text-gray-400'
            >
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
            {currentPage} / {pageCount}
            <button
              type='button'
              disabled={currentPage === pageCount}
              onClick={handleNextPage}
              className='disabled:cursor-not-allowed disabled:text-gray-400'
            >
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
      <div className='grid grid-cols-2 lg:grid-cols-4 place-items-stretch gap-6'>
        {/* {renderBooks()} */}
        {renderData()}
      </div>
    </div>
  );
}

export default Pagination;
