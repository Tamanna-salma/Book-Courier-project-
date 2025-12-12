import React from 'react'
import Banner from './Banner'
import Books from '../books/Books'
import BookDetails from '../books/BookDetails'
import Coverage from '../Coverage'




const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Books></Books>
        <Coverage></Coverage>
        <BookDetails></BookDetails>
       
        
    </div>
  )
}

export default Home
