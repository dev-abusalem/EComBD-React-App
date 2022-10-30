import React from 'react'
import {BsBasket3} from 'react-icons/bs';
import {BsHeart, BsSearch} from 'react-icons/bs';




const dataTrim = (text, num) =>{
    return text.slice(0, num) + ' . . . !' ;
}
  
const SProducts = (props) => {


 
  return (
    <>
            <div className='home_product_sec_design border border-rose-200 m-5 rounded overflow-hidden'>
            <div className='p-4 text-right main_category_div'>
                <div className=' p-2 my-1 inline-block  rounded-full bg-yellow-400'>
                    <span>{props.item.ratings}</span>
                </div> 
                <img className='home_product_sec_design_img scale-75 rounded hover:scale-100 transition duration-700 ease' alt={props.item.name} src={props.item.image} />

                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>{props.item.name}</h2>
                    <p>{dataTrim(props.item.descriptions, 50)}</p>
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


</>
  )
}

export default SProducts;