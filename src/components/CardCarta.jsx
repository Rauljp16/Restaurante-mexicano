function CardCarta(props) {
  return (
    <div className="relative flex h-52 w-40 flex-col items-center justify-center text-sm text-white">
      <div className="absolute bottom-0 h-3/5 w-full rounded-lg bg-zinc-900 "></div>
      <img
        className="relative h-24 w-24 rounded-full bg-white"
        src={props.imagen}
      ></img>
      <div className="relative">{props.precio}</div>
      <div className="relative">{props.descripcion}</div>
      <div className="relative">{props.descripcion}</div>
    </div>
  );
}

export default CardCarta;
