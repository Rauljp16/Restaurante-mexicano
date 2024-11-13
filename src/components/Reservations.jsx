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
    <section className="relative flex flex-col justify-between overflow-hidden bg-[#FF8C42] px-10 pt-32">
      <div className="relative mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-zinc-900/90 p-6 shadow-2xl md:p-8">
          <h2 className="mb-6 text-3xl font-bold text-orange-600">
            Reserva tu mesa en Taqueria Taqueando 🌮
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Fecha
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateFormData('date', e.target.value)}
                  className="w-full rounded-lg border border-orange-200 p-3"
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
                  className="w-full rounded-lg border border-orange-200 p-3"
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

            <div className="grid gap-6 md:grid-cols-2">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 text-2xl text-white"
                  >
                    <span className="pb-2 text-3xl">-</span>
                  </button>
                  <span className="w-12 text-center text-2xl font-bold text-orange-600">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 text-white"
                  >
                    <span className="pb-2 text-3xl">+</span>
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
                  className="w-full rounded-lg border border-orange-200 p-3"
                >
                  {occasions.map((occasion) => (
                    <option key={occasion} value={occasion}>
                      {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="w-full rounded-lg border border-orange-200 p-3"
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
                  className="w-full rounded-lg border border-orange-200 p-3"
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
                className="w-full rounded-lg border border-orange-200 p-3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-4 py-3 font-bold text-white transition duration-300 hover:bg-orange-600"
            >
              ¡Reservar ahora!
            </button>
          </form>
        </div>

        <div className="mt-6 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur">
          <div className="flex flex-wrap items-center justify-between text-orange-600">
            {['Fecha', 'Hora', 'Personas', 'Ocasión'].map((label, index) => (
              <div
                key={index}
                className="mb-2 mr-4 flex items-center space-x-2"
              >
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
    </section>
  );
}

export default Reservations;
