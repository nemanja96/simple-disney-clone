import React from 'react'

function Card({ title, tags, thumbnail }) {
  return (
    <div className='card-item' style={{ backgroundImage: "url(" + thumbnail.url + ")" }}>
      <div className='card-item-wrapper'>
        {/* <div className='card-item-info'>
          <h4 className='card-item-title'>{title}</h4>
          <div className='card-item-tags'>
            {tags.join(", ")}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Card