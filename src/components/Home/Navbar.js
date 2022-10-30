import React from 'react';
import {SlHandbag} from 'react-icons/sl';
import { Link } from 'react-router-dom';
import {BsHeart} from 'react-icons/bs';
import '../CSS/Navbar.css'

const Navbar = () => {

  const menuItems = [
    {
      id : 1,
      name : "HOME",
      link : "/",
    },
    {
      id : 2,
      name : "ABOUT",
      link : "/about",
    },
    {
      id : 3,
      name : "SHOP",
      link : "/shop",
    },
    {
      id : 4,
      name : "BLOGS",
      link : "/blogs",
    },
    {
      id : 5,
      name : "CONTACT",
      link : "/contact",
    }

  ]

const list =  menuItems.map((item)=>{
      return(
        <li className='px-3' key={item.id} >
          <Link to={item.link}>{item.name}</Link>
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
             <Link className='mr-1' to='/register'>Register</Link>
             <Link className='ml-1' to='/login'>Login</Link>


            <div className='navbar_cart_bag_icon'>
              <span className='hover:scale-110 hover:ease-linear	duration-300 cursor-pointer ml-5 text-xl	'>
                <SlHandbag /> 
              </span>
              <p>0</p>
            </div>
             
             
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