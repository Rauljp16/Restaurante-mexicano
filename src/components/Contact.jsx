import maps from '../img/maps.png';

function Contact() {
  return (
    <div className=" h-screen  flex items-center w-full">
      <div className="w-1/2 p-2 ">
        <img className=" h-96 rounded-md" src={maps} />
      </div>
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
