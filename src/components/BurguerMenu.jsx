import { useState } from 'react';
import { Link } from 'react-router-dom';

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute  flex w-full flex-col items-end justify-center">
      <div className="hidden sm:block">
        <div className="mx-4 flex items-center text-lg">
          <Link to="/" className="mx-4">
            Inicio
          </Link>
          <Link to="/reservas" className="mx-4">
            Reservas
          </Link>
          <Link to="/carta" className="mx-4">
            Carta
          </Link>
          <Link to="/contacto" className="mx-4">
            Contacto
          </Link>
        </div>
      </div>
      <div className="block sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="relative z-30 h-8 w-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="animate-slide-down  fixed left-0 right-0 top-0 w-full rounded-b-lg border-b-2 border-black/10 bg-orange-400 py-8  sm:hidden">
          <div className="flex flex-col items-center text-lg ">
            <Link to="/" className="px-4 py-4 text-lg  hover:text-white ">
              Inicio
            </Link>
            <Link to="/reservas" className="px-4 py-4 hover:text-white">
              Reservas
            </Link>
            <Link to="/carta" className="px-4 py-4 hover:text-white">
              Carta
            </Link>
            <Link to="/contacto" className="px-4 py-4 hover:text-white">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurguerMenu;
