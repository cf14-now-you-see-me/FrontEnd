import React, {useState} from 'react';
import style from './HasilRencanaPage.module.scss';
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useReducer } from "react";
import gambar1 from './gunungtujuh.jpg';
import gambar2 from './kayuaro2.jpg';

// https://v5.reactrouter.com/web/example/query-parameters
const useUrlQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const HasilRencanaPage = () => {
  const query = useUrlQuery();
  const [show, setShow] = useState(false);
  return (
    <main>
      <div style={{backgroundColor:'#A4B080', padding:'3%', border:'10px double #C28A4E'}}>
        <section>
          <h2>
            Rencana Liburan dari .... sampai ....
          </h2>
         <span> <h2>
            Rekomendasi Lokasi Wisata Untukmu :
          </h2> </span>
          <p>
          <button style={{backgroundColor:'#E0B05E', padding:'1%', borderRadius:'5px'}} onClick={() => {setShow(!show)}}>Hari 1: </button>
         <span style={{marginLeft:'5%'}}> Prediksi Cuaca: </span></p>
          {
            show?
            <div style={{margin:'3%'}}>
          <img src={gambar1} style={{width:'30%'}}   alt=""/>
         <img src={gambar1}  style={{width:'30%', marginTop:'2%'}}  alt=""/> 
         </div>
              
            :null
          }
          
        </section>
      </div>
    </main>
  )
}

export default HasilRencanaPage