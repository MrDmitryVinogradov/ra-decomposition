import React from 'react'

function MenuItem(props) {
  return (
    <li className='menu-item'>
      <a className='menu-link' href='#0'> {props.item} </a>
    </li>
  )
}

export default MenuItem
