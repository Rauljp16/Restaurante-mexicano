import Location from './Location';

function Contact() {
  const apiKey = 'TU_API_KEY';
  const mapCenter = { lat: 37.97, lng: -1.22 };
  const mapZoom = 14;
  return (
    <div className="mt-10 flex h-screen flex-col gap-10 border-2 border-black pt-10">
      <section className="relative h-1/3 bg-orange-400">
        <div className="h-full bg-white/30 text-2xl text-white backdrop-blur-sm">
          <p>Mexico</p>
          <p>Direccion</p>
          <p>Correo electronico</p>
          <p>Numero de telefono</p>
          <div>redes sociales</div>
        </div>
      </section>
      <section className="relative h-1/3 bg-zinc-900 p-4">
        <Location apiKey={apiKey} center={mapCenter} zoom={mapZoom} />
      </section>
    </div>
  );
}

export default Contact;
