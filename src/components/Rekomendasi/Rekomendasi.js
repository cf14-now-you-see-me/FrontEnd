import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar';
import SliderDatas from '../Home/SliderDatas';
import './Rekomendasi.css';


function Rekomendasi() {
    const [date, setDate]=useState();

  return (
    <div className='rekomendasi-container'>
    <Navbar/>
        <div className='daftar-rekomendasi'>
            {SliderDatas.map((item) =>{
                return(
                    <>
                    <br/>
                    <div className='item-rekomendasi'>
                    <h2 className="judul-rekomendasi">{item.title}</h2>
                    <button className='btn-pesan'>Pesan</button>
                    <img className="gambar-rekomendasi" src={item.gambar} alt="" />
                    <p className='info-rekomendasi'>{item.informasi}</p>
                    <div className="pemesanan">
                    {/* <button className='btn-pesan'>Pesan</button> */}
                    <br/><br/>
                    <p className="tarif-rekomendasi">{item.tarif}</p>
                    <p className='tanggal'>Tanggal : {date} </p>
                    <input className='input-tgl' type="date" onChange={e=>setDate(e.target.value)} />
                    {/* <button className='btn-pesan'>Pesan</button> */}
                    </div>
                    </div>
                    <div className='bawah'>
                        <br/>
                    </div>
                    </>
                )}            
            )}
        </div>
    </div>
  )
}

export default Rekomendasi