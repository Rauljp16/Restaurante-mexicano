import './App.css';
// import Header from './components/Header';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Carta" element={<Menu />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
