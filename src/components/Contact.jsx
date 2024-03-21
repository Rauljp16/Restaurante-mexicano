import Location from './Location';
import decoration4 from '../img/decoration4.png';

function Contact() {
  const apiKey = 'TU_API_KEY';
  const mapCenter = { lat: 37.97, lng: -1.22 };
  const mapZoom = 14;
  return (
    <div className="relative  flex h-screen flex-col  ">
      <img src={decoration4} className="absolute bottom-0 h-72 w-full" />
      <section className="relative h-1/3">
        <div className="flex h-full flex-col items-center justify-around bg-zinc-900 text-2xl text-white">
          <p>Mexico</p>
          <p>Direccion</p>
          <p>Correo electronico</p>
          <p>Numero de telefono</p>
          <div>redes sociales</div>
        </div>
      </section>
      <section className=" h-1/2 ">
        <Location apiKey={apiKey} center={mapCenter} zoom={mapZoom} />
      </section>
    </div>
  );
}

export default Contact;
