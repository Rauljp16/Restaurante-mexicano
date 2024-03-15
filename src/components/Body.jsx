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
    <div className=" flex w-full flex-col">
      <section className=" relative flex h-screen w-full bg-orange-400">
        <img src={decoration2} className="absolute  left-0 top-0 w-2/6 " />
        <img
          src={tacoHome}
          className=" absolute left-1/3 top-80 w-96"
          style={{ filter: 'drop-shadow(40px 70px 30px RGBa(31, 8, 26, 0.8))' }}
        />
        <p
          className=" absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 transform text-center font-brush-script  text-9xl font-bold uppercase text-fuchsia-600"
          style={{ filter: 'drop-shadow(4px 4px 4px RGBA(31, 8, 26, 1))' }}
        >
          Taqueria Taqueando
        </p>
        <img src={decoration1} className="absolute bottom-0 right-0 w-2/6" />
      </section>

      <section className="relative flex h-screen w-full flex-col items-center  bg-zinc-900">
        <p
          className="relative top-32 w-2/4 text-center font-brush-script text-8xl font-bold text-orange-400"
          style={{ filter: 'drop-shadow(2px 2px 2px RGBA(192,38,211, 0.5)' }}
        >
          Drisfruta de los platos estrella
        </p>
        <p className="relative top-40 w-2/4 text-center text-white">
          Te presentamos nuestros platos más vendidos.
          <br /> Una explosión de sabores en cada bocado.
        </p>
        <div className=" absolute bottom-28 z-10 flex h-96 w-full items-center justify-around px-6 text-lg text-white">
          <CardTop
            imagen={taco}
            precio="2.5 €"
            descripcion="Taco sl estilo guacamole"
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
        <img src={decoration1} className="absolute bottom-0 right-0 w-2/6" />
      </section>

      <section className="relative  flex h-screen w-full gap-10 bg-orange-400 px-10 pb-40">
        <div className=" z-10 flex w-1/2 items-center rounded-b-md bg-zinc-900 p-4">
          <img src={fundador} className=" w-full " />
        </div>
        <div className="flex w-1/2 flex-col items-center gap-6 pt-20">
          <p className=" font-brush-script text-7xl font-bold text-black">
            El legado de Pancho!
          </p>
          <p className="text-2xl font-bold">
            Un apasionado emprendedor culinario.{' '}
          </p>
          <p className=" p-4 text-justify text-lg leading-loose text-white">
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
        <img
          src={decoration1}
          className=" absolute -bottom-20 left-20  w-2/5 rotate-90"
        />
      </section>

      {/*
      //
      //
      //
      //
      //
      */}

      <section className=" flex h-96 w-full bg-zinc-900">
        <div className="mx-14 flex w-1/2 items-center text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            blanditiis ducimus voluptatum animi est itaque commodi esse impedit
            provident cum, quibusdam quis voluptates non, consectetur et dolores
            dicta mollitia dolorum?
          </p>
        </div>
        <img src={comida2} className="w-1/2" />
      </section>
      <section className=" flex h-96 w-full bg-orange-400">
        <img src={comida1} className="w-1/2" />
        <div className="mx-14 flex w-1/2 items-center text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            blanditiis ducimus voluptatum animi est itaque commodi esse impedit
            provident cum, quibusdam quis voluptates non, consectetur et dolores
            dicta mollitia dolorum?
          </p>
        </div>
      </section>
      <section className=" flex h-96 w-full bg-zinc-900">
        <div className="mx-14 flex w-1/2 items-center text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            blanditiis ducimus voluptatum animi est itaque commodi esse impedit
            provident cum, quibusdam quis voluptates non, consectetur et dolores
            dicta mollitia dolorum?
          </p>
        </div>
        <img src={comida3} className="w-1/2" />
      </section>
      <div className="   flex items-center bg-orange-400 p-4 text-3xl leading-relaxed  text-white backdrop-blur-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti
        officia consequuntur blanditiis ea. Repellat, quasi rem eos atque sunt
        animi laboriosam suscipit natus voluptate praesentium? Quidem quisquam
        eligendi nostrum.
      </div>
      <img src={taco} />
    </div>
  );
}

export default Body;
