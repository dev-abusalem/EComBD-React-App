import React from 'react'
import Hero from './Home/Hero'
import './CSS/Home.css'
import Categories from './Home/Categories'
import HomeBannerSec1 from './Home/HomeBannerSec1'
import HProductionSec from './Home/HProductionSec'
import HOfferSec from './Home/HOfferSec'
import HomeVideoSec from './Home/HomeVideoSec'
import HSubscription from './Home/HSubscription'


const Home = () => {
  return (
    <>
        <Hero />
        <Categories />
        <HomeBannerSec1 />
        <HProductionSec />
        <HOfferSec />
        <HomeVideoSec />
        <HSubscription />
    </>
  )
}

export default Home