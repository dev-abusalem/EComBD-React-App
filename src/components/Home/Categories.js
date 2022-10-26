import React from 'react'
import CatagCard from './CatagCard'

const Categories = () => {
  return (
    <section className='py-12 mt-6'>
        <div className='container mx-auto'>
            <div>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>Our Latest Categories</h1>
                </div>
                <div>
                    
                    <CatagCard />

                    <div className='text-right'>
                        <a href='#' className='text-xs mr-4 px-3 py-1 italic  underline '>See All</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories