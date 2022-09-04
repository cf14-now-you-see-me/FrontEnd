import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import BackgroundsTransition from '../BackgroundsTransition/BackgroundsTransition';
import axios from 'axios';

export default function Paket(){
    const [Package, setPackage] = React.useState(null)
    useEffect(()=>{
        axios({
            'url':'/api/package/',
            'method': 'get'
        }).then((r)=>{
            setPackage(r.data)
            let places = [];
        })
    }, []);
    
    return (
        <div className="paket-container">
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
      <h1 style={{color: 'white'}}>Daftar Paket</h1>
      <div className="rekomendasi-container">
        {
            Package && Object.keys(Package).map((key)=>{
                return (
                    <div className='item-rekomendasi'>
                        <h2 className='judul-rekomendasi'>{Package[key].name} {Package[key].kind === 0? 'Regular' : 'VIP'}</h2>
                        <p>
                            {Package[key].description}
                        </p>
                        <p>Harga: Rp.{Package[key].price}</p>
                        <p>Jam operasi: Rp.{Package[key].opening_times}</p>
                    </div>
                )
            })
        }
      </div>
        </div>
    )
};