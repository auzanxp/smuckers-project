import React from 'react';
import { Link } from 'react-router-dom';
import Star from './Star';
import StarHalf from './StarHalf';
import StarEmpty from './StarEmpty';

const CardBook = ({ data }) => {
  function ratingStar(rating) {
    let star = [];
    const roundedRating = Math.floor(rating);

    for (let i = 0; i < roundedRating; i++) {
      star.push(<Star key={Math.random()}/>);
    }

    const remainder = rating % 1;
    if (remainder !== 0) {
      star.push(<StarHalf key={Math.random} />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      star.push(<StarEmpty key={Math.random()}/>);
    }

    return star;
  }

  return (
    <Link
      to={`/books/${data?.id}`}
      className='min-h-full w-44 md:w-56 bg-gray-900 rounded-tr-3xl rounded-bl-3xl overflow-hidden flex flex-col justify-between hover:shadow-[0_0px_15px_5px_rgba(250,242,242,0.25)] transition transform hover:scale-105 duration-300 ease-in-out shadow-[0_0_2px_2px_#FAF2F240]'
    >
      <div className='px-4 py-2'>
        <img
          src={
            // cek apakah stringnya ada http atau tidak
            !data.cover?.includes('http')
              ? 'https://media.istockphoto.com/id/1223190360/id/vektor/buka-siluet-vektor-buku-ikon-logo-simbol-tanda-tangan-ilustrasi-hitam-putih.jpg?s=612x612&w=0&k=20&c=hlKnSXIvdC7_n7Zfmzh-XcSmXnqrE3prOfphfkhG_Os='
              : data.cover
          }
          alt=''
          className='object-cover h-52 w-full'
        />
        <div className='flex flex-col justify-evenly items-center mt-2 text-center'>
          <h3 className='text-[#FE9F47] flex items-center'>
            {data.rating} | &nbsp;
            <div className='inline-flex gap-1'>{ratingStar(data.rating)}</div>
          </h3>
          <h4 className='text-md'>
            {data.author} | {data.year}
          </h4>
          <h3 className='font-semibold text-lg'>{data.title}</h3>
        </div>
      </div>
      <div>
        {data.is_borrowed ? (
          <div className='bg-red-700 text-center py-1 border-t tracking-wider font-medium'>
            DIPINJAM
          </div>
        ) : (
          <div className='bg-indigo-700 text-center text-white py-1 border-t tracking-wider font-medium'>
            TERSEDIA
          </div>
        )}
      </div>
    </Link>
  );
};

export default CardBook;
