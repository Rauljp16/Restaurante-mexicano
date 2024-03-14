import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=" fixed bottom-5 left-0 z-50 flex  h-20 w-full  items-center">
      <div className=" mx-auto flex h-16 w-2/5 cursor-pointer items-center justify-around rounded-2xl border-2 border-white/10 bg-orange-400 text-xl font-bold text-fuchsia-500 ">
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
