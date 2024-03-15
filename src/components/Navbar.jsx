import { Link } from 'react-router-dom';
import BurgerMenu from './BurguerMenu';

function Navbar() {
  return (
    <div className=" relative h-14">
      <div className=" fixed left-0 right-0 top-0 z-10 flex h-14 w-full cursor-pointer items-center justify-end bg-orange-900/70 p-4 ">
        <BurgerMenu />
        <Link
          to={'/'}
          className=" transition-color decoration-fuchsia-500 decoration-2 underline-offset-4 duration-300 hover:text-white hover:underline hover:decoration-white"
        >
          Inicio
        </Link>
        Reservas
        <Link
          to={'/Carta'}
          className="transition-color decoration-fuchsia-500 decoration-2 underline-offset-4 duration-300 hover:text-white hover:underline hover:decoration-white"
        >
          Carta
        </Link>
        <Link
          to={'/contacto'}
          className="transition-color  decoration-fuchsia-500 decoration-2 underline-offset-4 duration-300 hover:text-white hover:underline hover:decoration-white"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
