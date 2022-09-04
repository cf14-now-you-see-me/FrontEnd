import React from 'react';
import kerinci_img from '../assets/kerinci.jpg';
import './Login.css';

const Login = () => {
  return (
    <div>
      <div className="bg-image">
        <img src={kerinci_img} alt="" />
      </div>
      <div className="bg-layer">
        <div
          style={{
            width: '50%',
            height: '100%',
            display: 'Flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{width: '70%'}}>
            <h1>Kerinci 22</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div
          style={{
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{background: 'rgba(255, 255, 255, 0.5)'}}>
            <div style={{background: '#9F9F5E', padding: '10px',color:"#FFFFFF"}}>
              <h4>Selamat datang di Kabupaten Kerinci!</h4>
            </div>
            <form
              style={{
                textAlign: 'center',
              }}
            >
              <div style={{paddingTop: '20px', paddingBottom: '10px'}}>
                <input
                  style={{
                    height: '40px',
                    width: '250px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    border: 'none',
                    textAlign: 'center',
                  }}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <input
                  style={{
                    height: '40px',
                    width: '250px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    border: 'none',
                    textAlign: 'center',
                  }}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </form>
            <div
              style={{
                textAlign: 'center',
                paddingTop: '10px',
                paddingBottom: '10px',
              }}
            >
              <button
                style={{
                  height: '40px',
                  width: '250px',
                  backgroundColor: '#1E7400',
                  border: 'none',
                  color: '#FFFFFF',
                }}
              >
                Login
              </button>
            </div>
            <div
              style={{
                textAlign: 'center',
                color: '#000000',
                fontSize: '12px',
                paddingTop: '10px',
                paddingBottom: '20px',
              }}
            >
              <a href='./register'>Belum punya akun?</a>
            </div>
            {/* <div
              style={{
                textAlign: 'center',
                paddingTop: '10px',
                paddingBottom: '20px',
              }}
            >
              <button
                style={{
                  height: '40px',
                  width: '250px',
                  backgroundColor: '#1E7400',
                  border: 'none',
                  color: '#FFFFFF',
                }}
              >
                Register
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
