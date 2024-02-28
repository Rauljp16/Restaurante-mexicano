import './App.css';
import Header from './Header';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Carta" element={<Menu />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Navbar />
    </>
  );
}

export default App;
