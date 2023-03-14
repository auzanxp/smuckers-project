import React from 'react';

function TableList({ data, ...props }) {
  return (
    <div className='flex lg:items-center lg:justify-center'>
      <table className='table bg-white rounded-lg shadow dark:bg-gray-700 '>
        <thead>
          <tr className='text-xs'>
            <th className='p-4 font-medium text-gray-900 uppercase border-b-2 dark:border-dark-5 whitespace-nowrap dark:text-gray-100'>
              No.
            </th>
            <th className='p-4 font-medium text-gray-900 uppercase border-b-2 dark:border-dark-5 whitespace-nowrap dark:text-gray-100'>
              Action
            </th>
            <th className='p-4 font-medium text-gray-900 uppercase border-b-2 dark:border-dark-5 whitespace-nowrap dark:text-gray-100'>
              Judul Buku
            </th>
            <th className='p-4 font-medium text-gray-900 uppercase border-b-2 dark:border-dark-5 whitespace-nowrap dark:text-gray-100'>
              cover
            </th>
            <th className='p-4 font-medium text-gray-900 uppercase border-b-2 dark:border-dark-5 whitespace-nowrap dark:text-gray-100'>
              author
            </th>
            <th className='p-4 font-medium text-gray-900 uppercase border-b-2 dark:border-dark-5 whitespace-nowrap dark:text-gray-100'>
              phone
            </th>
            <th className='p-4 font-medium text-gray-900 uppercase border-b-2 dark:border-dark-5 whitespace-nowrap dark:text-gray-100'>
              company
            </th>
            <th className='p-4 font-medium text-gray-900 uppercase border-b-2 dark:border-dark-5 whitespace-nowrap dark:text-gray-100'>
              Website
            </th>
          </tr>
        </thead>
        <tbody>
          {data !== null &&
            data?.map((item, i) => (
              <tr
                className='text-xs text-gray-700 dark:text-gray-100'
                key={item.id}
              >
                <td className='p-4 border-b-2 dark:border-dark-5'>{i + 1}</td>
                <td className='w-40 p-4 border-b-2 dark:border-dark-5 min-w-min'>
                  {/* <Button
                                    color='yellow'
                                    value={item.id}
                                    onClick={() => {
                                        props.getAllData(item)
                                    }}
                                >
                                    Detail
                                </Button> */}
                </td>
                <td className='w-40 p-4 border-b-2 dark:border-dark-5 min-w-min'>
                  {item.name}
                </td>
                <td className='p-4 border-b-2 dark:border-dark-5'>
                  {item.username}
                </td>
                <td className='p-4 border-b-2 dark:border-dark-5'>
                  {item.email}
                </td>
                <td className='p-4 border-b-2 dark:border-dark-5 '>
                  {item.phone}
                </td>
                <td className='p-4 border-b-2 dark:border-dark-5'>
                  {item.website}
                </td>
                <td className='p-4 border-b-2 dark:border-dark-5'>
                  {item.company.name}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;
