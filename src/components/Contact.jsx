import maps from '../img/maps.png';

function Contact() {
  return (
    <div className="flex items-center justify-around flex-1 w-full">
      <div className=" p-2 w-1/2 h-1/2 ">
        <img className="w-full h-full rounded-md" src={maps} />
      </div>
      <div className=" flex flex-col items-center justify-around p-2 bg-zinc-800/95 w-1/2 h-96 rounded-md text-white text-2xl">
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
