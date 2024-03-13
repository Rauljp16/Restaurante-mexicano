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
      <section className=" relative flex h-screen w-full bg-blue-300">
        <img src={decoration2} className="absolute  w-1/4" />
        <img
          src={tacoHome}
          className="absolute left-1/2 top-1/2 w-2/5 -translate-x-1/2 -translate-y-1/3 transform"
        />
        <p className=" absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 transform text-center text-7xl  text-fuchsia-600">
          mexico
        </p>
        <img src={decoration1} className="absolute bottom-0 right-0 w-1/4" />
      </section>
      <img src={comida1} />
      <img src={comida2} />
      <img src={comida3} />
      <div className="   flex items-center bg-fuchsia-500/60 p-4 text-3xl leading-relaxed  text-white backdrop-blur-sm">
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
