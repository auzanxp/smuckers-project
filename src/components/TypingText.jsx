import { useEffect, useState } from 'react';

export default function TypingText() {
  const [text, setText] = useState('');

  useEffect(() => {
    const words = ['Hai!', 'Selamat Datang di', 'LiBRARify', 'Enjoy!'];
    let wordIndex = 0;
    let letterIndex = 0;

    const interval = setInterval(() => {
      if (letterIndex === words[wordIndex].length) {
        setTimeout(() => {
          letterIndex = 0;
          wordIndex = (wordIndex + 1) % words.length;
        }, 1500);
      }
      setText(words[wordIndex].slice(0, letterIndex));
      letterIndex++;
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-white overflow-y-auto w-56 flex justify-center items-center'>
      <p className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500'>
        {text}
      </p>
    </div>
  );
}
