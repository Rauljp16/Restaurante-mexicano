import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=" fixed bottom-5 left-0 flex h-20  w-full items-center ">
      <div className=" mx-auto flex h-2/3 w-2/4 cursor-pointer items-center justify-around rounded-2xl bg-white/30 text-lg text-fuchsia-500 backdrop-blur-md ">
        <Link
          to={'/'}
          className=" transition-color px-4 decoration-fuchsia-500 decoration-2 underline-offset-4 duration-500 hover:text-white hover:underline hover:decoration-white"
        >
          Inicio
        </Link>
        Reservas
        <Link
          to={'/Carta'}
          className="transition-color px-4 decoration-fuchsia-500 decoration-2 underline-offset-4 duration-500 hover:text-white hover:underline hover:decoration-white"
        >
          Carta
        </Link>
        <Link
          to={'/contacto'}
          className="transition-color px-4 decoration-fuchsia-500 decoration-2 underline-offset-4 duration-500 hover:text-white hover:underline hover:decoration-white"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
