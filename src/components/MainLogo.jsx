import React from 'react'

function MainLogo({ img }) {
  return (
    <a className='main-logo' href='#0'>
      <img className='logo-img' src={img} alt='logo-img'></img>
    </a>
  )
}

export default MainLogo
