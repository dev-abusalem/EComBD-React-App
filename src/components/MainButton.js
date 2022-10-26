import React from 'react'

const MainButton = (props) => {
  return (
    <>
    <div className='mt-4 mb-2'>
        <a  href={props.link} className={` px-6 py-2 rounded-full
            ${props.exClass}
        `} >
            {props.name}
        </a>
    </div>

    </>
  )
}

export default MainButton