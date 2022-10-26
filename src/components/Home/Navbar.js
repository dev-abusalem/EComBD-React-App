import React from 'react';
import {SlHandbag} from 'react-icons/sl';
import {BsHeart} from 'react-icons/bs';


const Navbar = () => {

  const menuItems = [
    {
      id : 1,
      name : "HOME",
      link : "#",
    },
    {
      id : 2,
      name : "ABOUT",
      link : "#",
    },
    {
      id : 3,
      name : "SHOP",
      link : "#",
    },
    {
      id : 4,
      name : "BLOGS",
      link : "#",
    },
    {
      id : 5,
      name : "CONTACT",
      link : "#",
    }

  ]

const list =  menuItems.map((item)=>{
      return(
        <li className='px-3' key={item.id} >
          <a href={item.link}>{item.name}</a>
        </li>
      )
})
 
  return (


    
    <section className='main_menu py-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between	'>
          <div className='text-xl font-bold '>
             <a href='#'>EcomBD</a>
          </div> 
          <div className=''>
             <ul className='flex justify-between	mt-px'>               
                {list}      
             </ul>
          </div> 
          <div className='flex'>
             <a className='mr-1' href='#'>Register</a>
             <a className='ml-1' href='#'>Login</a>


             <span className='hover:scale-110 hover:ease-linear	duration-300 cursor-pointer ml-5 text-xl	'>
             <SlHandbag />
             </span>
             <span className='hover:scale-110 hover:ease-linear	duration-300 cursor-pointer ml-5 text-xl	'>
             <BsHeart />
             </span>
          </div> 
          
        </div>
      </div>
    </section>
  )
}

export default Navbar