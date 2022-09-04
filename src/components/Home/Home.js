import React, {useState, useEffect} from 'react';
import "./Home.css";
import Arrow from './Arrow';
import SliderDatas from './SliderDatas';
import { Link } from 'react-router-dom';
import Dots from './Dots';
import Navbar from '../Navbar/Navbar';

const len = SliderDatas.length - 1;

const Home = () => {
   const [currentSlide, setcurrentSlide] = useState (0)

   useEffect(() => {
    const interval = setInterval(() => {
        setcurrentSlide(currentSlide === len ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);


  return (
    <div className='home-slider'>
        <Arrow
          prevSlide={()=>
            setcurrentSlide(currentSlide < 1 ? len : currentSlide - 1)
          }
          nextSlide={() =>
            setcurrentSlide(currentSlide === len ? 0 : currentSlide + 1)
          }
        />

        {SliderDatas.map((slide, index) =>{
            return(
                <div className={index === currentSlide ? 
                "slide current" : "slide"} key={index}>
                    {index === currentSlide && (
                    <>
                        <img className="slide-image" src={slide.gambar} alt="" />
                        <div style={{position:'absolute', width:'100%' ,top:'0', zIndex:'1000'}}><Navbar/></div>
                        <h2 className="slide-title">{slide.title}</h2>
                        <div className='content'>
                            <p className="slide-buka">{slide.buka}</p>
                            <p className="slide-lokasi">{slide.lokasi}</p>
                            <p className="slide-tarif">{slide.tarif}</p>
                            {/* <hr />
                            <br></br>
                            <Link to="/reservasi">
                            <button className="button-tiket">Cari Paket</button>
                            </Link> */}
                        </div>
                        <div className='informasi-page'>
                            <div className='info'>
                            <h2 className='info-title-informasi'>Informasi</h2>
                            <p className='info-penjelasan'>{slide.informasi}</p>
                            </div>
                            <br></br>
                            <h2 className='info-title'>{slide.title}</h2>
                            <div className='info-gambar gbr-cover'>
                                <img className='gbr-info' src={slide.gambar1} alt="" />
                                <img className='gbr-info' src={slide.gambar2} alt=""  />
                                <img className='gbr-info' src={slide.gambar3} alt=""  />
                            </div>
                        </div>
                        <div className='donasi'>
                            <h2 className='donasi-teks'> Ayo Lihat Rekomendasi Tempat Wisata Untukmu!</h2>
                            <button className='donasi-btn'>Rekomendasi</button>
                        </div>
                    </>
                    )}

                </div>
            )
        })}

        <Dots 
          currentSlide={currentSlide}
          sliderData={SliderDatas}
          onclick={(currentSlide) => setcurrentSlide(currentSlide)}
        />

    </div>
  )
}

export default Home