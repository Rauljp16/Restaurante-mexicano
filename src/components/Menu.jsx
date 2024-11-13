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
    <section className="relative overflow-hidden bg-[#FF8C42] px-10 pt-32">
      {/* Decorative background elements */}

      <div className="relative mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-slate-100/90 shadow-2xl">
          <div className="p-6 md:p-8">
            <h2 className="mb-6 text-3xl font-bold text-orange-600">
              Nuestra Carta 🌮🌯🍹
            </h2>

            {/* Categorías */}
            <div className="mb-6 flex flex-wrap gap-2">
              {Object.keys(menu).map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setCategoriaActiva(categoria)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                    categoriaActiva === categoria
                      ? 'bg-orange-500 text-white'
                      : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                  }`}
                >
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </button>
              ))}
            </div>

            {/* Lista de platillos */}
            <div className="space-y-6">
              {menu[categoriaActiva].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-orange-200 pb-4 last:border-b-0"
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

        {/* Información adicional */}
        <div className="mt-6 rounded-xl bg-slate-100/90 p-4 shadow-lg backdrop-blur">
          <p className="text-center text-orange-600">
            ⭐ Prueba nuestras tapas estrella!!! ⭐
          </p>
        </div>
      </div>
    </section>
  );
}

export default Menu;
