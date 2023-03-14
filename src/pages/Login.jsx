import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Input from '../components/elements/Input';
import useAppContext from '../context/AppContext';

export default function Login() {
  const context = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

    const toastrOptions = {
      position: 'top-center',
      autoClose: 3500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };

  useEffect(() => {
    document.title = 'Login';
  });

  async function loginHandler(e) {
    setIsLoading(true);
    e.preventDefault();
    const result = await context.loginHandler(e);
    toast.error(result?.response?.data?.message, toastrOptions);
    setIsLoading(false);
  }

  return (
    <div className='bg-primaryLogin min-h-screen'>
      <div className='flex justify-start px-8'>
        <Link to='/' className='text-4xl text-primary font-bold m-8'>
          SMUCKER’S
        </Link>
      </div>

      <div className='flex flex-row justify-evenly'>
        <div className=''>
          <img
            className='mx-auto'
            style={{ width: '350px' }}
            src='/public/bookImage.png'
            alt=''
          />
        </div>

        <div className='flex grow max-w-lg flex-col items-center'>
          <h4 className='text-5xl text-white font-bold mb-3'>LOGIN</h4>
          <h4 className='text-4xl text-white font-bold mb-9'>To Smucker's</h4>

          <form
            className='flex flex-col gap-7 mt-3 w-full'
            onSubmit={loginHandler}
          >
            <Input
              className='rounded-full py-2 px-4 border-white bg-formColor'
              type='text'
              placeholder='Email or Phone Number'
            ></Input>
            <Input
              className='rounded-full py-2 px-4 border-white bg-formColor'
              type='password'
              placeholder='Password'
            ></Input>
            <button
              className={`${
                isLoading && 'disabled opacity-50'
              } rounded-full py-2 border border-black font-bold text-white bg-formColor`}
              disabled={isLoading}
            >
              LOGIN
            </button>
          </form>
          <a href='#' className='text-white font-thin m-4'>
            Forgot your Password ?
          </a>
          <div className='flex mt-9 gap-2'>
            <p className='text-white font-thin'>Dont Have Account?</p>
            <a href='#' className='text-white font-bold'>
              SIGN UP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
