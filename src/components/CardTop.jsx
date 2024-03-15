import top from '../img/top.png';

function CardTop(props) {
  return (
    <div className=" relative flex h-80 w-56 flex-col gap-3 rounded-md bg-orange-400 px-6">
      <img className="absolute left-0 z-10 h-10 w-10 " src={top} />
      <img className="relative mt-6 h-36 w-48" src={props.imagen} />
      <p className="relative ">{props.precio}</p>
      <p className="relative ">{props.descripcion}</p>
    </div>
  );
}

export default CardTop;
