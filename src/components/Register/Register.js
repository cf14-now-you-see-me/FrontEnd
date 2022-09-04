import React from 'react';
import kerinci_img from '../assets/kerinci.jpg';
import './Register.css';

const Register = () => {
  return (
    <div>
      <div className="bg-image">
        <img src={kerinci_img} alt="" />
      </div>
      <div className="bg-layer">
        <div className="content-box">
          <div className="content-box-title">
            <h4>Datadiri</h4>
          </div>
          <form>
            <div className="main-content-1">
              <div className="main-content-grid-1">
                <div className="sub-content-grid-30">
                  <div className="sub-content-grid-90">Nama Lengkap</div>
                  <div className="sub-content-grid-10">:</div>
                </div>
                <div className="sub-content-grid-70">
                  <input
                    className="input-box"
                    type="text"
                    placeholder="Nama Lengkap"
                  />
                </div>
              </div>
            </div>
            <div className="main-content-1">
              <div className="main-content-grid-1">
                <div className="sub-content-grid-30">
                  <div className="sub-content-grid-90">KTP/Passport</div>
                  <div className="sub-content-grid-10">:</div>
                </div>
                <div className="sub-content-grid-70">
                  <input
                    className="input-box"
                    type="text"
                    placeholder="KTP/Passport"
                  />
                </div>
              </div>
            </div>
            <div className="main-content-1">
              <div className="main-content-grid-1">
                <div className="sub-content-grid-30">
                  <div className="sub-content-grid-90">Kewarganegaraan</div>
                  <div className="sub-content-grid-10">:</div>
                </div>
                <div className="sub-content-grid-70">
                  <input
                    className="input-box"
                    type="text"
                    placeholder="Kewarganegaraan"
                  />
                </div>
              </div>
            </div>
            <div className="main-content-1">
              <div className="main-content-grid-1">
                <div className="sub-content-grid-30">
                  <div className="sub-content-grid-90">Tanggal Lahir</div>
                  <div className="sub-content-grid-10">:</div>
                </div>
                <div className="sub-content-grid-70">
                  <input className="input-box-date" type="date" />
                </div>
              </div>
            </div>
            <div className="main-content-1">
              <div className="main-content-grid-1">
                <div className="sub-content-grid-30">
                  <div className="sub-content-grid-90">Foto Profil</div>
                  <div className="sub-content-grid-10">:</div>
                </div>
                <div className="sub-content-grid-70">
                  <label className="input-box-file">
                    <input type="file" />
                    Pilih Foto
                  </label>
                </div>
              </div>
            </div>
            <div className="main-content-1">
              <div className="main-content-grid-1">
                <div className="sub-content-grid-30">
                  <div className="sub-content-grid-90">Nomor HP</div>
                  <div className="sub-content-grid-10">:</div>
                </div>
                <div className="sub-content-grid-70">
                  <input
                    className="input-box"
                    type="text"
                    placeholder="Nomor HP"
                  />
                </div>
              </div>
            </div>
            <div className="main-content-1">
              <div className="main-content-grid-1">
                <div className="sub-content-grid-30">
                  <div className="sub-content-grid-90">Email</div>
                  <div className="sub-content-grid-10">:</div>
                </div>
                <div className="sub-content-grid-70">
                  <input
                    className="input-box"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="main-content-1">
              <div className="main-content-grid-1">
                <div className="sub-content-grid-30">
                  <div className="sub-content-grid-90">Password</div>
                  <div className="sub-content-grid-10">:</div>
                </div>
                <div className="sub-content-grid-70">
                  <input
                    className="input-box"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="main-content-2">
            <div className="sub-content-grid-30">
              <a style={{paddingLeft:'70px'}} href="./login">Login</a>
            </div>
            <div className="sub-content-grid-40">
              <button
                style={{
                  height: '40px',
                  width: '250px',
                  backgroundColor: '#1E7400',
                  border: 'none',
                  color: '#FFFFFF',
                }}
              >
                Register!
              </button>
            </div>
            <div className="sub-content-grid-30"></div>
          </div>
          <div className="main-content-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
