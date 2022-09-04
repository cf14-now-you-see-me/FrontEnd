import React, {useState, useEffect} from 'react';
import BackgroundsTransition from '../BackgroundsTransition/BackgroundsTransition';
import './ReservasiTotal.css';

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
    <div>
      <div
        style={{position: 'fixed', width: '100%', top: '0', zIndex: '-1000'}}
      >
        <BackgroundsTransition />
      </div>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            width: '60%',
          }}
        >
          <div
            style={{
              width: '100%',
            }}
          >
            {cart.map((item) => (
              <div className="cart_box" key={item.id}>
                <div className="cart_img">
                  <img src={item.gambar} alt="" />
                  <p style={{color: '#FFFFFF'}}>{item.title}</p>
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
          </div>
          <div className="total">
            <span>Total Harga Pesanan</span>
            <span>Rp. {price}</span>
          </div>
          <button className="pesan-final">Pesan</button>
        </div>
      </div>
    </div>
  );
};

export default ReservasiTotal;
