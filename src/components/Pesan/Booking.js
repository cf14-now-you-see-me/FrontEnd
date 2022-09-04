import React, { useState, useEffect }  from 'react'
import Pemesanan from './Pemesanan';
import Navbar from '../Navbar/Navbar';
import ReservasiTotal from './ReservasiTotal';

const Booking = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
  
    const handleClick = (item) => {
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
    };
  
    const handleChange = (item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;
  
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);
    };
  
    // useEffect(() => {
    //   console.log("cart change");
    // }, [cart]);
  
    return (
      <React.Fragment>
        <div style={{position:'absolute', width:'100%' ,top:'0', zIndex:'1000'}}>
        <Navbar setShow={setShow} size={cart.length} />
        </div>
        {show ? (
          <Pemesanan handleClick={handleClick} />
        ) : (
          <ReservasiTotal cart={cart} setCart={setCart} handleChange={handleChange} />
        )}
      </React.Fragment>
    );
}

export default Booking