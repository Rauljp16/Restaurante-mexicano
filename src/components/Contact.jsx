import Location from './Location';

function Contact() {
  const apiKey = 'TU_API_KEY';
  const mapCenter = { lat: 37.97, lng: -1.22 };
  const mapZoom = 12;
  return (
    <div className="relative flex min-h-[calc(100vh-124px)] scale-95 flex-col-reverse flex-wrap items-center justify-center bg-[#FF8C42] pt-14 md:scale-100 lg:flex-row-reverse lg:p-20 lg:pb-16 ">
      <section className="flex h-[350px] w-full max-w-[450px] items-center md:h-96 md:w-[600px] md:max-w-[600px] lg:h-[500px] lg:w-1/2">
        <div className="h-full w-full px-6 py-4 md:p-8 lg:pl-0">
          <Location apiKey={apiKey} center={mapCenter} zoom={mapZoom} />
        </div>
      </section>
      <section className="flex h-fit w-full max-w-[450px] items-center md:h-96 md:w-[600px] md:max-w-[600px] lg:h-[500px] lg:w-1/2">
        <div className=" flex h-full w-full flex-col items-start px-6 pb-0 pt-4 text-2xl text-white md:px-8 md:pt-8 lg:pb-8 lg:pr-0">
          <h1
            className=" mb-3 text-center font-brush-script text-3xl font-bold uppercase text-white md:mb-6 md:text-5xl lg:mb-10"
            style={{ filter: 'drop-shadow(3px 4px 2px RGBA(31, 8, 26, 1))' }}
          >
            Taqueria Taqueando
          </h1>
          <div className="flex h-full w-full flex-col items-start pr-12">
            <h3 className="pt-3 text-base font-bold text-neutral-700 md:text-xl">
              Dirección:
            </h3>
            <p className=" text-xs md:text-base">
              Calle Jalisco #123, Colonia Guadalajara, Ciudad de México.
            </p>
            <h3 className="pt-3 text-base font-bold text-neutral-700 md:text-xl">
              Correo:
            </h3>

            <p className=" text-base">info@taqueriataqueando.com</p>
            <h3 className="pt-3 text-base font-bold text-neutral-700 md:text-xl">
              Telefono de contacto
            </h3>
            <p className=" text-xs md:text-base">+52 55 5555 5555 55</p>
            <h3 className="pt-3 text-base font-bold text-neutral-700 md:text-xl">
              Horario de atención:
            </h3>
            <p className=" text-xs md:text-base">
              Lunes a Domingo: 13:00 p.m. - 11:30 p.m.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
