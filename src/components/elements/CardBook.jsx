import React from 'react';
import Star from './Star';

const CardBook = ({data}) => {
  return (
    <div className='border w-44 md:w-52 bg-[#414654] rounded-tr-3xl rounded-bl-3xl overflow-hidden'>
      <div className='p-3'>
        <img
          src='https://pub-static.fotor.com/assets/projects/pages/dddda0b59fb9433eb53e7174981c8b67/blue-minimal-novel-cover-6e355184dc3545c6bec6a9f618f83e0d.jpg'
          alt=''
          className='object-cover h-52 w-full'
        />
        <div className='flex flex-col justify-evenly items-center mt-2 text-center'>
          <p className='text-[#FE9F47]'>
            {data.rating} |{' '}
            <div className='inline-flex gap-1'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </p>
        <h4>{data.author} | {data.year}</h4>
        <h3 className='font-semibold text-xl '>{data.title}</h3>
        </div>
      </div>
      <div className='bg-[#63C37C] text-center py-1 font-medium'>TERSEDIA</div>
    </div>
  );
};

export default CardBook;
