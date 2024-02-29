import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=" sticky border-2 flex items-center w-full h-20 ">
      <div className=" mx-auto rounded-2xl flex justify-around items-center text-white w-2/4 h-2/3 cursor-pointer backdrop-blur-sm bg-white/30">
        <Link to={'/'}>Inicio</Link>
        Reservas
        <Link to={'/Carta'}>Carta</Link>
        <Link to={'/contacto'}>Contacto</Link>
      </div>
    </div>
  );
}

export default Navbar;
