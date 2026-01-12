import React from 'react'
import Banner from './Banner'
import Books from '../books/Books'
import WhyBookCourier from './WhyBookCourier'
import Stats from '../Stats'
import Categories from '../../components/Categories'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Books></Books>     
        <WhyBookCourier></WhyBookCourier>
        <Categories></Categories>
        <Stats></Stats>
        
        
        
    </div>
  )
}

export default Home
