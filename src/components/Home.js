import React from 'react'
import Hero from './Home/Hero'
import Navbar from './Home/Navbar'
import Topbar from './Home/Topbar'
import './Home.css'
import Categories from './Home/Categories'
import HomeBannerSec1 from './Home/HomeBannerSec1'
import HProductionSec from './Home/HProductionSec'
import HOfferSec from './Home/HOfferSec'
import HomeVideoSec from './Home/HomeVideoSec'
import HSubscription from './Home/HSubscription'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <Topbar />
        <Navbar />
        <Hero />
        <Categories />
        <HomeBannerSec1 />
        <HProductionSec />
        <HOfferSec />
        <HomeVideoSec />
        <HSubscription />
        <Footer />
    </>
  )
}

export default Home