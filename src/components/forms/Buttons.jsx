import React from 'react'
import { Loader } from 'lucide-react';

function Buttons( {isSubmitting,label} ) {
  return (
    <button className='bg-blue-600 text-white p-3 rounded-md hover:cursor-pointer'>
              {
                isSubmitting 
                ? <div className='flex gap-2'> 
                    <Loader className='animate-spin'/> 
                    <p> Loading...</p> 
                    </div> 
                : <p> {label} </p>
              }
            </button>
  )
}

export default Buttons