import React, {useState, useEffect} from 'react';
import SlideBackgrounds from './SlideBackgrounds';
import './BackgroundsTransition.css'

const len = SlideBackgrounds.length - 1;

const BackgroundsTransition = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentSlide(currentSlide === len ? 0 : currentSlide + 1);
    }, 20000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      {SlideBackgrounds.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide current' : 'slide'}
            key={index}
          >
            {index === currentSlide && (
              <>
                <div className='bg-layer'></div>
                <img className="bg-image" src={slide.imgBackground} alt="" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BackgroundsTransition;
