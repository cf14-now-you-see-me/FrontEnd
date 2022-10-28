import { Route, Routes, useLocation } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './transition.scss';
import style from './App.module.scss';

// laman2 tersedia
import LandingPage from '../../routes/LandingPage/LandingPage';
import DetailsPage from '../../routes/DetailsPage/DetailsPage';
import RencanaPage from '../../routes/RencanaPage/RencanaPage';
import RekomendasiPage from '../../routes/RekomendasiPage/RekomendasiPage';
import ReservasiPage from '../../routes/ReservasiPage/ReservasiPage';
import UserPage from '../../routes/UserPage/UserPage';
import HasilRencanaPage from '../../routes/HasilRencanaPage/HasilRencanaPage';
import TestReview from '../../routes/TestReview/TestReview';
import TestNearbyArea from '../../routes/TestNearbyArea/TestNearbyArea';
import DaftarGuidePage from '../../routes/TourGuidePage/DaftarGuidePage';
import RenewDetailsPage from '../../routes/RenewDetailPage/RenewDetailPage';
import LoginGuidePage from '../../routes/TourGuidePage/LoginGuidePage';
import DetailsGuidePage from '../../routes/TourGuidePage/DetailsGuidePage';

function App(){
    let location = useLocation();
    return (
        <TransitionGroup className={['pageContainer', style.app].join(' ')}>
        <CSSTransition key={location.key} timeout={500} classNames="page" >
        {/* masukkan laman2 di sini */}
        <Routes location={location} >
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/detail' element={<DetailsPage/>}/>
            <Route path='/rencana' element={<RencanaPage/>}/>
            <Route path='/hasilrencana' element={<HasilRencanaPage/>}/>
            <Route path='/rekomendasi' element={<RekomendasiPage/>}/>
            <Route path='/reservasi' element={<ReservasiPage/>}/>
            <Route path='/user' element={<UserPage/>}/>
            <Route path='/testreview' element={<TestReview/>}/>
            <Route path='/nearbyarea' element={<TestNearbyArea/>}/>
            <Route path='/tourguide/signup' element={<DaftarGuidePage/>}/>
            <Route path='/renewdetail' element={<RenewDetailsPage/>}/>
            <Route path='/tourguide/login' element={<LoginGuidePage/>}/>
            <Route path='/tourguide/detail' element={<DetailsGuidePage/>}/>
        </Routes>
        </CSSTransition>
        </TransitionGroup>
    )
};

export default App;