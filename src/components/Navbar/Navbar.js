import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './NavbarNew.css';
import logokerinci from '../assets/kerinci22.png';
import burger from '../assets/burger.svg';
import {useNavigate} from 'react-router-dom';

const Navbar = ({setShow, size}) => {
  // const history = useNavigate()
  // const toggleNavbar = () => {
  //   setOpenLinks(!openLinks) //opposite of what currently is
  // }
  // const [openLinks, setOpenLinks] = useState(false) //initially state = false

  return (
    <div className='navbar'>
      <div className='navbar-left'>
      <img src={logokerinci} style={{height: '40px'}} alt="" />
        <h3 className="logo">Kerinci 22</h3>
      </div>
      <div className='navbar-center'>
        <Link className='navbar-text' to="/"> Beranda </Link>
        {/* <Link className='navbar-text' to="/rekomendasi"> Rekomendasi </Link> */}
        <Link className='navbar-text' to="/reservasi" onClick={() => setShow(true)}> Rekomendasi </Link>
        {/* <Link className='navbar-text' to="/kontak"> Kontak </Link> */}
        {/* <div className='navbar-text' onClick={() => setShow(true)}>Reservasi</div> */}
        {/* <Link to="/booking"> */}
        <div className='cart' onClick={() => setShow(false)}>
          <p className='navbar-text'>Reservasi ({size})</p>
          {/* <span>{size}</span> */}
        </div>
        {/* </Link> */}

      </div>
      <div className='navbar-right'>
        {/* <Link className='navbar-text' to="/search"> Search </Link> */}
        <Link className='navbar-text2' to="/profil"> Halo, Anonim </Link>
      </div>
    </div>
  );
}

export default Navbar;
