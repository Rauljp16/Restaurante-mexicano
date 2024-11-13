import top from '../img/top.png';

function CardTop(props) {
  return (
    <div className=" relative flex h-96 w-full flex-col items-center justify-center gap-3 rounded-md bg-orange-400 p-6">
      <img className="absolute left-1 top-0 h-12 w-12 " src={top} />
      <img
        className=" object-left-center h-[70%] w-[90%] rounded-2xl object-cover"
        src={props.imagen}
      />
      <p className=" ">{props.precio}</p>
      <p className=" ">{props.descripcion}</p>
    </div>
  );
}

export default CardTop;
