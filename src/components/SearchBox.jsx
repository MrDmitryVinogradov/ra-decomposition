import React from 'react'

function SearchBox({ placeholder }) {
  return (
    <div className='search-block'>
      <form className='search-form'>
        <input className='search-input'></input>
        <button className='search-button'>Найти </button>
      </form>
      <p className='search-underline'> Найдется все. Например <a className='underline-link' href='#0'> {placeholder} </a> </p>
    </div>
  )
}

export default SearchBox
