import React from 'react'

function Banner({ img }) {
  return (
    <div className='banner'>
      <a href='#0'> <img className='banner-img' src={img} alt='banner'></img> </a>
    </div>
  )
}

export default Banner
