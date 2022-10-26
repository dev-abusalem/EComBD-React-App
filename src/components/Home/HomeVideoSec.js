import React from 'react'

const HomeVideoSec = () => {
  return (
    <section 
    style={{
      backgroundImage:`url('https://thumbs.dreamstime.com/b/hot-sale-price-offer-deal-vector-banner-templates-195045806.jpg')`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      height:'50vh',
    }}
  >
    <div className='hero_overflow_video'>
      <div className='container mx-auto'>
          <div className='hero_overflow_video_content'>
            <div className='text-center'>
              <h1 className='text-white font-semibold text-2xl tracking-widest	'>WINTER SALE</h1>
              <p className='text-white my-4	'>lorem doller sit lorem doller sit lorem doller sit </p>
              <button className='bg-white px-6 py-2 rounded-full border-2 hover:text-white hover:bg-transparent		hover:border-white'>SHOP NOW</button>
            </div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default HomeVideoSec