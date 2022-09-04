import logo from './logo.svg';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import Informasi from './components/informasi/Informasi';
// import Dashboard from './components/dashboard/Dashboard';
import Wisata from './components/wisata/Wisata';
import Reservasi from './components/reservasi/Reservasi';
import Profil from './components/profil/Profil';
import Search from './components/search/Search';
import Kontak from './components/kontak/Kontak';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Rekomendasi from './components/Rekomendasi/Rekomendasi';

function App() {
  return (
    <Routes>
      <>
        {/* <Route path="/" exact element={<Dashboard/>}/> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/informasi" exact element={<Informasi />} />
        <Route path="/wisata" exact element={<Wisata />} />
        <Route path="/reservasi" exact element={<Reservasi />} />
        <Route path="/profil" exact element={<Profil />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/kontak" exact element={<Kontak />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/rekomendasi" exact element={<Rekomendasi/>}/>
      </>
    </Routes>
  );
}

export default App;
