import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function BookDetail() {
  const [detailBook, setDetailBook] = useState({});
  const [books, setBooks] = useState([]);
  const bookId = useParams().id;
  function formatDate(string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }

  useEffect(() => {
    (async () => {
      const {
        data: {
          data: { books },
        },
      } = await axios.get('https://books-api.anggakurnia.me/books');
      setBooks(books);
      const filterBookById = books.filter((book) => book.id === +bookId);
      document.title = `Book Detail - ${filterBookById[0].title}`;
      setDetailBook(filterBookById[0]);
    })();
  }, [bookId]);

  return (
    <div className='bg-slate-800 py-5 min-h-screen'>
      <Navbar books={books} />
      {detailBook?.id ? (
        <div className='py-4 mt-5 rounded-lg border p-10 mx-auto w-3/4 md:flex-row flex flex-col md:items-center md:justify-center gap-10'>
          <div className=''>
            <picture className='rounded-lg w-56 block overflow-hidden cursor-pointer'>
              <img
                className='hover:scale-125 transition duration-200 w-full'
                src={detailBook?.cover}
              />
            </picture>
            <div className='flex flex-row mt-3'>
              <picture className='rounded-lg w-16 cursor-pointer block overflow-hidden'>
                <img
                  className='hover:scale-125 transition duration-200'
                  src={detailBook?.cover}
                />
              </picture>
              <picture className='rounded-lg w-16 cursor-pointer mx-3 block overflow-hidden'>
                <img
                  className='hover:scale-125 transition duration-200'
                  src={detailBook?.cover}
                />
              </picture>
              <picture className='rounded-lg w-16 cursor-pointer block overflow-hidden'>
                <img
                  className='hover:scale-125 transition duration-200'
                  src={detailBook?.cover}
                />
              </picture>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-between'>
              <p className='text-white font-bold text-3xl w-80'>
                {detailBook?.title}
              </p>
              <div className='h-9 w-28'>
                <button
                  type='button'
                  className={
                    detailBook?.is_borrowed
                      ? 'inline-block bg-green-500 rounded-full w-full text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                      : 'inline-block bg-red-500 rounded-full w-full pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                  }
                >
                  <span>
                    {detailBook?.is_borrowed ? 'Tersedia' : 'Di Pinjam'}
                  </span>
                </button>
              </div>
            </div>
            <p className='text-white text-2xl'>
              {detailBook?.author} | {detailBook?.year}
            </p>
            <p className='text-white text-2xl font-bold mt-4'>
              Deskripsi buku :
            </p>
            <p className='text-white font-normal'>{detailBook?.description}</p>
            <p className='text-white font-semibold mt-4'>Detail Buku</p>
            <div className='grid gap-4 grid-cols-2'>
              <p className='text-white font-normal'>
                Jumlah Halaman : <br /> {detailBook?.page}
              </p>
              <p className='text-white font-normal'>
                Penerbit : <br />
                {detailBook?.publisher}
              </p>
              <p className='text-white font-normal'>
                Tanggal Terbit : <br /> {formatDate(detailBook?.createdAt)}
              </p>
              <p className='text-white font-normal'>
                Berat : <br />
                {detailBook?.weight}
              </p>
              <p className='text-white font-normal'>
                ISBN : <br /> {detailBook?.isbn}
              </p>
              <p className='text-white font-normal'>
                Lebar : <br />
                {detailBook?.width}
              </p>
              <p className='text-white font-normal'>
                Bahasa : <br />
                {detailBook?.language}
              </p>
              <p className='text-white font-normal'>
                Panjang : <br />
                {detailBook?.length}
              </p>
            </div>
            <div className='flex justify-end space-x-2'>
              <div className='space-y-2'>
                <Link
                  to='/books'
                  type='button'
                  className='inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                >
                  kembali
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center my-12'>
          <h1 className='text-3xl font-bold text-white'>Loading...</h1>
        </div>
      )}
    </div>
  );
}
