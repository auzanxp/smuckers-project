import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/elements/Button';
import Input from '../../components/elements/Input';
import Label from '../../components/elements/Label';
import TextArea from '../../components/elements/TextArea';

const initState = {
  title: '',
  author: '',
  publisher: '',
  year: 'integer',
  isbn: '',
  language: '',
  page: '',
  length: '',
  weigth: '',
  width: '',
  cover: '',
  description: '',
  category: '',
  rating: '',
};

export default function AddBook() {
  const [input, setInput] = useState(initState);
  const { Id } = useParams();

  const handleInput = (e) => {
    let { value, name, type } = e.target;

    if (type === 'radio') {
      setInput({ ...input, [name]: parseInt(value) });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  return (
    <div>
      <h1 className='text-xl font-medium uppercase mb-7 border-b-2 text-white py-2'>
        {Id === undefined ? 'Tambah Buku' : 'Update Buku'}
      </h1>
      <form>
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
              <Input
                required
                type='text'
                className='rounded-md p-1'
                name='category'
                value={input.category}
                onChange={handleInput}
                placeholder='Kategori Buku'
              />
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
          </div>
          <div>
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
                name='job_status'
                id='open'
                value={1}
                checked={input.job_status === 1 && true}
                onChange={handleInput}
                className='mr-1'
              />
              <label htmlFor='open' className='mr-4 text-white'>
                Tersedia
              </label>
              <input
                type='radio'
                name='job_status'
                id='close'
                value={0}
                checked={input.job_status === 0 && true}
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
    </div>
  );
}
