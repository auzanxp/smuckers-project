import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Button from '../../components/elements/Button';
import Input from '../../components/elements/Input';
import TextArea from '../../components/elements/TextArea';

const initState = {
  title: '',
  author: '',
  publisher: '',
  year: '',
  isbn: '',
  language: '',
  page: '',
  length: '',
  weight: '',
  width: '',
  cover: '',
  description: '',
  category: '',
  rating: '',
  is_borrowed: false,
};

export default function AddBook() {
  const [input, setInput] = useState(initState);
  const Id = useParams().id;

  const handleInput = (e) => {
    let { value, name, type } = e.target;
    if (type === 'radio') {
      setInput({ ...input, [name]: parseInt(value) });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSubmitBooks = (e) => {
    e.preventDefault();
    const { is_borrowed, ...data } = input;
    console.log(input);
    try {
      if (Id) {
        axios.put(
          `http://18.136.104.200/books/${Id}/edit`,
          { ...input },
          {
            headers: {
              token: JSON.parse(localStorage.getItem('authentications')),
            },
          }
        );
        setInput(initState);
      } else {
        axios.post(
          'http://18.136.104.200/books/create',
          { ...data },
          {
            headers: {
              token: JSON.parse(localStorage.getItem('authentications')),
            },
          }
        );
      }
      setInput(initState);
      toast.success('OK Data Berhasil disubmit!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getBookDetail = async () => {
      const { data } = await axios.get(`http://18.136.104.200/books/${Id}`);
      const response = await data.data.book;
      setInput(response);
    };
    if (Id !== undefined) {
      getBookDetail();
    }
  }, [Id]);

  return (
    <div>
      <h1 className='text-xl font-medium uppercase mb-7 border-b-2 text-white py-2'>
        {Id === undefined ? 'Tambah Buku' : 'Update Buku'}
      </h1>
      <form onSubmit={handleSubmitBooks}>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Judul Buku
              </label>
              <Input
                required
                type='text'
                className='rounded-md p-1'
                name='title'
                value={input.title}
                onChange={handleInput}
                placeholder='Judul Buku'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Penulis
              </label>
              <Input
                required
                type='text'
                className='rounded-md p-1'
                name='author'
                value={input.author}
                onChange={handleInput}
                placeholder='Penulis Buku'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Penerbit
              </label>
              <Input
                required
                type='text'
                className='rounded-md p-1'
                name='publisher'
                value={input.publisher}
                onChange={handleInput}
                placeholder='Penerbit Buku'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Kategori
              </label>
              <select
                className='border rounded-md p-2 text-white bg-slate-600 border-indigo-900/30 focus:outline-none antialiased transition duration-200 shadow-sm w-full font-normal placeholder:text-md placeholder:font-light'
                name='category'
                value={input.category}
                onChange={handleInput}
                required
              >
                <option value='' disabled>
                  Pilih Kategori
                </option>
                <option value='Teknologi'>Teknologi</option>
                <option value='Novel'>Novel</option>
                <option value='Majalah'>Majalah</option>
                <option value='Komik'>Komik</option>
                <option value='Pendidikan'>Pendidikan</option>
              </select>
            </div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Bahasa
              </label>
              <Input
                required
                type='text'
                className='rounded-md p-1'
                name='language'
                value={input.language}
                onChange={handleInput}
                placeholder='Tahun'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                ISBN
              </label>
              <Input
                required
                type='text'
                className='rounded-md p-1'
                name='isbn'
                value={input.isbn}
                onChange={handleInput}
                placeholder='No-ISBN'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Tahun
              </label>
              <Input
                required
                type='number'
                className='rounded-md p-1'
                name='year'
                value={input.year}
                onChange={handleInput}
                placeholder='Tahun'
              />
            </div>
          </div>
          <div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Lebar Buku
              </label>
              <Input
                required
                type='text'
                className='rounded-md p-1'
                name='width'
                value={input.width}
                onChange={handleInput}
                placeholder='exp: 20 cm'
              />
            </div>{' '}
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Panjang Buku
              </label>
              <Input
                required
                type='text'
                className='rounded-md p-1'
                name='length'
                value={input.length}
                onChange={handleInput}
                placeholder='exp: 10 cm'
              />
            </div>{' '}
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Berat Buku
              </label>
              <Input
                required
                type='text'
                className='rounded-md p-1'
                name='weight'
                value={input.weight}
                onChange={handleInput}
                placeholder='exp: 200 gram'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Jumlah Halaman
              </label>
              <Input
                required
                type='number'
                className='rounded-md p-1'
                name='page'
                value={input.page}
                onChange={handleInput}
                placeholder='Jumlah Halaman'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Rating
              </label>
              <Input
                required
                type='number'
                className='rounded-md p-1'
                name='rating'
                value={input.rating}
                onChange={handleInput}
                placeholder='Rating'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-2 text-sm font-medium text-white'>
                Cover Buku
              </label>
              <Input
                required
                type='text'
                className='rounded-md p-1'
                name='cover'
                value={input.cover}
                onChange={handleInput}
                placeholder='Image url'
              />
            </div>
            <div className='mb-2'>
              <label className='block mb-3 text-sm font-medium text-white'>
                Status Pinjam
              </label>
              <input
                type='radio'
                name='is_borrowed'
                id='open'
                value={0}
                checked={input.is_borrowed === 0}
                onChange={handleInput}
                className='mr-1'
              />
              <label htmlFor='open' className='mr-4 text-white'>
                Tersedia
              </label>
              <input
                type='radio'
                name='is_borrowed'
                id='close'
                value={1}
                checked={input.is_borrowed === 1}
                onChange={handleInput}
                className='mr-1'
              />
              <label htmlFor='close' className='text-white'>
                Dipinjam
              </label>
            </div>
          </div>
        </div>
        <div className='mb-2'>
          <label className='block mb-2 text-sm font-medium text-white'>
            Deskripsi
          </label>
          <TextArea
            name='description'
            value={input.description}
            onChange={handleInput}
            required
          />
        </div>
        <div className='mb-2'>
          <Button isBlock isLarge>
            {Id === undefined ? 'Tambah Buku' : 'Update Buku'}
          </Button>
        </div>
      </form>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}
