import Location from './Location';
import decoration4 from '../img/decoration4.png';

function Contact() {
  const apiKey = 'TU_API_KEY';
  const mapCenter = { lat: 37.97, lng: -1.22 };
  const mapZoom = 14;
  return (
    <div className="relative  flex h-screen flex-col items-center">
      <img src={decoration4} className="absolute bottom-0 h-72 w-full " />
      <section className=" mt-10 h-1/3 w-5/6">
        <Location apiKey={apiKey} center={mapCenter} zoom={mapZoom} />
      </section>
      <section className="relative mt-10 h-1/3 p-4 ">
        <div className="flex h-full flex-col items-start text-2xl text-black  ">
          <h1>Taqueria Taqueando</h1>
          <h1>Dirección:</h1>
          <p>Calle Jalisco #123, Colonia Guadalajara, Ciudad de México.</p>
          <p>info@taqueriataqueando.com</p>
          <p>Telefono de contacto:+52 55 5555 5555 55</p>
          <p>
            Horario de atención: Lunes a Viernes: 12:00 p.m. - 10:00 p.m.
            Sábados y Domingos: 11:00 a.m. - 11:00 p.m.
          </p>
          <div>redes sociales</div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
