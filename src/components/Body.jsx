import taco from '../img/taco.jpg';
import comida1 from '../img/comida1.jpg';
import comida2 from '../img/comida2.jpg';
import comida3 from '../img/comida3.jpg';
import tacoHome from '../img/tacoHome.png';
import decoration1 from '../img/decoration1.png';
import decoration2 from '../img/decoration2.png';
import fundador from '../img/fundador.jpg';
import CardTop from './CardTop';

function Body() {
  return (
    <div className="relative flex w-full flex-col">
      <section className="relative flex h-screen w-full flex-col items-center justify-center gap-20 bg-orange-400">
        <img src={decoration2} className="absolute left-0 top-0 w-3/5 " />
        <img src={decoration1} className=" absolute bottom-4 right-0 w-4/5 " />
        <p
          className=" text-center font-brush-script text-9xl font-bold uppercase text-white"
          style={{ filter: 'drop-shadow(3px 4px 2px RGBA(31, 8, 26, 1))' }}
        >
          Taqueria Taqueando
        </p>
        <img
          src={tacoHome}
          className=" w-4/6 max-w-[550px]"
          style={{ filter: 'drop-shadow(20px 40px 16px RGBa(31, 8, 26, 0.8))' }}
        />
      </section>

      <section className=" relative flex h-screen w-full flex-col items-center justify-center gap-8 bg-gradient-to-t from-zinc-900 via-zinc-900 to-orange-400 to-80% pt-8 ">
        <p
          className="mx-10 mb-8 text-center font-brush-script text-7xl font-bold text-black"
          style={{ filter: 'drop-shadow(2px 2px 2px RGBA(192,38,211, 0.5)' }}
        >
          Drisfruta de los platos estrella
        </p>
        <p className=" mx-10 font-brush-script text-2xl text-white">
          ¡Te presentamos nuestros platos más vendidos!
          <br /> Cada bocado es una experiencia única, una explosión de sabores
          especialmente diseñada para ti
        </p>
        <div className=" z-10 my-20 flex justify-between gap-8 px-8  text-white ">
          <CardTop
            imagen={taco}
            precio="2.5 €"
            descripcion="Taco al estilo guacamole"
          />
          <CardTop imagen={comida1} precio="4 €" descripcion="Taco guacamole" />
          <CardTop
            imagen={comida2}
            precio="5 €"
            descripcion="Tortita con nachos"
          />
          <CardTop
            imagen={comida3}
            precio="4.5 €"
            descripcion="Ensalada de chinga"
          />
        </div>
        <img src={decoration1} className="absolute bottom-0 right-0 w-2/3" />
      </section>

      <section className="relative bg-orange-400 ">
        <div className="flex justify-center rounded-b-lg bg-zinc-900 p-20">
          <img src={fundador} className="w-[70%] rounded-lg" />
        </div>
        <div className="">
          <p className=" mb-4 mt-12 text-center font-brush-script text-7xl font-bold text-black">
            El legado de Pancho!
          </p>
          <p className=" my-5 text-center font-bold">
            Un apasionado emprendedor culinario.{' '}
          </p>
          <p className="px-4 text-sm text-white">
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
      </section>
    </div>
  );
}

export default Body;
