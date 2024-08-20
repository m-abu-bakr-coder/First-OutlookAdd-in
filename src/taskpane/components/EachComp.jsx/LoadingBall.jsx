import React from 'react';
import { FaVolleyball } from "react-icons/fa6";

function LoadingBall() {
  return (
    <div className='animate-bounce mt-12 block ms-auto me-auto'>
        <FaVolleyball className=' text-4xl text-green-600 animate-spin' />
    </div>
  )
}

export default LoadingBall