function CardCarta(props) {
  return (
    <div className="relative flex h-64 w-44 flex-col items-center justify-center ">
      <div className="absolute bottom-0 h-3/5 w-full rounded-lg bg-zinc-900"></div>
      <img
        className="relative h-28 w-28 rounded-full bg-white"
        src={props.imagen}
      ></img>
      <div className="relative text-white">{props.precio}</div>
      <div className="relative text-white">{props.descripcion}</div>
      <div className="relative text-white">{props.descripcion}</div>
    </div>
  );
}

export default CardCarta;
