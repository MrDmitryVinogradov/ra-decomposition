import React from 'react'

function NewsBody({ news }) {
  return (
    <ul className='news-body'>
      {news.map((el, i) => <li className='news-item' key={i}> <img className='news-logo' src={el.logo}></img> <a href='#0' className='news-item-link'> {el.text} </a> </li>)}
    </ul>
  )
}

export default NewsBody