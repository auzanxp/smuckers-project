import { useEffect } from 'react';
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';
import useAppContext from '../context/AppContext';

export default function Login() {
  const context = useAppContext();

  useEffect(() => {
    document.title = 'Login';
  });

  async function loginHandler(e) {
    e.preventDefault();
    const result = await context.loginHandler(e);
    console.log(result);
  }

  return (
    <div className='bg-primaryLogin min-h-screen'>
      <div className='flex justify-start px-8'>
        <a href='/' className='text-4xl text-primary font-bold m-8'>
          SMUCKER’S
        </a>
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

          <form className='flex flex-col gap-7 mt-3 w-full' onSubmit={loginHandler}>
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
            <button className='rounded-full py-2 border border-black font-bold text-white bg-formColor'>
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
