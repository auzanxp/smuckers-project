export default function BookDetail() {
  return (
    <div className='bg-slate-800 min-h-screen'>
      <div className='continer h-screen flex flex-col place-items-center space-y-14'>
        <div className='border-2 p-7 m-auto w-1/2 border-sky-500 flex-row flex'>
          <div className='w-2/6 mr-7'>
            <picture className='rounded-lg block overflow-hidden'>
              <img
                className='hover:scale-125'
                src='https://placeimg.com/360/240/tech'
              />
            </picture>
            <div className='flex flex-row mt-3'>
              <picture className='rounded-lg cursor-pointer block overflow-hidden'>
                <img
                  className='hover:scale-125'
                  src='https://placeimg.com/360/240/tech'
                />
              </picture>
              <picture className='rounded-lg cursor-pointer mx-3 block overflow-hidden'>
                <img
                  className='hover:scale-125'
                  src='https://placeimg.com/360/240/tech'
                />
              </picture>
              <picture className='rounded-lg cursor-pointer block overflow-hidden'>
                <img
                  className='hover:scale-125'
                  src='https://placeimg.com/360/240/tech'
                />
              </picture>
            </div>
          </div>
          <div className='w-4/6'>
            <div className='flex-row flex'>
              <p className='text-white font-bold text-3xl'>
                Teknologi Informasi dan Komunikasi
              </p>
              <div class='flex justify-center space-x-2'>
                <div class='space-y-2'>
                  <button
                    type='button'
                    class='inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                  >
                    tersedia
                  </button>
                </div>
              </div>
            </div>
            <p className='text-white text-2xl'>Ismail Marjuki | 2017</p>
            <p className='text-white text-2xl font-bold mt-4'>
              Deskripsi buku :
            </p>
            <p className='text-white font-normal'>
              Lorem ipsum dolor sit amet consectetur. Non arcu accumsan nisi
              arcu neque sapien arcu tincidunt accumsan. Placerat nibh nisi ac
              amet habitasse laoreet id vitae. Quis curabitur eget pellentesque
              magna. Tempor amet est senectus aliquam in.
            </p>
            <p className='text-white font-semibold mt-4'>Detail Buku</p>
            <div className='grid gap-4 grid-cols-2'>
              <p className='text-white font-normal'>
                Jumlah Halaman : <br /> 123
              </p>
              <p className='text-white font-normal'>
                Penerbit : <br />
                Gramedia
              </p>
              <p className='text-white font-normal'>
                Tanggal Terbit : <br /> 12 Oktober 2017
              </p>
              <p className='text-white font-normal'>
                Berat : <br />
                0.3Kg
              </p>
              <p className='text-white font-normal'>
                ISBN : <br /> 9283948293{' '}
              </p>
              <p className='text-white font-normal'>
                Lebar : <br />
                12 Cm
              </p>
              <p className='text-white font-normal'>
                Bahasa : <br />
                Indonesia
              </p>
              <p className='text-white font-normal'>
                Panjang : <br />
                19 Cm
              </p>
            </div>
            <div className="w-full flex-row flex mt-3">
              <img src='../assets/arrow_back.png' className="w-24 ml-auto" alt='Arrow Back' />
              <p className='text-white text-1xl cursor-pointer text-blue-400'>
                Kembali
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
