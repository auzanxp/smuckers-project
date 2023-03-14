import Button from "../components/elements/Button";
import Input from "../components/elements/Input";

export default function Login() {
  return (
    <div className="bg-primaryLogin min-h-screen">
      <div className='flex justify-start px-8'>
        <h4 className='text-4xl text-primary font-bold m-8'>SMUCKER’S</h4>
      </div>

      
      <div className="flex flex-row justify-evenly">
        <div className="">
          <img className="mx-auto" style={{width:"350px"}} src="/public/bookImage.png" alt="" />
        </div>

        <div className="flex grow max-w-lg flex-col items-center">
          <h4 className='text-5xl text-white font-bold mb-3'>LOGIN</h4>
          <h4 className='text-4xl text-white font-bold mb-9'>To Smucker's</h4>

          <form className="flex flex-col gap-7 mt-3 w-full" action="">
          <Input className='rounded-full py-2 px-4 border-white bg-formColor' type="text" placeholder="Email or Phone Number"></Input>
          <Input className='rounded-full py-2 px-4 border-white bg-formColor' type="password" placeholder="Password"></Input>
          <button className='rounded-full py-2 border border-black font-bold text-white bg-formColor'>
            LOGIN
          </button>
          </form>
          <a href="#" className="text-white font-thin m-4">Forgot your Password ?</a>
          <div className="flex mt-9 gap-2">
            <p className="text-white font-thin">Dont Have Account?</p>
            <a href="#" className="text-white font-bold">SIGN UP</a>
          </div>
        </div>

        
      </div>
      {/* <div className="flex flex-row justify-evenly">
        <div className="border">
          <h4 className='text-2xl text-primary font-bold m-8'>SMUCKER’S</h4>
        </div>

        <div className="flex flex-col w-{535} items-center border">
          <h4 className='text-6xl text-white font-bold'>LOGIN</h4>
          <h4 className='text-4xl text-white font-bold my-5'>To Smucker's</h4>

          <form className="w-full" action="#">
            <div className="mb-4">
              <input className="shadow border rounded-full w-1/2 py-2 px-3 bg-formColor text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email or Phone Number" />
            </div>
          </form>
        </div>

      </div> */}
    </div>
    // <div className="bg-primaryLogin min-h-screen">
    //   <div className='flex place-items-end justify-start p-8'>
    //     <h4 className='text-2xl font-bold text-primary'>SMUCKER’S</h4>
    //   </div>
    //   <div className="flex flex-row justify-evenly">
    //    <div className="absolute left-181px top-159px">
    //     <img className="object-cover border rounded-full" src="https://cdn-cms.pgimgs.com/news/2020/07/Perpustakaan-di-Rumah-FIMG.jpg" height="50px" alt="" />
    //    </div>
    //    <div>
    //     <h1 className="text-2xl font-bold text-primary">LOGIN</h1>
    //    </div>
    //   </div>
    // </div>
  );
}
