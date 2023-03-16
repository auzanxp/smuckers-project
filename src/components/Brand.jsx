import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Brand({isSmall}) {
  const [animate, setAnimate] = useState({
    logo: '',
    brand: false,
  });
  const animateBrand = (status) => {
    if (status) {
      setAnimate({
        logo: 'animate-bounce bg-gradient-to-r from-green-400 via-pink-500 to-purple-500',
        brand: 'bg-gradient-to-r from-green-400 via-pink-500 to-purple-500',
      });
    } else {
      setAnimate({
        logo: '',
        brand: '',
      });
    }
  };
  return (
    <Link
      className='flex items-center no-underline hover:no-underline lg:text-2xl'
      to='/'
      onMouseEnter={() => animateBrand(true)}
      onMouseLeave={() => animateBrand(false)}
    >
      <h2
        className={`${
          isSmall ? 'text-md sm:text-lg' : 'font-bold text-2xl'
        }drop-shadow-lg font-bold  uppercase tracking-wider transition duration-500 ${
          animate.brand ? 'text-indigo-400' : 'text-white'
        }`}
      > Librari</h2>
      <span className={`bg-clip-text text-transparent ${animate.logo} bg-gradient-to-r from-green-400 via-pink-500 to-purple-500`}>
        fy
      </span>
    </Link>
  );
}
