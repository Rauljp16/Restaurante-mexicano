import { useState } from 'react';

function Menu() {
  const [categoriaActiva, setCategoriaActiva] = useState('tacos');

  const menu = {
    tacos: [
      {
        nombre: 'Taco al Pastor',
        descripcion: 'Cerdo marinado con piña',
        precio: 25,
      },
      {
        nombre: 'Taco de Bistec',
        descripcion: 'Carne de res asada',
        precio: 30,
      },
      {
        nombre: 'Taco de Pollo',
        descripcion: 'Pollo a la plancha',
        precio: 25,
      },
      {
        nombre: 'Taco de Pescado',
        descripcion: 'Pescado empanizado',
        precio: 35,
      },
    ],
    quesadillas: [
      {
        nombre: 'Quesadilla de Queso',
        descripcion: 'Queso Oaxaca derretido',
        precio: 40,
      },
      {
        nombre: 'Quesadilla de Chorizo',
        descripcion: 'Chorizo con queso',
        precio: 50,
      },
      {
        nombre: 'Quesadilla de Huitlacoche',
        descripcion: 'Huitlacoche con queso',
        precio: 55,
      },
    ],
    bebidas: [
      {
        nombre: 'Agua de Horchata',
        descripcion: 'Bebida de arroz y canela',
        precio: 25,
      },
      {
        nombre: 'Agua de Jamaica',
        descripcion: 'Bebida de flor de Jamaica',
        precio: 25,
      },
      { nombre: 'Cerveza', descripcion: 'Cerveza mexicana', precio: 35 },
    ],
    postres: [
      { nombre: 'Flan', descripcion: 'Flan casero con caramelo', precio: 40 },
      {
        nombre: 'Churros',
        descripcion: 'Churros con azúcar y canela',
        precio: 35,
      },
      {
        nombre: 'Pastel de Elote',
        descripcion: 'Pastel tradicional de maíz',
        precio: 45,
      },
    ],
  };

  return (
    <section className="relative flex min-h-[calc(100vh-124px)] w-full flex-col justify-center bg-[#FF8C42] pb-6 pt-16 md:px-10 md:pb-10 md:pt-24">
      <div className="relative mx-auto w-full max-w-4xl p-6">
        <div className=" rounded-2xl bg-slate-100/90 shadow-2xl">
          <div className="p-6">
            <h2 className="mb-6 text-xl font-bold text-orange-600 md:text-3xl">
              Nuestra Carta 🌮🌯🍹
            </h2>

            <div className="mb-6 flex flex-wrap gap-3">
              {Object.keys(menu).map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setCategoriaActiva(categoria)}
                  className={`rounded-full px-4 py-1 text-sm font-semibold transition duration-300 md:py-2 ${
                    categoriaActiva === categoria
                      ? 'bg-orange-500 text-white'
                      : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                  }`}
                >
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </button>
              ))}
            </div>

            <div className="scrollbar space-y-4 overflow-y-auto">
              {menu[categoriaActiva].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-orange-200 pb-2 last:border-b-0"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-orange-600">
                      {item.nombre}
                    </h3>
                    <p className="text-sm text-gray-600">{item.descripcion}</p>
                  </div>
                  <span className="text-lg font-bold text-orange-500">
                    ${item.precio}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-slate-100/90 p-2 shadow-lg backdrop-blur">
          <p className="text-center text-lg text-orange-600">
            ⭐ Prueba nuestras tapas estrella!!! ⭐
          </p>
        </div>
      </div>
    </section>
  );
}

export default Menu;
