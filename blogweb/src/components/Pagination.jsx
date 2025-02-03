import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
const Pagination = () => {
  const {page,handlePageChange, totalPages} = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center mt-4'>
      <div className='flex  w-[100vw]  justify-evenly items-center py-2 fixed backdrop-blur-md bg-[#073252]/10 bottom-0 z-10'>
      <div className='flex gap-x-4'>
      {page > 1 &&
          (<button className='text-[#54a1bf] rounded-md px-5 py-2 border' onClick={() => handlePageChange(page-1)}>Previous</button>)}

          {page < totalPages &&
            (<button className='text-[#54a1bf] rounded-md px-5 py-2 border' onClick={() => handlePageChange(page+1)}>Next</button>)}
      </div>
        

          <p className='font-bold text-sm text-[#54a1bf] '>Page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination