import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import Header from './Components/Header.jsx';

import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Gallery from './Pages/Gallery.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
