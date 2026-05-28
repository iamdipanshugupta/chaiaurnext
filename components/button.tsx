"use client"

import React from 'react'

const Button = () => {
  return (
    <div className=''>
      <button onClick={()=> alert("hello world")} className='bg-blue-700 text-amber-100 text-xl  p-3 rounded-lg mt-5 *:**:not-[]:'>
        Click Me
      </button>
    </div>
  )
}

export default Button
