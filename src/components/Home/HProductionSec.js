import React from 'react';
import Products from '../../data/Products';
import {BsBasket3} from 'react-icons/bs';
import {BsHeart, BsSearch} from 'react-icons/bs';


const lmitProdct = Products.slice(Products.length-8, Products.length);

const allproducts = lmitProdct.reverse()



const singproduct = allproducts.map((product)=>{

    const trimWord = (d , num) =>{

      return d.slice(0,num) + ' ...';

    }
   
    
// const addToCart = () =>{
    
// }


    return(
        <div key={product.id} className='home_product_sec_design border border-rose-200 m-5 rounded overflow-hidden'>
            <div className='p-4 text-right main_category_div'>
                <div className=' p-2 my-1 inline-block  rounded-full bg-yellow-400'>
                    <span>{product.ratings}</span>
                </div> 
                <img className='home_product_sec_design_img scale-75 rounded hover:scale-100 transition duration-700 ease' alt={product.name} src={product.image} />

                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>{product.name}</h2>
                    <p>{trimWord(product.descriptions , 50)}</p>
                    <div className='flex home_product_sec_design_icons justify-center my-3'>
                        <span className='cursor-pointer	hover:scale-125 duration-700 ease transition mx-1.5 p-2 rounded-full bg-pink-600 text-white font-bold'>
                            <BsBasket3 />
                        </span>
                       
                        <span className='cursor-pointer	hover:scale-125 duration-700 ease transition mx-1.5 p-2 rounded-full bg-pink-600 text-white font-bold'>
                            <BsSearch />
                        </span>
                        
                        <span className='cursor-pointer	hover:scale-125 duration-700 ease transition mx-1.5 p-2 rounded-full bg-pink-600 text-white font-bold'>
                            <BsHeart />
                        </span>
                        
                    </div>
                </div>
               
            </div>
        </div>
    )
})


const HProductionSec = () => {
  return (
    <>
        <section className='my-16'>
        <div className='container mx-auto'>
            <div>
            <h1 className='text-4xl font-bold text-center'>Our Latest Products</h1>
            </div>

            <div className=''>
                {singproduct}
            </div>

        
            <div className='text-center'>
                        <a href='#' className='text-md font-light text-slate-800	tracking-wider	 mr-4 px-3 py-1  underline '>VIEW COLLECTIONS</a>
                    </div>
        </div>
    </section>
    </>

  )
}

export default HProductionSec