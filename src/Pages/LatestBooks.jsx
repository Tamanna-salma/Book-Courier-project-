import React, { use } from 'react'
import Books from './books/Books'
import { Link } from 'react-router'

const LatestBooks = ({bookspromise}) => {
    const books=use(bookspromise)

  return (
    <div>
        <Link to={`/bookDetails/${book._id}`}></Link>
        <div className=" mx-auto px-4 mt-7 mb-6">
         <h2 className='font-bold text-xl lg:text-2xl text-center'>Featured <span className='font-bold text-xl lg:text-4xl text-green-600'>Reviews</span></h2>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-x-3 space-y-4 lg:space-y-5  mt-6'>
         {
         books.map(book=> <Books key={book._id}
            book={book}
            ></Books>)
        }
        
       </div>
        <div className='text-center mt-4'>
        
      
       </div>
    </div>
    </div>
  )
}

export default LatestBooks