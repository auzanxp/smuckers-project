import React from 'react';

function Modal({ isOpen, deleteHandler }) {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50'>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-8 rounded-lg text-gray-50'>
        <div className='text-lg font-bold mb-4'>Konfirmasi Penghapusan</div>
        <p className='mb-4'>Anda yakin ingin menghapus item ini?</p>
        <div className='flex justify-end'>
          <button
            type='button'
            className='bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-4'
            onClick={() => isOpen(false)}
          >
            Batal
          </button>
          <button
            type='button'
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
            onClick={deleteHandler}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
