import React, {useState} from 'react';
import list from "../Home/SliderDatas";
import Cards from "./RekomendasiCard";
import "./Pemesanan.css";

const Pemesanan = ({handleClick}) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  )
}

export default Pemesanan