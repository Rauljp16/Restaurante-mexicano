import Location from './Location';

function Contact() {
  const apiKey = 'TU_API_KEY';
  const mapCenter = { lat: 37.97, lng: -1.22 };
  const mapZoom = 14;
  return (
    <div className="  flex h-screen w-full items-center justify-center gap-4">
      <Location apiKey={apiKey} center={mapCenter} zoom={mapZoom} />
      {/* <div className="w-1/2 p-2 "></div> */}
      <div className=" flex h-96 w-1/2 flex-col items-center  justify-around rounded-md bg-white/30 p-2 text-2xl text-white backdrop-blur-sm">
        <p>Mexico</p>
        <p>Direccion</p>
        <p>Correo electronico</p>
        <p>Numero de telefono</p>
        <div>redes sociales</div>
      </div>
    </div>
  );
}

export default Contact;
