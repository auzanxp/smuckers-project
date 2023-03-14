import React from 'react'

function ButtonGroup({ options, activeOption, onChange }) {
  return (
    <div className='flex md:justify-center items-center space-x-2'>
      {options.map((option) => (
        <button
          key={option}
          className={`py-2 px-4 ${
            option === activeOption
              ? 'bg-[#414654] text-white'
              : 'bg-transparent'
          } border transition duration-150 focus:outline-none focus:shadow-outline active:bg-gray-400 active:text-white`}
          type='button'
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup
