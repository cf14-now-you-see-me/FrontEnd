import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// CSS dasar
import './assets/base.css';
import './assets/global.scss';

// komponen2 dasar
import NavBar from './components/NavBar/NavBar';
import App from './components/App/App';
import Footer from './components/Footer/Footer';

// masukkan aplikasi react
const root = ReactDOM.createRoot(document.getElementById('root'));

const qc = new QueryClient();

// isi app
root.render(
  <React.StrictMode>
    <QueryClientProvider client={qc}>
    <BrowserRouter>
      <NavBar/>
      <App/>
      <Footer/>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);