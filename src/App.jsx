import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import MaceTattooing from "../public/maceTattooing.jpg";
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Gallery from './Pages/Gallery.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="imgContainer">
        <img
          src={MaceTattooing}
          alt="Mace Tattooing black and grey candid shot"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div className="headerContainer">
        <h1 className="landingHeader">Mace Tattoo</h1>
      </div>
      <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
