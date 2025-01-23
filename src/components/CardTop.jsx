import top from '../img/top.png';

function CardTop(props) {
  return (
    <div className=" relative flex h-80 w-64 min-w-64  flex-col items-center justify-between rounded-md bg-orange-400 p-4 text-white">
      <img className="absolute left-1 top-0 h-12 w-12 " src={top} />
      <div className="h-2/3 w-full overflow-hidden rounded-2xl">
        <img className="h-full w-full object-cover" src={props.imagen} />
      </div>
      <div className="flex h-1/3 w-full flex-col items-center justify-evenly">
        <p className=" ">{props.precio}</p>
        <p className=" text-center">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default CardTop;
