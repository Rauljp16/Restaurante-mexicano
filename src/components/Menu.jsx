import CardCarta from './CardCarta';
import taco from '../img/taco.jpg';

function Menu() {
  return (
    <div className=" mt-16 flex w-full flex-col items-center border-4 border-red-700 p-2">
      <section className=" flex flex-wrap justify-around gap-x-1 border-4 border-pink-400 p-4">
        <CardCarta imagen={taco} precio="2.5 €" descripcion="Taco guacamole" />
        <CardCarta imagen={taco} precio="2.5 €" descripcion="Taco guacamole" />
        <CardCarta imagen={taco} precio="2.5 €" descripcion="Taco guacamole" />
        <CardCarta imagen={taco} precio="2.5 €" descripcion="Taco guacamole" />
        <CardCarta imagen={taco} precio="2.5 €" descripcion="Taco guacamole" />
        <CardCarta imagen={taco} precio="2.5 €" descripcion="Taco guacamole" />
        <CardCarta imagen={taco} precio="2.5 €" descripcion="Taco guacamole" />
        <CardCarta imagen={taco} precio="2.5 €" descripcion="Taco guacamole" />
      </section>
    </div>
  );
}

export default Menu;
