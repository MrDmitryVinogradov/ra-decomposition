import MarketQuote from './MarketQuote'

import React from 'react'

function MarketQuotes({ quotes }) {
  return (
    <div className='quotes'>
      {quotes.map((el, i) => <MarketQuote props={el} key={i} />)}
      ...
    </div>
  )
}

export default MarketQuotes
