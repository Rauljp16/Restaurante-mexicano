import taco from '../img/taco.jpg';
// import comida1 from '../img/comida1.jpg';
// import comida2 from '../img/comida2.jpg';
// import comida3 from '../img/comida3.jpg';
import tacoHome from '../img/tacoHome.png';
import decoration1 from '../img/decoration1.png';
import decoration2 from '../img/decoration2.png';
import decoration4 from '../img/decoration4.png';
import fundador from '../img/fundador.jpg';
import CardTop from './CardTop';

function Body() {
  return (
    <div className="relative flex w-full flex-col">
      <section className="relative flex h-screen w-full flex-col items-center gap-20 bg-orange-400">
        <img src={decoration2} className="absolute left-0 top-0 w-3/5 " />
        <img src={decoration1} className=" absolute bottom-4 right-0 w-4/5 " />
        <p
          className="pt-20 text-center font-brush-script text-7xl font-bold uppercase text-white"
          style={{ filter: 'drop-shadow(3px 4px 2px RGBA(31, 8, 26, 1))' }}
        >
          Taqueria Taqueando
        </p>
        <img
          src={tacoHome}
          className=" w-5/6 "
          style={{ filter: 'drop-shadow(20px 40px 16px RGBa(31, 8, 26, 0.8))' }}
        />
      </section>

      <section className=" relative flex h-screen w-full flex-col items-center justify-center gap-8 bg-gradient-to-t from-zinc-900 via-zinc-900 to-orange-400 to-80% pt-8 ">
        <p
          className="mx-10 text-center font-brush-script text-5xl font-bold text-black"
          style={{ filter: 'drop-shadow(2px 2px 2px RGBA(192,38,211, 0.5)' }}
        >
          Drisfruta de los platos estrella
        </p>
        <p className=" mx-10 font-brush-script text-xl text-white">
          ¡Te presentamos nuestros platos más vendidos!
          <br /> Cada bocado es una experiencia única, una explosión de sabores
          especialmente diseñada para ti.
        </p>
        <div className=" z-10 flex w-5/6 text-white shadow-lg shadow-orange-900">
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
        <img src={decoration1} className="absolute bottom-0 right-0 w-2/3" />
      </section>

      <section className="relative bg-orange-400 ">
        <div className="  rounded-b-lg bg-zinc-900 p-6 pt-10">
          <img src={fundador} className="rounded-lg" />
        </div>
        <div className="">
          <p className=" my-4 text-center font-brush-script text-5xl font-bold text-black">
            El legado de Pancho!
          </p>
          <p className=" my-3 text-center font-bold">
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
      <footer className=" relative mt-4 flex h-44 w-full flex-col justify-center gap-4 bg-zinc-900 ">
        <img
          src={decoration4}
          className=" absolute h-full w-full opacity-30 "
        />

        <div className=" w-full"></div>
        <p className=" pl-4 text-orange-400">Siguenos</p>
        <div className="flex  w-52 gap-5 fill-white pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=" w-full rounded-full bg-orange-400"
          >
            <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm4 7.278V4.5h-2.286c-2.1 0-3.428 1.6-3.428 3.889v1.667H8v2.777h2.286V19.5h2.857v-6.667h2.286L16 10.056h-2.857V8.944c0-1.11.572-1.666 1.714-1.666H16z " />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=" w-full rounded-full bg-orange-400"
          >
            <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm3.193 7c-1.586 0-2.872 1.243-2.872 2.777 0 .217.025.43.074.633a8.251 8.251 0 0 1-5.92-2.902c-.247.41-.389.887-.389 1.397 0 .963.507 1.813 1.278 2.311a2.94 2.94 0 0 1-1.301-.348v.036c0 1.345.99 2.467 2.304 2.723a2.98 2.98 0 0 1-1.298.047c.366 1.103 1.427 1.906 2.683 1.928a5.889 5.889 0 0 1-3.567 1.19c-.231 0-.46-.014-.685-.04A8.332 8.332 0 0 0 9.903 18c5.283 0 8.172-4.231 8.172-7.901 0-.12-.002-.24-.008-.36A5.714 5.714 0 0 0 19.5 8.302a5.869 5.869 0 0 1-1.65.437 2.8 2.8 0 0 0 1.263-1.536 5.87 5.87 0 0 1-1.824.674A2.915 2.915 0 0 0 15.193 7z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=" w-full rounded-full bg-orange-400"
          >
            <path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=" w-full rounded-full bg-orange-400"
          >
            <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=" w-full rounded-full bg-orange-400"
          >
            <path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0Zm3.1623 4h-2.7508v10.9209a2.3324 2.3324 0 0 1-3.0455 2.2209 2.3324 2.3324 0 0 1 1.4129-4.4459V9.8862a5.0812 5.0812 0 0 0-5.7481 5.5912 5.0805 5.0805 0 0 0 3.802 4.3668 5.0818 5.0818 0 0 0 5.423-2.0286c.5899-.8501.9062-1.86.9065-2.8947V9.3345A6.5666 6.5666 0 0 0 19 10.5614V7.83a3.796 3.796 0 0 1-2.0944-.6295 3.8188 3.8188 0 0 1-1.6852-2.5075 3.7856 3.7856 0 0 1-.058-.693Z" />
          </svg>
        </div>
      </footer>
    </div>
  );
}

export default Body;
