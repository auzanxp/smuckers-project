import { useEffect, useState } from 'react';
import axios from 'axios';
import useAppContext from '../../context/AppContext';

export default function Dashboard() {
  const {
    username: { username },
  } = useAppContext();

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  // const [bookCount, setBookCount] = useState(0);
  // const [authorCount, setAuthorCount] = useState(0);
  // const [borrowedCount, setBorrowedCount] = useState(0);
  // const [notBorrowedCount, setNotBorrowedCount] = useState(0);

  // useEffect(() => {
  //   (async() => {
  //     const {data} = axios.get('https://books-api.anggakurnia.me/books');

  //     const books = data.books;
  //     setBookCount(books.length);

  //     let authors = new Set();
  //     books.forEach(function (book) {
  //       authors.add(book.authors);
  //     });
  //     setAuthorCount(authors.size);

  //     let borrowedCount = 0;
  //     let notBorrowedCount = 0;
  //     books.forEach((book) => {
  //       if(book.is_borrowed) {
  //         borrowedCount++;
  //       } else {
  //         notBorrowedCount++
  //       }
  //     });
  //     setBorrowedCount(borrowedCount);
  //     setNotBorrowedCount(notBorrowedCount);

  //   }) ();
  // }, []);

  const [bookCount, setBookCount] = useState(0);
  const [authorCount, setAuthorCount] = useState(0);
  const [borrowedCount, setBorrowedCount] = useState(0);
  const [notBorrowedCount, setNotBorrowedCount] = useState(0);  

  useEffect(() => {
    (async () => {
      // ambil datanya dulu dari API
      const { data } = await axios.get('https://books-api.anggakurnia.me/books');
      console.log(data);
      const books = data.books;
      // ambil jumlah buku
      setBookCount(books.length);
      console.log(data.data.books.length)
      // ambil jumlah author
      let authors = new Set();
      books.forEach(function (book) {
        authors.add(book.authors);
      });
      setAuthorCount(authors.size);
      console.log(authors.size)
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
    })();
  }, []);

  


  
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-white text-xl'>Hallo!, {username}</h1>
      </div>
      <div className='text-2xl text-center font-semibold tracking-wider h-96 flex justify-center items-center gap-8 text-white dark:text-gray-100'>

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Jumlah Buku</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{bookCount}</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Jumlah Penulis</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{authorCount}</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Buku Terpinjam</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">10</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Buku Tersedia</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">10</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>

      </div>
    </div>
  );
}