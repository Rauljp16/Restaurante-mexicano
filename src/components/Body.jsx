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
      <footer className=" relative mt-6 flex w-full flex-col justify-center gap-4 bg-zinc-900">
        <img
          src={decoration4}
          className=" absolute h-full w-full opacity-30 "
        />
        <div className="mx-4 mt-4 flex gap-4 font-brush-script">
          <div className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-14 text-orange-400"
            >
              <path
                fill="currentColor"
                d="M256 97c-7.5 0-16.28 6.144-25.512 19.992c-2.506 3.76-4.983 8.018-7.422 12.678c4.796 1.746 9.125 4.077 13.098 6.152C243.984 139.908 250.51 143 256 143c5.51 0 12.03-3.075 19.844-7.145c3.98-2.072 8.31-4.4 13.107-6.152c-2.443-4.673-4.926-8.943-7.438-12.71C272.28 103.142 263.5 97 256 97m-40.695 49.168a334.764 334.764 0 0 0-5.15 12.848c10.323.362 18.754 5.016 26.01 8.806C243.984 171.908 250.508 175 256 175c5.51 0 12.03-3.075 19.844-7.145c7.26-3.78 15.686-8.428 26.004-8.83a331.706 331.706 0 0 0-5.14-12.826c-3.757 1.2-7.907 3.2-12.548 5.618c-7.755 4.04-16.804 9.182-28.16 9.182c-11.374 0-20.42-5.176-28.17-9.225c-4.64-2.423-8.78-4.418-12.525-5.607zm-7.018 30.828c-1.15.037-2.794.353-4.723.867c-14.73 45.123-26.11 100.996-33.892 146.918C197.62 328.896 226.806 331 256 331c29.194 0 58.382-2.105 86.328-6.22c-7.786-45.95-19.177-101.865-33.92-147.003c-1.875-.467-3.48-.75-4.64-.78c-5.443-.14-11.853 2.782-19.608 6.82c-7.755 4.04-16.804 9.183-28.16 9.183c-11.374 0-20.42-5.176-28.17-9.225c-7.75-4.048-14.134-6.95-19.543-6.78zm-38.394 55.065c-30.435 5.178-57.67 12.973-80.02 22.66c-20.718 8.976-37.194 19.58-48.195 30.712a260.664 260.664 0 0 0 19.884 9.81c36.414-16.12 70.022-28.162 102.245-36.146c1.912-8.998 3.946-18.04 6.086-27.035zm172.214 0c2.14 8.996 4.174 18.038 6.086 27.036c32.223 7.984 65.83 20.026 102.245 36.146a260.664 260.664 0 0 0 19.884-9.81c-11-11.133-27.477-21.736-48.195-30.713c-22.35-9.687-49.585-17.482-80.02-22.66zm-182.252 46.315c-23.618 6.458-48.228 15.2-74.527 26.227c20.54 7.208 43.003 12.976 66.584 17.263c2.334-13.787 4.972-28.437 7.943-43.49m192.29 0c2.97 15.053 5.61 29.703 7.943 43.49c23.58-4.287 46.043-10.055 66.584-17.263c-26.3-11.026-50.91-19.768-74.527-26.227M30.533 299.89c-2.496 4.48-4.14 8.977-4.945 13.503l7.9-11.852a233.85 233.85 0 0 1-2.955-1.65zm450.934 0a227.07 227.07 0 0 1-2.955 1.65l7.9 11.853c-.804-4.526-2.45-9.024-4.945-13.502zM57 313.024v17.252l8.996-13.494A316.45 316.45 0 0 1 57 313.025zm398 0a319.403 319.403 0 0 1-8.996 3.758L455 330.276zM39 325.725l-8.975 13.46c2.23 4.2 5.218 8.382 8.975 12.55zm434 0v26.01c3.757-4.168 6.744-8.35 8.975-12.55zm-381.02.283l8.9 44.488l26.292-35.057c-12.094-2.723-23.852-5.868-35.192-9.432zm328.04 0c-11.34 3.564-23.098 6.71-35.192 9.43l26.293 35.058l8.9-44.488zm-344.584 9.064l-19.948 29.92l-2.83-.857c8.87 6.755 19.77 13.173 32.387 18.982zm361.128 0l-9.61 48.045c12.617-5.81 23.517-12.227 32.388-18.982l-2.83.857zm-275.572 6.785l32.768 65.536l46.867-58.582c-26.987-.63-53.81-2.925-79.635-6.953zm190.016 0c-25.824 4.028-52.648 6.322-79.635 6.954l46.867 58.583l32.768-65.536zM142.46 345.05l-35.26 47.012c19.772 6.996 42.413 12.664 67.075 16.616zm227.08 0l-31.815 63.628c24.662-3.952 47.303-9.62 67.074-16.616l-35.26-47.01zM256 358.407l-43.852 54.815A538.749 538.749 0 0 0 256 415c14.992 0 29.65-.618 43.852-1.78z"
              ></path>
            </svg>
          </div>
          <div>
            <h1 className="-ml-0.5 text-2xl font-bold text-orange-400">
              Taqueando
            </h1>
            <p className=" text-white"> Restaurante Mexicano</p>
          </div>
        </div>
        <p className="ml-4 text-orange-400">Siguenos:</p>
        <div className="flex h-16 w-full justify-center gap-4 ">
          <div className="flex h-10 w-10 items-center justify-center  rounded-full bg-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=" h-7 w-7  text-orange-400"
            >
              <path
                fill="currentColor"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
              ></path>
            </svg>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-7 w-7 text-orange-400"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              ></path>
            </svg>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-7 w-7 text-orange-400"
            >
              <path
                fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
              ></path>
            </svg>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="h-7 w-7 text-orange-400"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M530.014 112.667c43.666-.667 86.997-.334 130.328-.667c2.667 51 21 102.999 58.33 138.998c37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333c-19-8.667-36.665-19.667-53.998-31c-.333 97.332.334 194.665-.666 291.663c-2.667 46.666-18 93-44.998 131.332c-43.665 64-119.328 105.665-196.992 106.999c-47.664 2.666-95.329-10.334-135.994-34.333c-67.33-39.666-114.662-112.332-121.661-190.331c-.667-16.667-1-33.333-.334-49.666c6-63.333 37.332-123.999 85.997-165.332c55.33-47.999 132.66-70.999 204.99-57.332c.667 49.333-1.332 98.665-1.332 147.998c-33-10.667-71.664-7.667-100.663 12.333c-20.999 13.667-36.998 34.666-45.331 58.333c-7 17-5 35.666-4.667 53.666c8 54.666 60.664 100.665 116.662 95.665c37.332-.333 72.997-22 92.33-53.666c6.332-11 13.332-22.333 13.665-35.333c3.334-59.666 2-118.998 2.334-178.664c.333-134.332-.334-268.33.666-402.328"
              ></path>
            </svg>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=" h-7 w-7 text-orange-400"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Body;
