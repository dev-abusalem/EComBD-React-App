import React from 'react'
import {TfiFacebook, TfiTwitterAlt, TfiYoutube, TfiLinkedin} from 'react-icons/tfi';
import {FaCcVisa, FaCcMastercard, FaCcDiscover} from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si';



const Footer = () => {
  return (
    <footer className='pt-12 bg-pink-100'>
        <div className='md:container mx-auto'>
            <div className='flex wrap justify-between '>
                <div>
                < h3 className='mb-3 text-xl font-semibold'>About Store</h3>
                 
                  <div>
                      <img href="https://pngroyale.com/wp-content/uploads/2022/02/cafe-coffee-logos-logo-elements-png.png" alt="f logo" />
                  </div>
                  <p>This is our company . Loram ipsum dollar shit .</p>
                </div>

                <div className='text-center'>
                  < h3 className='mb-3 text-xl font-semibold'>Informations</h3>
                  <ul>
                      <li><a className='tracking-widest	underline' href='#'>Track Order</a></li>
                      <li><a className='tracking-widest	underline' href='#'>My Account</a></li>
                      <li><a className='tracking-widest	underline' href='#'>Registration</a></li>
                      <li><a className='tracking-widest	underline' href='#'>Quick Support</a></li>
                    </ul>
                </div>

                <div className='text-center'>
                  < h3 className='mb-3 text-xl font-semibold'>Quick Links</h3>
                  <ul>
                      <li><a className='tracking-widest	underline' href='#'>Track Order</a></li>
                      <li><a className='tracking-widest	underline' href='#'>My Account</a></li>
                      <li><a className='tracking-widest	underline' href='#'>Registration</a></li>
                      <li><a className='tracking-widest	underline' href='#'>Quick Support</a></li>
                    </ul>
                </div>

                <div className='text-center'>
                  <h3 className='mb-3 text-xl font-semibold'>Social Links</h3>
                  <div className='text-left mb-3'>
                    <p>Email: <a  href='#' className='font-semibold'>helpline@ecombd.com</a></p>
                    <p>Phone: <a href='#' className='font-semibold'>+8809412568</a></p>
                    <p><span>Address: </span>Bahrampur, Rajshahi</p>
                  </div>
                  <ul className='flex justify-center'>
                    <li className='m-1 p-2 bg-rose-700 hover:bg-rose-600'><a className='text-white' href='#'> <TfiFacebook/> </a></li>
                    <li className='m-1 p-2 bg-rose-700 hover:bg-rose-600'><a className='text-white' href='#'><TfiTwitterAlt /></a></li>
                    <li className='m-1 p-2 bg-rose-700 hover:bg-rose-600'><a className='text-white' href='#'><TfiLinkedin /></a></li>
                    <li className='m-1 p-2 bg-rose-700 hover:bg-rose-600'><a className='text-white' href='#'><TfiYoutube /></a></li>
                  </ul>
                </div>
            </div>

            <div className='text-center'>
              <ul className='my-2 mx-6 flex shadow-lg	 justify-center py-2 px-4 bg-rose-700'>
                <li className='mx-1 text-white text-2xl'><FaCcVisa /></li>
                <li className='mx-1 text-white text-2xl'><FaCcMastercard /></li>
                <li className='mx-1 text-white text-2xl'><SiAmericanexpress /></li>
                <li className='mx-1 text-white text-2xl'><FaCcDiscover /></li>
              </ul>
              <p className='text-sm pb-2 font-semibold'>Copyright 2022 @ EcomBD. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer