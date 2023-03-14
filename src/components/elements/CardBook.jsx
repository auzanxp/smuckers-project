import React from 'react';
import { Link } from 'react-router-dom';
import Star from './Star';
import StarHalf from './StarHalf';

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
             {
              data.rating
             }
            </div>
          </h3>
          <h4 className='text-md'>
            {data.author} | {data.year}
          </h4>
          <h3 className='font-semibold text-lg'>{data.title}</h3>
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
