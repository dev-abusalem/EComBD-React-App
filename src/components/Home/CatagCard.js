import React from 'react';
import CategData from '../../data/Category';


const catln = CategData.length
const  x = CategData.slice( catln-4 ,catln)


const Category = x.reverse().map((catagdata)=>{

    return(
    
        <div className='rounded-lg main_category	text-center singleCateg m-4 bg-pink-50 ' key={catagdata.id}
        style={{
          backgroundImage:(`url(${catagdata.image})`),
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat',
          height:'400px',
          width:'auto'
        }}
        >
          <div className='main_category_div rounded-lg	'>
          <div className='hidden_part_of_category'>
          <h2 className='text-3xl font-light	text-white'>{catagdata.name}</h2>
          <button className='my-3 bg-pink-800 text-white rounded-full hover:bg-pink-700 px-4 py-1.5'>SHOP NOW</button>
          </div>
        </div>
        </div>

    
    )
})


const CatagCard = () => {

  return (
    <>
        <div className='flex'>
           {Category}
        </div>
    </>
  )
}

export default CatagCard