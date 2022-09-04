import React, { useState, useEffect } from 'react'
import "./ReservasiTotal.css";

const ReservasiTotal = ({cart, setCart, handleChange}) => {

  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className='semua'>
    <div className='container-cart'>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.gambar} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Batal</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Harga Pesanan</span>
        <span>Rp. {price}</span>
      </div>
      <button className='pesan-final'>Pesan</button>
      </div>
      </div>
    
  );
}

export default ReservasiTotal