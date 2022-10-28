import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './TourGuidePage.module.scss';
import gunungtujuh from './gunungtujuh.jpg';
import kayuaro from './kayuaro2.jpg';
import ButtonLink from '../../components/Buttons/ButtonLink';


const BackgroundsContainer = (props) => {
    return (
      <div className={style.backgroundsContainer}>
        {props.children}
      </div>
    )
  }
  
  const Background = (props) => {
    return (
      <div
        className={[style.background, (props.active? style.backgroundActive : style.backgroundInactive)].join(' ')}
        style={{backgroundImage: 'url(' + props.image + ')'}}
      />
      )
  }
  
const DetailsGuidePage = () => {
    const heroImgs = [
        gunungtujuh, kayuaro//, ... masukkan latar di sini
      ]
      const [heroImgIndex, setHeroImgIndex] = useState(0);
      const heroImgElements =
      <BackgroundsContainer id="container">
      {heroImgs.map((img, index)=>{
        return (<Background image={img} key={index} active={index === heroImgIndex}/>)
      })}
    </BackgroundsContainer>

useEffect(() => {
    const interval = setInterval(() => {
      setHeroImgIndex(heroImgIndex === heroImgs.length-1 ? 0 : heroImgIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImgIndex, heroImgs.length]);
    return (
    <main >
        <div className={style.heroContainer}>
        {heroImgElements}
<h2 className={style.bigTitle}>Nama Tour Guide</h2>
    <div className={style.rencanaRightContainer}>DetailsGuidePage</div>
    <ul className={style.actionList}>
          <li><ButtonLink to="/rencana" cta="1">Atur Informasi</ButtonLink></li>
          <li><ButtonLink noroute="1" to="#jelajah">Atur Wawasan</ButtonLink></li>
        </ul>
        </div>        
        </main>
  )
}

export default DetailsGuidePage