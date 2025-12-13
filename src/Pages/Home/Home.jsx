import React from 'react'
import Banner from './Banner'
import Books from '../books/Books'
import BookDetails from '../books/BookDetails'
import Coverage from '../Coverage'
import WhyBookCourier from './WhyBookCourier'
import Stats from '../Stats'
// import Service from '../Service'



const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Books></Books>
        <Coverage></Coverage>
        <WhyBookCourier></WhyBookCourier>
        <BookDetails></BookDetails>
        <Stats></Stats>
        {/* <Service></Service> */}
        
       
        
    </div>
  )
}

export default Home
