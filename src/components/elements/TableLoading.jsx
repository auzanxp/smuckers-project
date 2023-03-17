export default function TableLoading() {
  return (
    <>
      {Array.from({ length: 7 }).map((_, index) => (
        <tr key={index}>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-10 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
          <td className='px-6 py-4 whitespace-nowrap'>
            <div className='bg-gray-200 h-4 w-24 rounded-md animate-pulse'></div>
          </td>
        </tr>
      ))}
    </>
  );
}
