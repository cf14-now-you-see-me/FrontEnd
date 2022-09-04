import React, {useState} from 'react';
import "./RekomendasiCard.css";

const RekomendasiCard = ({item, handleClick}) => {
    const [date, setDate]=useState();
    const {id, title, buka, lokasi, tarif, price, amount, gambar, informasi} = item;
  return (
    <div className='rekomendasiCard-container'>
        <div className='daftar-rekomendasiCard'>
                     <br/>
                    <div className='item-rekomendasiCard'>
                            <h2 className="judul-rekomendasiCard">{title}</h2>
                            <button className='btn-pesanCard' onClick={() => handleClick(item)}>Pesan</button>
                            <img className="gambar-rekomendasiCard" src={gambar} alt="" />
                            <p className='info-rekomendasiCard'>{informasi}</p>
                            <div className="pemesananCard">
                                    {/* <button className='btn-pesan'>Pesan</button> */}
                                    <br/><br/>
                                    <p className="tarif-rekomendasiCard">Harga Rp.{price}</p>
                                    <p className='tanggalCard'>Tanggal : {date} </p>
                                    <input className='input-tglCard' type="date" onChange={e=>setDate(e.target.value)} />
                                    {/* <button className='btn-pesan'>Pesan</button> */}
                            </div>
                    </div>
                    <div className='bawahCard'>
                        <br/> <br/> <br/>
                    </div>            
        </div>
    </div>
  )
}

export default RekomendasiCard