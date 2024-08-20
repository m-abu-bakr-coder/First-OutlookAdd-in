import React from 'react'

function Button({text, submitBtn}) {
  const allFun = () =>{
    if(submitBtn === "createAcc") {
      const createAcc = () =>{
        console.log("btn is clicked");
      }
    }
  }
  return (
    <div className='flex justify-center mt-5'>
        <button onClick={allFun} className='bg-green-600 px-3 py-1 rounded-sm text-gray-100 text-lg hover:bg-green-800 font-semibold'>{text}</button>
    </div>
  )
}

export default Button