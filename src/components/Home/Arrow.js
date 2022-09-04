import React from 'react'

function Arrow({prevSlide, nextSlide}) {
  return (
    <div className="arrow">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  )
}

export default Arrow;