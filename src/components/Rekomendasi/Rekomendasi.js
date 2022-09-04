import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Navbar/Navbar';
import SliderDatas from '../Home/SliderDatas';
import './Rekomendasi.css';
import BackgroundsTransition from '../BackgroundsTransition/BackgroundsTransition';
import axios from 'axios';

function Rekomendasi() {
  const [date, setDate] = useState();
  const [selectedPlace, setSelectedPlace] = useState();
  const [place, setPlace] = React.useState(null)
    useEffect(()=>{
        axios({
            'url':'/api/places/',
            'method': 'get'
        }).then((r)=>{
          setPlace(r.data)
        })
    }, []);

    function getRecommendation(e) {
      e.preventDefault();
      ReactDOM.render(
        <>Tunggu sejenak...</>,
        document.getElementById('recommendations-'+e.target.dataset['place'])
      )
      axios({
          'url':'/api/places/' + e.target.dataset['place'] + '/recommend',
          'method': 'get'
      }).then((r)=>{
        ReactDOM.render(
          <ul>
            {
              Object.keys(r.data).map((index)=>{
                return (
                  <li>{r.data[index].name}</li>
                )
              })
            }
          </ul>,
          document.getElementById('recommendations-'+e.target.dataset['place'])
        )
        console.log(r.data)
      })
    }
  return (
    <div className="rekomendasi-container">
      <div
        style={{position: 'fixed', width: '100%', top: '0', zIndex: '-1000'}}
      >
        <BackgroundsTransition />
      </div>
      <div style={{position: 'absolute', width: '100%', top: '0', zIndex: '1000'}}>
        <Navbar />
      </div>
      <br/>
      <br/>
      <br/>
      <h1 style={{color: 'white'}}>Rekomendasi Perjalanan</h1>
      <div className="daftar-rekomendasi">
        {place && Object.keys(place).map((index) => {
          return (
            <>
              <br />
              <div className="item-rekomendasi">
                <h2 className="judul-rekomendasi">Mulai di: {place[index].name}</h2>
                {/* <img className="gambar-rekomendasi" src={item.gambar} alt="" /> */}
                <p className="info-rekomendasi">{place[index].description}</p>
                <div className="pemesanan">
                  {/* <button className='btn-pesan'>Pesan</button> */}
                  <br />
                  <h3>Rekomendasi perjalanan</h3>
                <button className="btn-pesan" data-place={place[index].id} onClick={getRecommendation}>Carikan</button>
                  <div id={"recommendations-" + place[index].id}>

                  </div>
                  <br />
                  {/* <p className="tarif-rekomendasi">{item.tarif}</p> */}
                  {/* <button className='btn-pesan'>Pesan</button> */}
                  
                </div>
              </div>
              <div className="bawah">
                
                <br />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Rekomendasi;
