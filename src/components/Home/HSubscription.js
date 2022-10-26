import React from 'react'

const HSubscription = () => {
  return (
    <section className='py-20 bg-rose-500'>
        <div>
            <div className='text-center'>
                <h2 className='tracking-widest font-light text-3xl text-white'>Subscribe Our Newsletter</h2>
                <form className='inline-block my-2 rounded'>
                    <input className='py-2 px-3 bg-white  border-white-400 outline-0	=' type='email' placeholder='xxx@example.com'/>
                    <input className='mx-2 py-2 px-6 bg-white cursor-pointer text-rose-700 font-bold tracking-wider	hover:bg-slate-100	 ' type='Submit' value='Send' />
                </form>
            </div>
        </div>
    </section>
  )
}

export default HSubscription