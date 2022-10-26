import React from 'react'

const Hero = () => {
  return (
    <section 
      style={{
        backgroundImage:`url('https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg')`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'90vh',
      }}
    >
      <div className='hero_overflow'>
        <div className='container mx-auto'>
            <div className='hero_wrapper'>
              <div className='hero_left'>
                <h1>WINTER SALE</h1>
                <p>lorem doller sit lorem doller sit lorem doller sit </p>
                <button className='bg-white px-6 py-2 rounded-full border-2 hover:text-white hover:bg-transparent		hover:border-white'>SHOP NOW</button>
              </div>
              <div className='hero_right'>

              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero