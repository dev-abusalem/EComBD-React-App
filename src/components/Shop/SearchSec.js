import React from 'react'

const SearchSec = () => {
  return (
    <section className='mt-16 mb-8 py-4 bg-rose-100'>
    <div className='container mx-auto'>
      <div className='flex justify-between	align-center'>
        <div className='ml-4 flex shop_page_filter_sec_left'>
          <div className='mr-3'>
          <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter By Color</label>
            <select id="countries" className="bg-pink-50 border border-pink-300 text-gray-900 text-sm rounded focus:ring-rose-200 focus:border-rose-200 block w-full p-2.5">
              <option value="US">BLACK</option>
              <option value="CA">GRAY</option>
              <option value="FR">DARK</option>
              <option value="FR">ROSE</option>
              <option value="DE">PINK</option>
            </select>

          </div>
          <div>

            <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter By Size</label>
            <select id="countries" className="bg-pink-50 border border-pink-300 text-gray-900 text-sm rounded focus:ring-rose-200 focus:border-rose-200 block w-full p-2.5">
              <option value="CA">SM</option>
              <option value="CA">M</option>
              <option value="FR">L</option>
              <option value="DE">XL</option>
              <option value="DE">2XL</option>
            </select>

          </div>
          <div className='ml-3'>
          <label htmlFor="searchbx" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Search</label>
            <input id="countries" placeholder='search......' type='text' className="bg-pink-50 border border-pink-300 text-gray-900 text-sm rounded focus:ring-rose-200 focus:border-rose-200 block w-full p-2.5" / >                 
          </div>


        </div>
        
        <div className='shop_page_filter_sec_right'>

        <div>
          <label htmlFor="countries" className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sort by</label>
          <select id="countries" className="bg-pink-50 border border-pink-300 text-gray-900 text-sm rounded focus:ring-rose-200 focus:border-rose-200 block w-full p-2.5">
            <option value="CA">LATEST</option>
            <option value="CA">BEST SELLING</option>
            <option value="FR">LOW TO HIGH</option>
            <option value="DE">HIGH TO LOW</option>
            <option value="DE">OFFER PRODUCTS</option>
          </select>

        </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SearchSec