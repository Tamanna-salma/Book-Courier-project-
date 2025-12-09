import React from 'react'
import loadingImg from '../assets/loading.jpeg';
const Loading = () => {
  return (
    <div >
         {/* <span className="loading loading-spinner text-4xl "></span> */}
         <img className='flex justify-center loading loading-spinner w-24 mx-auto' src={loadingImg} alt="" />
    </div>
  )
}

export default Loading;
