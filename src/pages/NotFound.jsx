import { useNavigate } from "react-router-dom";

export default function NotFound() {

  let navigateBack = useNavigate();

  return (
    <div className=" flex items-center justify-center w-screen h-screen bg-primaryLogin">
      <div className="px-40 py-20 bg-slate-600 rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-white text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-blue-400 md:text-3xl">
            <span className="text-red-400">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-white font-thin md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <button onClick={() => navigateBack(-1)} className="px-6 py-2 text-sm font-semibold text-blue-600 bg-white">Go Back</button>
        </div>
      </div>
    </div>
  );
}
  
