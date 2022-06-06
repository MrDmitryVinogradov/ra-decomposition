import React from 'react'

function NewsHeader({ props }) {
  return (
    <div className='news-header'>
      <a href='#' className='news-header-link'> Главное </a>
      <a href='#' className='news-header-link'> {props.position} </a>
      <a href='#' className='news-header-link'>  Рекомендуем </a>
      <p className='date-and-time'>{props.date} {props.time}</p>
    </div>
  )
}

export default NewsHeader