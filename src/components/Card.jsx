import React from 'react'

function Card({ props }) {
  return (
    <div className='card'>
      <img className='card-img' src={props.img} alt='card-img'></img>
      <a className='card-header' href='#0'> <h2> {props.header} </h2> </a>
      <div className='card-body'>{props.body}</div>
    </div>
  )
}

export default Card
