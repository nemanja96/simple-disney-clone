import React from 'react'

function Card({ thumbnail }) {
  return (
    <div className='card-item' style={{ backgroundImage: "url(" + thumbnail.url + ")" }}>
      <div className='card-item-wrapper'>
      </div>
    </div>
  )
}

export default Card