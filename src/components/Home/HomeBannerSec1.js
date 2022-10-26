import React from 'react';
import banner1 from '../../images/banner-1.jpg';
import {MdLocalOffer} from 'react-icons/md';
import {GiCoffeeCup} from 'react-icons/gi';
import {TfiTimer} from 'react-icons/tfi';
import MainButton from '../MainButton';






const HomeBannerSec1 = () => {
  return (
    <section>
        <div className='container mx-auto'>
            <div className='flex'>
                <div className='flex-1 left_sec_home_bann1 m-3'>
                    <h1 className='text-3xl font-bold text-center mb-8'>HANDCRAFTED & <br></br>
                    ETHICALLY SOURCED</h1>

                    <div className='flex my-3'>
                        <div>
                            <span className='hover:ease-linear	duration-300 hover:shadow-xl p-5 rounded-full bg-pink-800 inline-block text-4xl	text-white'>
                            <MdLocalOffer />
                            </span>
                        </div>
                        <div className='ml-5'>
                            <h4 className='text-xl font-medium tracking-wider	'>FAIR PRICING</h4>
                            <p>Nullam quis ante. Pellentesque libero tortor, tincidunt et, tinciduntamet est.In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra .</p>
                        </div>

                    </div>

                    <div className='flex my-3'>
                        <div>
                            <span className='hover:shadow-xl hover:ease-linear	duration-300 p-5 rounded-full bg-pink-800 inline-block text-4xl	text-white'>
                               <GiCoffeeCup />
                            </span>
                        </div>
                        <div className='ml-5'>
                            <h4 className='text-xl font-medium tracking-wider	'>FAIR PRICING</h4>
                            <p>Nullam quis ante. Pellentesque libero tortor, tincidunt et, tinciduntamet est.In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra .</p>
                        </div>

                    </div>

                    <div className='flex my-3'>
                        <div>
                            <span className='hover:ease-linear	duration-300 hover:shadow-xl p-5 rounded-full bg-pink-800 inline-block text-4xl	text-white'>
                               <TfiTimer />
                            </span>
                        </div>
                        <div className='ml-5'>
                            <h4 className='text-xl font-medium tracking-wider	'>FAIR PRICING</h4>
                            <p>Nullam quis ante. Pellentesque libero tortor, tincidunt et, tinciduntamet est.In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra .</p>
                        </div>

                    </div>
                    
                    <div className='text-center mt-8'>
                        <MainButton name='Learn More ...!' link='#' exClass=' bg-pink-800 hover:bg-pink-700 text-white text-md' />
                    </div>
                </div>
                
                <div className='flex-1 left_sec_home_bann1 m-3'>
                    <img alt='home banner 1' src={banner1} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeBannerSec1