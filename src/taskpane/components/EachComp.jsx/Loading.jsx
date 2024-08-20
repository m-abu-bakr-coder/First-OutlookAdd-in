import React from 'react';
import { RiLoader4Line } from "react-icons/ri";

function Loading() {
  return (
    <div className='flex justify-center align-middle mt-20'>
        <RiLoader4Line className='text-green-600 text-5xl animate-spin' />
    </div>
  )
}

export default Loading