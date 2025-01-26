import Location from './Location';

function Contact() {
  const apiKey = 'TU_API_KEY';
  const mapCenter = { lat: 37.97, lng: -1.22 };
  const mapZoom = 12;
  return (
    <div className="relative flex min-h-[calc(100vh-124px)] scale-95 flex-row-reverse flex-wrap justify-center bg-[#FF8C42] px-4 pt-6 md:scale-100 lg:p-20 lg:pb-8">
      <section className="flex aspect-square w-1/2 items-center object-cover">
        <div className="h-[70%] w-full p-6">
          <Location apiKey={apiKey} center={mapCenter} zoom={mapZoom} />
        </div>
      </section>
      <section className="relative flex w-1/2 items-center">
        <div className=" flex h-[70%] flex-col justify-between p-6 text-2xl text-white">
          <h1
            className=" mb-2 text-center font-brush-script text-5xl font-bold uppercase text-white"
            style={{ filter: 'drop-shadow(3px 4px 2px RGBA(31, 8, 26, 1))' }}
          >
            Taqueria Taqueando
          </h1>
          <h1 className=" text-xl font-bold">Dirección:</h1>
          <p className="text-base">
            Calle Jalisco #123, Colonia Guadalajara, Ciudad de México.
          </p>
          <h1 className=" text-xl font-bold">Correo:</h1>

          <p className=" text-base">info@taqueriataqueando.com</p>
          <h1 className=" text-xl font-bold">Telefono de contacto</h1>
          <p className="text-base">+52 55 5555 5555 55</p>
          <h1 className=" text-xl font-bold">Horario de atención:</h1>
          <p className="text-base">Lunes a Domingo: 13:00 p.m. - 11:30 p.m.</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
