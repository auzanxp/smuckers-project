import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import Button from '../components/elements/Button';

export default function NotFound() {
  let navigate = useNavigate();

  return (
    <div className=' flex items-center justify-center w-screen h-screen bg-gradient-to-l from-gray-900 to-slate-800'>
      <div className='px-40 py-20 bg-gray-900 rounded-md shadow-xl'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-white text-9xl'>404</h1>

          <h6 className='mb-2 text-2xl font-bold text-center text-blue-400 md:text-3xl'>
            <span className='text-red-400'>Oops!</span> Page Not Found!
          </h6>

          <p className='mb-8 text-center text-white font-thin md:text-lg'>
            Halaman yang Anda cari tidak ada
          </p>

          <div className='space-y-2'>
            <Button
              className='transform hover:scale-110 duration-300 ease-in-out'
              onClick={() => navigate(-1)}
            >
              <ArrowLeftCircleIcon />
              Kembali
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
