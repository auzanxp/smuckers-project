import React from 'react';
import { Link } from 'react-router-dom';
import Star from './Star';

const CardBook = ({data}) => {
  return (
    <Link
      to={`/books/${data?.id}`}
      className='border min-h-full w-44 md:w-52 bg-[#414654] rounded-tr-3xl rounded-bl-3xl overflow-hidden flex flex-col justify-between hover:shadow-[0_0px_15px_5px_rgba(250,242,242,0.25)] transition duration-300'
    >
      <div className='p-4'>
        <img
          src='https://pub-static.fotor.com/assets/projects/pages/dddda0b59fb9433eb53e7174981c8b67/blue-minimal-novel-cover-6e355184dc3545c6bec6a9f618f83e0d.jpg'
          alt=''
          className='object-cover h-52 w-full'
        />
        <div className='flex flex-col justify-evenly items-center mt-2 text-center'>
          <h3 className='text-[#FE9F47] flex items-center'>
            {data.rating} | &nbsp;
            <div className='inline-flex gap-1'>
              <Star />
              <Star />
              <Star />
              <Star />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={16}
                height={16}
                fill='currentColor'
                className='bi bi-star-half'
                viewBox='0 0 16 16'
              >
                <path d='M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z' />
              </svg>
            </div>
          </h3>
          <h4>
            {data.author} | {data.year}
          </h4>
          <h3 className='font-semibold text-xl '>{data.title}</h3>
        </div>
      </div>
      <div>
        {data.is_borrowed ? (
          <div className='bg-red-600 text-center py-1 border-t tracking-wider font-medium'>
            DIPINJAM
          </div>
        ) : (
          <div className='bg-[#63C37C] text-center py-1 border-t tracking-wider font-medium'>
            TERSEDIA
          </div>
        )}
      </div>
    </Link>
  );
};

export default CardBook;
