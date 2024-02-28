import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=" flex items-center w-full h-16 bg-violet-600 ">
      <div className=" mx-auto border-zinc-50 rounded-2xl flex justify-around items-center text-zinc-300 w-1/3 h-2/3 cursor-pointer backdrop-blur-md bg-white/30">
        <Link to={'/'}>Inicio</Link>
        <Link to={'/Carta'}>Carta</Link>
        <Link to={'/contacto'}>Contacto</Link>
      </div>
    </div>
  );
}

export default Navbar;
