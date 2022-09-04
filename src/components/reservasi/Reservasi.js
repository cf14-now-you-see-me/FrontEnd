import React from 'react';
import BackgroundsTransition from '../BackgroundsTransition/BackgroundsTransition';
import Navbar from '../Navbar/Navbar';
import ReservasiDatas from './ReservasiDatas';

const Reservasi = () => {
  return (
    <div>
      <div
        style={{position: 'fixed', width: '100%', top: '0', zIndex: '-1000'}}
      >
        <BackgroundsTransition />
      </div>
      <div
        style={{position: 'absolute', width: '100%', top: '0', zIndex: '1000'}}
      >
        <Navbar />
      </div>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            width: '85vw',
            height: '90vh',
          }}
        >
          {ReservasiDatas.map((item) => {
            return (
              <>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{width: '40%'}}>
                    <h2>{item.namaPaket}</h2>
                    <p>{item.kodeBooking}</p>
                    <p>{item.tanggal}</p>
                  </div>
                  <div
                    style={{
                      width: '20%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{textAlign: 'center'}}>
                      Total Paket: <p>{item.quantity}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '20%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{textAlign: 'center'}}>
                      Total Harga: <p>{item.totalHarga}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '20%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{textAlign: 'center'}}>
                      <p>{item.status}</p>
                    </div>
                  </div>
                </div>

                <br />
                <br />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reservasi;
