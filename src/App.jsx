import './App.css';
// import Header from './components/Header';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Routes className="h-full w-screen">
        <Route path="/" element={<Body />} />
        <Route path="/reservas" element={<Reservations />} />
        <Route path="/Carta" element={<Menu />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
