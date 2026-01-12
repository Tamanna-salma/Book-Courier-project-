import React from 'react'
import Banner from './Banner'
import Books from '../books/Books'
import WhyBookCourier from './WhyBookCourier'
import Stats from '../Stats'
import Categories from '../../components/Categories'
import TrustedPartners from '../../components/TrustedPartners'
import ContactMe from '../../components/ContactMe'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Books></Books>     
        <WhyBookCourier></WhyBookCourier>
        <Categories></Categories>
        <TrustedPartners></TrustedPartners>
        <Stats></Stats>
        <ContactMe></ContactMe>
        
        
        
    </div>
  )
}

export default Home
