import taco from '../img/taco.jpg';
import comida1 from '../img/comida1.jpg';
import comida2 from '../img/comida2.jpg';
import comida3 from '../img/comida3.jpg';
import tacoHome from '../img/tacoHome.png';
import decoration1 from '../img/decoration1.png';
import decoration2 from '../img/decoration2.png';
import decoration3 from '../img/decoration3.png';
import fundador from '../img/fundador.jpg';
import CardTop from './CardTop';

function Body() {
  return (
    <div className="relative flex w-full flex-col">
      <section className="relative flex h-screen w-full flex-col items-center gap-20 bg-orange-400">
        <img src={decoration2} className="absolute left-0 top-0 w-2/3 " />
        <p
          className="pt-20 text-center font-brush-script text-6xl font-bold uppercase text-fuchsia-600"
          style={{ filter: 'drop-shadow(3px 4px 2px RGBA(31, 8, 26, 1))' }}
        >
          Taqueria Taqueando
        </p>
        <img
          src={tacoHome}
          className=" w-5/6 "
          style={{ filter: 'drop-shadow(20px 40px 16px RGBa(31, 8, 26, 0.8))' }}
        />
        <img src={decoration1} className=" absolute bottom-0 right-0 w-2/3 " />
      </section>

      <section className=" bg-zinc-900">
        <p
          className=" font-brush-script font-bold text-orange-400"
          style={{ filter: 'drop-shadow(2px 2px 2px RGBA(192,38,211, 0.5)' }}
        >
          Drisfruta de los platos estrella
        </p>
        <p className=" text-white">
          Te presentamos nuestros platos más vendidos.
          <br /> Una explosión de sabores en cada bocado.
        </p>
        <div className="  flex  text-white">
          <CardTop
            imagen={taco}
            precio="2.5 €"
            descripcion="Taco sl estilo guacamole"
          />
          {/* <CardTop imagen={comida1} precio="4 €" descripcion="Taco guacamole" />
          <CardTop
            imagen={comida2}
            precio="5 €"
            descripcion="Tortita con nachos"
          />
          <CardTop
            imagen={comida3}
            precio="4.5 €"
            descripcion="Ensalada de chinga"/>*/}
        </div>
        <img src={decoration1} className="" />
      </section>

      <section className="relative bg-orange-400 ">
        <div className="  rounded-b-md bg-zinc-900 p-4">
          <img src={fundador} className=" " />
        </div>
        <div className="">
          <p className=" font-brush-script  font-bold text-black">
            El legado de Pancho!
          </p>
          <p className=" font-bold">Un apasionado emprendedor culinario. </p>
          <p className="  text-white">
            En el vibrante barrio de La Colonia, nació Pancho en una soleada
            mañana de mayo, envuelto en el aroma de las especias y la música
            callejera. <br />
            <br />
            Desde pequeño, su abuela le enseñó los secretos ancestrales de la
            cocina mexicana, cultivando en él un amor profundo por los sabores
            auténticos y las tradiciones culinarias. <br />
            <br />
            Con el coraje de un aventurero y el corazón de un apasionado, Pancho
            fundó la Taquería Taqueando en un viejo edificio restaurado en el
            corazón del barrio, un día soleado de septiembre. Bajo el sol
            radiante y entre las sombras de los edificios coloridos, las puertas
            de la Taquería Taqueando se abrieron por primera vez, dando la
            bienvenida a una multitud ansiosa de comensales hambrientos de
            autenticidad y sabor.
          </p>
        </div>
        <img src={decoration3} className="absolute bottom-0 w-2/3" />
      </section>
    </div>
  );
}

export default Body;
