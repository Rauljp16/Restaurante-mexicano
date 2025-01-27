import { useState } from 'react';

function Reservations() {
  const initialFormData = {
    date: new Date().toISOString().split('T')[0],
    time: '',
    guests: 0,
    name: '',
    email: '',
    phone: '',
    occasion: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const timeSlots = [
    '13:00',
    '14:00',
    '15:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
  const occasions = ['casual', 'cumpleaños', 'aniversario', 'reunión'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reserva enviada:', formData);
    alert('Reserva realizada correctamente');
    setFormData(initialFormData);
  };

  return (
    <section className="relative flex min-h-[calc(100vh-124px)] scale-95 flex-col justify-center bg-[#FF8C42] px-4 pt-6 md:scale-100 lg:pt-20">
      <div className="mx-auto w-full max-w-4xl scale-90">
        <div className="rounded-xl bg-zinc-900/90 p-6 shadow-2xl ">
          <h2 className="mb-4 text-center text-2xl font-bold text-orange-600 md:text-3xl">
            Reserva tu mesa en Taqueria Taqueando 🌮
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Fecha
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateFormData('date', e.target.value)}
                  className="w-full rounded-lg border border-orange-200 p-2 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Hora
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => updateFormData('time', e.target.value)}
                  className="w-full rounded-lg border border-orange-200 p-2 text-sm"
                  required
                >
                  <option value="">Selecciona la hora</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Número de personas
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() =>
                      updateFormData('guests', Math.max(1, formData.guests - 1))
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-200 text-xl text-white"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-xl font-bold text-orange-600">
                    {formData.guests}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      updateFormData(
                        'guests',
                        Math.min(10, formData.guests + 1)
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-200 text-xl text-white"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Tipo de ocasión
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) => updateFormData('occasion', e.target.value)}
                  className="w-full rounded-lg border border-orange-200 p-2 text-sm"
                >
                  <option value="">Selecciona la ocasión</option>
                  {occasions.map((occasion) => (
                    <option key={occasion} value={occasion}>
                      {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="w-full rounded-lg border border-orange-200 p-2 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full rounded-lg border border-orange-200 p-2 text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">
                Teléfono
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className="w-full rounded-lg border border-orange-200 p-2 text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className=" w-full rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white transition duration-300 hover:bg-orange-600"
            >
              ¡Reservar ahora!
            </button>
          </form>
          <div className=" mt-4 rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur">
            <div className=" flex w-fit flex-wrap items-center justify-start text-orange-600">
              {['Fecha', 'Hora', 'Personas', 'Ocasión'].map((label, index) => (
                <div key={index} className="flex w-72 items-center space-x-2">
                  <span className="font-semibold">{label}:</span>
                  <span>
                    {label === 'Fecha'
                      ? formData.date
                      : label === 'Hora'
                        ? formData.time || 'Pendiente'
                        : label === 'Personas'
                          ? formData.guests
                          : formData.occasion.charAt(0).toUpperCase() +
                            formData.occasion.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservations;
