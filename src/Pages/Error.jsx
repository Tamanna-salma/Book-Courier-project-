import React from 'react'
import error from "../assets/Error.jpeg"
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router';
const Error = () => {
    return (
        <div>
            <img className='flex justify-center mt-10 mx-auto' src={error} alt="" />
            <div className='flex justify-center items-center mt-10'>
                <Link to='/' className='btn bg-green-800 text-white hover:bg-green-600'><IoMdArrowRoundBack />Back to home</Link>
            </div>
        </div>
    )
}

export default Error