import taco from '../img/taco.png';
import comida1 from '../img/comida1.jpg';
import comida2 from '../img/comida2.jpg';
import comida3 from '../img/comida3.jpg';
import tacoHome from '../img/tacoHome.png';
import decoration1 from '../img/decoration1.png';
import decoration2 from '../img/decoration2.png';
import fundador from '../img/fundador.jpg';
import CardTop from './CardTop';
import scroll from '../svg/scroll.svg';
import { useEffect } from 'react';
import { useState } from 'react';

function Body() {
  const [iconScroll, setIconScroll] = useState('visible-scroll');

  useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener('scroll', function () {
        let scroll = document.documentElement.scrollTop;
        if (scroll > 0) {
          setIconScroll('opacity-scroll');
        }
      });
    }
  }, []);

  return (
    <>
      <div className="absolute bottom-4 left-0 w-full">
        <img
          className={`${iconScroll} z-40 mx-auto h-24 w-24`}
          style={{
            filter: 'drop-shadow(3px 4px 2px RGBA(31, 8, 26, 1))',
          }}
          src={scroll}
          alt="svg scroll"
        ></img>
      </div>
      <div className="relative flex w-full flex-col">
        <section className="relative flex min-h-screen w-full flex-col items-center justify-evenly px-7 pb-36 pt-24 md:pb-16">
          <div className="absolute bottom-0 left-0 flex h-full w-full overflow-hidden">
            <img src={decoration2} className="w-1/2 object-cover" />
            <img src={decoration1} className="w-1/2 object-cover" />
          </div>
          <p
            className=" text-center font-brush-script text-7xl font-bold uppercase text-white lg:text-8xl"
            style={{ filter: 'drop-shadow(3px 4px 2px RGBA(31, 8, 26, 1))' }}
          >
            Taqueria Taqueando
          </p>
          <img
            src={tacoHome}
            className=""
            style={{
              filter: 'drop-shadow(20px 40px 16px RGBa(31, 8, 26, 0.8))',
            }}
          />
        </section>

        <section className=" relative flex w-full flex-col items-center justify-center gap-8 bg-gradient-to-t from-zinc-900 via-zinc-900 to-orange-400 to-80% px-7 pt-8">
          <p
            className="mx-10 mb-8 text-center font-brush-script text-7xl font-bold text-black"
            style={{ filter: 'drop-shadow(2px 2px 2px RGBA(192,38,211, 0.5)' }}
          >
            Drisfruta de los platos estrella
          </p>
          <p className=" mx-10 font-brush-script text-2xl text-white">
            ¡Te presentamos nuestros platos más vendidos!
            <br /> Cada bocado es una experiencia única, una explosión de
            sabores especialmente diseñada para ti
          </p>
          <div className="scrollbar z-10 flex w-full justify-between gap-6 overflow-x-auto px-6 pb-12 pt-20">
            <CardTop
              imagen={taco}
              precio="2.5 €"
              descripcion="Taco al estilo guacamole"
            />
            <CardTop
              imagen={comida1}
              precio="4 €"
              descripcion="Taco guacamole"
            />
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
          <img
            src={decoration1}
            className="absolute bottom-0 right-0 w-2/3 blur-[1.3px]"
          />
        </section>

        <section className="relative bg-orange-400">
          <div className="flex justify-center bg-zinc-900 px-6 py-10 md:p-14 lg:p-20 ">
            <img
              src={fundador}
              className=" w-[80%] rounded-lg md:w-[70%] lg:w-[60%]"
            />
          </div>
          <div className="pb-24 pt-10">
            <p className=" mb-4 mt-12 text-center font-brush-script text-7xl font-bold text-black">
              El legado de Pancho
            </p>
            <p className=" my-5 text-center font-bold">
              Un apasionado emprendedor culinario.{' '}
            </p>
            <p className="w full mx-auto max-w-[1000px] px-4 text-sm text-white">
              En el vibrante barrio de La Colonia, nació Pancho en una soleada
              mañana de mayo, envuelto en el aroma de las especias y la música
              callejera. <br />
              <br />
              Desde pequeño, su abuela le enseñó los secretos ancestrales de la
              cocina mexicana, cultivando en él un amor profundo por los sabores
              auténticos y las tradiciones culinarias. <br />
              <br />
              Con el coraje de un aventurero y el corazón de un apasionado,
              Pancho fundó la Taquería Taqueando en un viejo edificio restaurado
              en el corazón del barrio, un día soleado de septiembre. Bajo el
              sol radiante y entre las sombras de los edificios coloridos, las
              puertas de la Taquería Taqueando se abrieron por primera vez,
              dando la bienvenida a una multitud ansiosa de comensales
              hambrientos de autenticidad y sabor.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Body;
