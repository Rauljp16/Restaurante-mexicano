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
      <Body>
        <Routes>
          <Route path="/" Component={Body} />
          <Route path="/Carta" Component={Menu} />
          <Route path="/contacto" Component={Contact} />
        </Routes>
      </Body>

      <Navbar />
    </>
  );
}

export default App;
