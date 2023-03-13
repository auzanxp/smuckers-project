import React from 'react';

const Category = ({ name }) => {
  return (
    <div className='flex'>
      <input type='checkbox' className='w-4 mr-2' name={name} id={name} />
      <label htmlFor={name} className='text-lg'>
        {name}
      </label>
    </div>
  );
};

export default Category;
