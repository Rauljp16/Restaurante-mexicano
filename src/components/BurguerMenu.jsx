import { useState } from 'react';
import { Link } from 'react-router-dom';

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" relative top-[3px] flex h-full w-full items-start justify-end md:top-3 ">
      <div className="hidden justify-end font-brush-script text-3xl font-bold sm:flex">
        <Link to="/" className="mx-4 hover:text-white">
          Inicio
        </Link>
        <Link to="/reservas" className="mx-4 hover:text-white">
          Reservas
        </Link>
        <Link to="/carta" className="mx-4 hover:text-white">
          Carta
        </Link>
        <Link to="/contacto" className="mx-4 hover:text-white">
          Contacto
        </Link>
      </div>
      <div
        className={`${
          isOpen
            ? ' opacity-1 fixed left-0 top-0 z-30 flex w-full  -translate-x-0 flex-col items-center gap-10 rounded-b-xl bg-orange-400 py-16 text-xl shadow-xl transition duration-700 sm:flex'
            : 'disabled: pointer-events-none fixed left-0 top-0 flex w-full translate-x-44 flex-col items-center gap-10 rounded-b-xl bg-orange-400 py-16 text-xl opacity-0 shadow-xl transition duration-700 sm:flex'
        }`}
      >
        <Link
          to="/"
          className="mx-4 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Inicio
        </Link>
        <Link
          to="/reservas"
          className="mx-4 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Reservas
        </Link>
        <Link
          to="/carta"
          className="mx-4 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Carta
        </Link>
        <Link
          to="/contacto"
          className="mx-4 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Contacto
        </Link>
      </div>
      <div className=" flex items-center justify-end sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="absolute right-0 z-30 h-8 w-8 "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                className="origin-center -rotate-180 transition duration-1000"
              ></path>
            ) : (
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                className="origin-center rotate-180 transition duration-1000"
              ></path>
            )}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BurguerMenu;
