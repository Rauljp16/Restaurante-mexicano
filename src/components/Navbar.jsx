import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=" fixed z-50  flex   h-20 w-1/2  ">
      <div className="absolute flex h-16 w-full cursor-pointer items-center justify-around text-xl font-bold text-fuchsia-500 ">
        <Link
          to={'/'}
          className=" transition-color px-4 decoration-fuchsia-500 decoration-2 underline-offset-4 duration-300 hover:text-white hover:underline hover:decoration-white"
        >
          Inicio
        </Link>
        Reservas
        <Link
          to={'/Carta'}
          className="transition-color px-4 decoration-fuchsia-500 decoration-2 underline-offset-4 duration-300 hover:text-white hover:underline hover:decoration-white"
        >
          Carta
        </Link>
        <Link
          to={'/contacto'}
          className="transition-color px-4 decoration-fuchsia-500 decoration-2 underline-offset-4 duration-300 hover:text-white hover:underline hover:decoration-white"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
