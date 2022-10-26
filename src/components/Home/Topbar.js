import React, { useState } from 'react';
import {FaTimes} from 'react-icons/fa'
 

const Topbar = () => {

    const [isActive, setIsActive] = useState(false);



 const RemoveTopBar = () =>{
    setIsActive(current => !current);
 }

  return (
    <section>
        <div className={`bg-pink-900	 border-b border-white flex py-1.5 justify-center topbar ${isActive ? 'removeTopBar' : ''}`}>
            <p className='text-center text-white text-sm'> Super Deal Free Shipping On <span className='font-semibold	'>25th October - 50$</span></p>
            <span className={`text-white cursor-pointer absolute pt-px right-5`} onClick={RemoveTopBar}>
                <FaTimes />
            </span>       
        </div>
    </section>
  )
}

export default Topbar