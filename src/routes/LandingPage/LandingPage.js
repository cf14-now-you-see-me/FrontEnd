import style from './LandingPage.module.scss';

import ButtonLink from '../../components/Buttons/ButtonLink';
import { useEffect, useState } from 'react';

// gambar latar
import gunungtujuh from './gunungtujuh.jpg';
import kayuaro from './kayuaro2.jpg';
import ListOfPlaces from '../../components/ListOfPlaces/ListOfPlaces';

// container utk latar
const BackgroundsContainer = (props) => {
  return (
    <div className={style.backgroundsContainer}>
      {props.children}
    </div>
  )
}

/**
 * gambar latar
 * @param {{active: boolean, image: string}} props 
 */
const Background = (props) => {
  return (
    <div
      className={[style.background, (props.active? style.backgroundActive : style.backgroundInactive)].join(' ')}
      style={{backgroundImage: 'url(' + props.image + ')'}}
    />
    )
}

// isi laman utama
const MainPage = () => {
  const heroImgs = [
    gunungtujuh, kayuaro//, ... masukkan latar di sini
  ]
  const [heroImgIndex, setHeroImgIndex] = useState(0);
  const heroImgElements = 
    /*
      semua gambar latar dimasukkan sekaligus agar tidak
      melakukan loading ulang setiap kali scroll.

      tampilan dilakukan dengan parameter `active` yang secara
      otomatis update saat scroll
    */
    <BackgroundsContainer id="container">
      {heroImgs.map((img, index)=>{
        return (<Background image={img} key={index} active={index === heroImgIndex}/>)
      })}
    </BackgroundsContainer>
  
  // scroll setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImgIndex(heroImgIndex === heroImgs.length-1 ? 0 : heroImgIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImgIndex, heroImgs.length]);

  // tampilkan dan loading saat discroll
  const [atJelajah, setAtJelajah] = useState(false);

  useEffect(()=>{
    let intersect = new IntersectionObserver(([e])=>{
      if (e.isIntersecting) {
        setAtJelajah(true);
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: .25
    });

    intersect.observe(document.querySelector('#jelajah'))
  }, [])

  const jelajahInlineStyles = {
    minHeight: '100%'
  }
  return (
    <main>
      <div className={style.heroContainer}>
        {heroImgElements}
        <h2 className={style.bigTitle}>Rasakan keseruan alam Kerinci</h2>
        <p className={style.body}>
            Kerinci adalah salah satu kabupaten yang berada dibagian
            paling barat provinsi Jambi, Indonesia. Kabupaten ini
            merupakan daerah wisata di provinsi Jambi, yang dikenal
            dengan sebutan sekepal tanah dari surga.
          </p>
          <p className={style.body}>
          Kabupaten Kerinci ditetapkan sebagai kabupaten sejak awal
          berdirinya provinsi Jambi dengan pusat pemerintahan di
          kecamatan Siulak. 
          </p>
        <ul className={style.actionList}>
          <li><ButtonLink to="/rencana" cta="1">Rencanakan petualanganmu</ButtonLink></li>
          <li><ButtonLink noroute="1" to="#jelajah">Mulai berjelajah</ButtonLink></li>
        </ul>
      </div>
      <div id="jelajah" className={style.jelajahSection} style={jelajahInlineStyles}>
        <h2>Jelajahi Kerinci</h2>
        <p>
          Banyak sekali tempat yang bisa Anda kunjungi
          di Kerinci yang indah, manakah yang Anda
          mau?
        </p>
        {atJelajah? <ListOfPlaces/> : <></>}
      </div>
    </main>
  )
};

export default MainPage;