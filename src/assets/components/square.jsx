import React from 'react'

const Square = ({value, onSquareClick}) => {

  return (
    <button className='button' onClick={onSquareClick}>
        {value}
        </button>
  )
}

export default Square