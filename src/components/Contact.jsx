import Location from './Location';

function Contact() {
  const apiKey = 'TU_API_KEY';
  const mapCenter = { lat: 37.97, lng: -1.22 };
  const mapZoom = 14;
  return (
    <div className=" h-screen  flex items-center justify-center w-full gap-4">
      <Location apiKey={apiKey} center={mapCenter} zoom={mapZoom} />
      {/* <div className="w-1/2 p-2 "></div> */}
      <div className=" flex flex-col items-center justify-around p-2  w-1/2 h-96 rounded-md text-white text-2xl backdrop-blur-sm bg-white/30">
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
