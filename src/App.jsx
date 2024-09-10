import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Navigate } from 'react-router-dom';


function App() {
  return (
    
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

  );
}

export default App;
