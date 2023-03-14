import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout(props) {
  const [showSidebar, setShowSidebar] = useState(true);
  const handleShowSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className='min-h-screen bg-gradient-to-tr from-gray-900 to-slate-800'>
      <div
        className={`${
          !showSidebar && '-translate-x-72'
        } w-60 bg-gray-800 h-fit fixed shadow-lg my-3 ml-3 rounded-xl transition duration-300`}
      >
        <Sidebar />
      </div>  
      <div
        className={`${
          !showSidebar ? 'pl-3' : 'pl-72'
        } pt-3 transition duration-300`}
      >
        <Topbar handleClick={handleShowSidebar} />
      </div>
      <div
        className={`${!showSidebar ? 'pl-3' : 'pl-72'} transition duration-300`}
      >
        <div className='bg-gray-800 py-3 px-5 mr-5 rounded-lg mt-3 min-h-full overflow-x-hidden '>
          {props.children}
        </div>
      </div>
    </div>
  );
}
