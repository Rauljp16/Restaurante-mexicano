import Location from './Location';

function Contact() {
  const apiKey = 'TU_API_KEY';
  const mapCenter = { lat: 37.97, lng: -1.22 };
  const mapZoom = 14;
  return (
    <div className="relative flex  flex-col items-center ">
      <section className=" mt-24 h-56 w-full px-4">
        <Location apiKey={apiKey} center={mapCenter} zoom={mapZoom} />
      </section>
      <section className="relative mt-12 h-2/4  px-4">
        <div className=" flex h-full flex-col items-start text-2xl text-black ">
          <h1
            className=" mb-2 font-brush-script text-4xl font-bold uppercase text-white"
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
