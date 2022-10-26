import React from 'react';
import {Offer} from '../../data/Offer'

const HOfferSec = () => {



    const offers = Offer.map((offer)=>{
            return(
                <div className='flex-1 m-5 home_page_best_offer_sec' key={offer.id}>
                    <div className='home_page_best_offer_sec_overlay'>
                        <img src={offer.image} alt={offer.name} />
                        <h2 className='text-2xl font-semibold tracking-wider	'>{offer.name}</h2>
                    </div>
                
                </div>
            )
    })


  return (
    <section className='my-12 py-16 bg-rose-50'>
        <div className='container mx-auto'>
            <div>
                <h1 className='text-center text-4xl font-bold'> BEST OFFER'S </h1>

                <div className='flex mt-2'>
                    {offers}
                </div>
            </div>
        </div>
    </section>
  )
}

export default HOfferSec