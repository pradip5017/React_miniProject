import React from 'react'


function HeaderSubImage() {
  return (
    <div className='flex flex-row justify-center items-center  m-2 '>
      <div className='grid lg:grid-cols-4 lg:gap-3 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1 gap-2 justify-center'>
      <img src="src\assets\image\header1.jpg" alt=""  />
      <img src="src\assets\image\header2.jpg" alt="" />
      <img src="src\assets\image\header3.jpg" alt="" />
    </div>
    </div>
  )
}

export default HeaderSubImage
// grid sm:4 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-2 sm:grid-cols-2 sm:gap-1