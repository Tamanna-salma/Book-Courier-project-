import React from 'react'
import Banner from './Banner'
import Books from '../books/Books'
import WhyBookCourier from './WhyBookCourier'
import Stats from '../Stats'
import Categories from '../../components/Categories'
import TrustedPartners from '../../components/TrustedPartners'
import ContactMe from '../../components/ContactMe'
import Testimonials from '../../components/Testimonials'
import NewsLetter from '../../components/NewsLetter'
import Followers from '../../components/Followers'
import Faq from '../../components/Faq'

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
        <Testimonials></Testimonials>
        <NewsLetter></NewsLetter>
        <Followers></Followers>
        <Faq></Faq>
        
        
        
    </div>
  )
}

export default Home
