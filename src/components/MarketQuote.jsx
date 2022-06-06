import React from 'react'

function MarketQuote({ props }) {
  return (
    <div className='quote'>
      <p className='ticker'>{props.ticker}</p>
      <p className='price'>{props.price}</p>
      <p className='price-change'>{props.change}</p>
    </div>
  )
}

export default MarketQuote
