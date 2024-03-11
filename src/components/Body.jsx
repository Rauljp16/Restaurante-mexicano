import taco from '../img/taco.jpg';
import comida1 from '../img/comida1.jpg';
import comida2 from '../img/comida2.jpg';
import comida3 from '../img/comida3.jpg';

function Body() {
  return (
    <div className=" relative top-14 flex flex-col items-center gap-16 w-full">
      <img src={comida1} />
      <img src={comida2} />
      <img src={comida3} />
      <div className="   flex p-4 backdrop-blur-sm bg-white/30 rounded-md text-white text-3xl  items-center leading-relaxed">
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
