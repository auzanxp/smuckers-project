import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Brand from '../components/Brand';
import Input from '../components/elements/Input';
import useAppContext from '../context/AppContext';

export default function Login() {
  const context = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, SetShowPassword] = useState(false);

  const handleShowPassword = () => SetShowPassword(!showPassword);

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
      <div className='flex justify-start px-8 mb-14 pt-6'>
        <Brand />
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
          <h4 className='text-4xl text-white font-bold mb-14'>LOGIN</h4>
          <form
            className='flex flex-col gap-7 mt-3 w-full'
            onSubmit={loginHandler}
          >
            <Input
              className='rounded-full py-2 px-4 border-white bg-formColor'
              type='text'
              placeholder='Email or Phone Number'
            />
            <div className='mb-4 relative'>
              <Input
                className='rounded-full py-2 px-4 border-white bg-formColor'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
              />
              <div className='absolute top-3 right-4 text-white hover:text-slate-300 cursor-pointer'>
                {showPassword ? (
                  <>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5'
                      onClick={handleShowPassword}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                    onClick={handleShowPassword}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                    />
                  </svg>
                )}
              </div>
            </div>
            <button
              className={`${
                isLoading && 'disabled opacity-50'
              } rounded-full py-2 border border-black font-bold text-white bg-formColor hover:bg-slate-600`}
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
