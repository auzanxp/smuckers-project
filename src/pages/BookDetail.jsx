import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

export default function BookDetail() {
  const [findById, setFindIdBook] = useState('http://18.136.104.200/books');
  const bookId = useLocation().pathname.split("/")[2];
  const [detailBook, setDetailBook] = useState({});
  // const formatter = new Intl.DateTimeFormat("en-GB", {
  //   year: "numeric",
  //   month: "long",
  //   day: "2-digit"
  // });
  function formatDate(string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }

  useEffect(() => {
    const getData = () => {
      axios
        .get(findById + `/${bookId}`)
        .then((res) => {
          setDetailBook(res.data.data.book);
        })
        .catch((err) => {
        });
    };
    getData();
  }, []);

  return (
    <div className='bg-slate-800 min-h-screen'>
      <div className='continer h-screen flex flex-col place-items-center space-y-14'>

        <div className='border-2 p-7 m-auto w-1/2 border-sky-500 flex-row flex'>
          <div className='w-2/6 mr-7'>
            <picture className='rounded-lg w-56 block overflow-hidden'>
              <img
                className='hover:scale-125'
                src={detailBook?.cover}
              />
            </picture>
            <div className='flex flex-row mt-3'>
              <picture className='rounded-lg w-16 cursor-pointer block overflow-hidden'>
                <img
                  className='hover:scale-125'
                  src={detailBook?.cover}
                />
              </picture>
              <picture className='rounded-lg w-16 cursor-pointer mx-3 block overflow-hidden'>
                <img
                  className='hover:scale-125'
                  src={detailBook?.cover}
                />
              </picture>
              <picture className='rounded-lg w-16 cursor-pointer block overflow-hidden'>
                <img
                  className='hover:scale-125'
                  src={detailBook?.cover}
                />
              </picture>
            </div>
          </div>
          <div className='w-4/6'>
            <div className='flex-row flex'>
              <p className='text-white font-bold text-3xl w-80'>
                {detailBook?.title}
              </p>
              <div className='flex justify-center h-9 w-28 w-1/5'>
                <button
                  type='button'
                  className={detailBook?.is_borrowed ? 'inline-block bg-green-500 rounded-full w-full text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]' : 'inline-block bg-red-500 rounded-full w-full pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'}
                >
                  <span>{detailBook?.is_borrowed ? 'Tersedia' : 'Di Pinjam'}</span>
                </button>
              </div>
            </div>
            <p className='text-white text-2xl'>{detailBook?.author} | {detailBook?.year}</p>
            <p className='text-white text-2xl font-bold mt-4'>
              Deskripsi buku :
            </p>
            <p className='text-white font-normal'>
              {detailBook?.description}
            </p>
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
                <button
                  type='button'
                  className='inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                >
                  kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}