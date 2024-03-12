import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=" fixed bottom-5 left-0 flex items-center  w-full h-20 ">
      <div className=" mx-auto rounded-2xl flex justify-around items-center w-2/4 h-2/3 cursor-pointer backdrop-blur-md bg-white/30 text-fuchsia-500 text-lg ">
        <Link
          to={'/'}
          className=" px-4 hover:text-white hover:underline underline-offset-4 decoration-2 decoration-fuchsia-500 hover:decoration-white transition-color duration-500"
        >
          Inicio
        </Link>
        Reservas
        <Link
          to={'/Carta'}
          className="px-4 hover:text-white hover:underline underline-offset-4 decoration-2 decoration-fuchsia-500 hover:decoration-white transition-color duration-500"
        >
          Carta
        </Link>
        <Link
          to={'/contacto'}
          className="px-4 hover:text-white hover:underline underline-offset-4 decoration-2 decoration-fuchsia-500 hover:decoration-white transition-color duration-500"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
