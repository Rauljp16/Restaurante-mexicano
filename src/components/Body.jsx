import taco from '../img/taco.jpg';
import comida1 from '../img/comida1.jpg';
import comida2 from '../img/comida2.jpg';
import comida3 from '../img/comida3.jpg';
import tacoHome from '../img/tacoHome.png';
import decoration1 from '../img/decoration1.png';
import decoration2 from '../img/decoration2.png';

function Body() {
  return (
    <div className=" flex w-full flex-col">
      <section className=" relative flex h-screen w-full bg-orange-400">
        <img src={decoration2} className="absolute  w-1/4 " />
        <img
          src={tacoHome}
          className="absolute left-1/2 top-1/2 w-2/5 -translate-x-1/2 -translate-y-1/3 transform"
        />
        <p className=" absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 transform text-center text-7xl  text-fuchsia-600">
          mexico
        </p>
        <img src={decoration1} className="absolute bottom-0 right-0 w-1/4" />
      </section>
      <section className=" flex h-96 w-full bg-zinc-800">
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
      <section className=" flex h-96 w-full bg-zinc-800">
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
