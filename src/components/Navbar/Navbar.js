import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './NavbarNew.css';
import logokerinci from '../assets/kerinci22.png';
import burger from '../assets/burger.svg';
import {useNavigate} from 'react-router-dom';

function Navbar() {
  // const history = useNavigate()
  // const toggleNavbar = () => {
  //   setOpenLinks(!openLinks) //opposite of what currently is
  // }
  // const [openLinks, setOpenLinks] = useState(false) //initially state = false

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logokerinci} style={{height: '40px'}} alt="" />
        <h2 className="logo">Kerinci 22</h2>
      </div>
      <div className="navbar-center">
        <Link className="navbar-text" to="/">
          Beranda
        </Link>
        <Link className="navbar-text" to="/rekomendasi">
          Rekomendasi
        </Link>
        <Link className="navbar-text" to="/reservasi">
          Reservasi
        </Link>
        {/* <Link className="navbar-text" to="/kontak">
          Kontak
        </Link> */}
      </div>
      <div className="navbar-right">
        {/* <Link className="navbar-text" to="/search">
          Search
        </Link> */}
        <Link className="navbar-text2" to="/profil">
          Halo, Anonim
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
