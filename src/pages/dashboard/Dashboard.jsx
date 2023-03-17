import { useEffect, useState } from 'react';
import axios from 'axios';
import useAppContext from '../../context/AppContext';

export default function Dashboard() {
  const {
    username: { username },
  } = useAppContext();
  const [time, setTime] = useState(new Date());
  const [bookCount, setBookCount] = useState(0);
  const [authorCount, setAuthorCount] = useState(0);
  const [borrowedCount, setBorrowedCount] = useState(0);
  const [notBorrowedCount, setNotBorrowedCount] = useState(0);

  const formattedDate = time.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = time.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  useEffect(() => {
    document.title = 'Dashboard';
    (async () => {
      // ambil datanya dulu dari API
      const {
        data: {
          data: { books },
        },
      } = await axios.get('https://books-api.anggakurnia.me/books');
      // ambil jumlah buku
      setBookCount(books.length);
      // ambil jumlah author
      const authorCounts = {};
      books.forEach((book) => {
        if (authorCounts[book.author]) {
          authorCounts[book.author]++;
        } else {
          authorCounts[book.author] = 1;
        }
      });
      const numAuthors = Object.keys(authorCounts).length;
      setAuthorCount(numAuthors)
      // ambil data buku yang dipinjam & tidak dipinjam
      let hitungTerpinjam = 0;
      let hitungTidakTerpinjam = 0;
      books.forEach((book) => {
        if (book.is_borrowed) {
          hitungTerpinjam++;
        } else {
          hitungTidakTerpinjam++;
        }
      });
      setBorrowedCount(hitungTerpinjam);
      setNotBorrowedCount(hitungTidakTerpinjam);
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    })();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-center text-gray-50'>
        <h1 className='text-2xl font-semibold'>Selamat datang, {username}!</h1>
        <div className='flex flex-col'>
          <time>{formattedDate}</time>
          <time>{formattedTime}</time>
        </div>
      </div>
      <div className='text-2xl text-center font-semibold tracking-wider h-96 flex justify-center items-center gap-8 text-white'>
        <div className='max-w-sm p-6 bg-slate-700 border flex justify-around items-center space-x-5 border-gray-200 rounded-lg shadow w-56 h-40'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-10 h-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
              />
            </svg>
          </div>
          <div>
            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-50 dark:text-white'>
              Buku
            </h5>
            <p className='mb-3 font-semibold text-gray-50 dark:text-gray-400'>
              {bookCount}
            </p>
          </div>
        </div>
        <div className='max-w-sm p-6 bg-slate-700 border flex justify-around items-center space-x-5 border-gray-200 rounded-lg shadow w-56 h-40'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-10 h-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
              />
            </svg>
          </div>
          <div>
            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-50 dark:text-white'>
              Penulis
            </h5>
            <p className='mb-3 font-semibold text-gray-50 dark:text-gray-400'>
              {authorCount}
            </p>
          </div>
        </div>
        <div className='max-w-sm p-6 bg-slate-700 border flex justify-around items-center space-x-5 border-gray-200 rounded-lg shadow w-56 h-40'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-10 h-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
          </div>
          <div>
            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-50 dark:text-white'>
              Tidak Dipinjam
            </h5>
            <p className='mb-3 font-semibold text-gray-50 dark:text-gray-400'>
              {notBorrowedCount}
            </p>
          </div>
        </div>
        <div className='max-w-sm p-6 bg-slate-700 border flex justify-around items-center space-x-5 border-gray-200 rounded-lg shadow w-56 h-40'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-10 h-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
          </div>
          <div>
            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-50 dark:text-white'>
              Dipinjam
            </h5>
            <p className='mb-3 font-semibold text-gray-50 dark:text-gray-400'>
              {borrowedCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
