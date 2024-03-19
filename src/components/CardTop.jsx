import top from '../img/top.png';

function CardTop(props) {
  return (
    <div className=" relative flex h-96 w-72 flex-col gap-3 rounded-md bg-orange-400 px-6 pt-6">
      <img className="absolute left-1 top-0 h-10 w-10 " src={top} />
      <img className=" h-44 w-full" src={props.imagen} />
      <p className=" ">{props.precio}</p>
      <p className=" ">{props.descripcion}</p>
    </div>
  );
}

export default CardTop;
