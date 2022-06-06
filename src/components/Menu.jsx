import MenuItem from './MenuItem'

import React from 'react'

function Menu({ items }) {
  return (
    <ul className='menu'>
      {items.map((el, i) => <MenuItem item={el} key={i} />)}
    </ul>
  )
}

export default Menu
