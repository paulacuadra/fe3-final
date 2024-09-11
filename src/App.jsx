import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Navigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ContextGlobal } from './Components/utils/global.context';


function App() {
  const {state, dispatch} = useContext(ContextGlobal);
  return (
    <div className={state.theme === 'light' ? 'light' : 'dark'}>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dentist/:id" element={<Detail />} />
      <Route path="/favs" element={<Favs />} />
    </Routes>
    <Footer />
  </Router>
  </div>
  );
}

export default App;
