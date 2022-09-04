import React from 'react'

function Dots({ currentSlide, onclick, sliderData }) {
  return (
    <div className="all-dots">
      {sliderData.map((slide, index) => (
        <span
          key={index}
          className={`${currentSlide === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  )
}

export default Dots