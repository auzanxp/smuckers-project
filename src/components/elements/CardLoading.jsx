import React from 'react'

const CardLoading = () => {
	return (
    <div className='border min-h-full w-44 md:w-52 bg-[#414654] rounded-tr-3xl rounded-bl-3xl overflow-hidden flex flex-col justify-between hover:scale-105 transition duration-300 animate-pulse'>
      <div className='p-4 h-48 rounded-t bg-gray-300'></div>
      <div className='flex-1 p-2 space-y-4 sm:p-8'>
        <div className='w-3/4 mx-auto bg-gray-300 h-4 rounded'></div>
        <div className='w-3/4 mx-auto bg-gray-300 h-4 rounded'></div>
        <div className='w-full bg-gray-300 h-4 rounded'></div>
      </div>
			<div className='h-8 bg-gray-300 rounded-b'></div>
    </div>
  );
}

export default CardLoading
