import catrina from '../img/catrina.png';
import taco from '../img/taco.jpg';
import comida1 from '../img/comida1.jpg';
import comida2 from '../img/comida2.jpg';
import comida3 from '../img/comida3.jpg';

function Body() {
  return (
    <div className="  flex flex-col items-center gap-6 h-screen w-full ">
      <img src={catrina} className="w-1/2" />
      <img src={comida1} className="w-1/2" />
      <img src={comida2} className="w-1/2" />
      <img src={comida3} className="w-1/2" />
      <div className="   flex bottom-24 p-4 w-1/2 h-auto backdrop-blur-sm bg-white/30 rounded-md text-white text-3xl  items-center leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti
        officia consequuntur blanditiis ea. Repellat, quasi rem eos atque sunt
        animi laboriosam suscipit natus voluptate praesentium? Quidem quisquam
        eligendi nostrum.
      </div>
      <img src={taco} className=" w-96 h-96 rounded-md" />
    </div>
  );
}

export default Body;
