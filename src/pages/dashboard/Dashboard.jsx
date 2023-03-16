import { useEffect } from 'react';
import useAppContext from '../../context/AppContext';

export default function Dashboard() {
  const {
    username: { username },
  } = useAppContext();

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-white text-xl'>Hallo!, {username}</h1>
      </div>
      <div className='text-2xl text-center font-semibold tracking-wider h-96 flex justify-center items-center text-white dark:text-gray-100'>
        Ini Page Dashboard
      </div>
    </div>
  );
}
