import React from 'react'
import Banner from './Banner'
import Books from '../books/Books'
import BookDetails from '../books/BookDetails'
import Coverage from '../Coverage'
import WhyBookCourier from './WhyBookCourier'
import Works from '../Stats'


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Books></Books>
        <Coverage></Coverage>
        <WhyBookCourier></WhyBookCourier>
        <BookDetails></BookDetails>
        <Works></Works>
       
        
    </div>
  )
}

export default Home
