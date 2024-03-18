import BurgerMenu from './BurguerMenu';

function Navbar() {
  return (
    <div className=" relative h-14 ">
      <div className=" fixed left-0 right-0 top-0 z-10 flex h-14 w-full cursor-pointer items-center justify-end  bg-orange-400/60 p-4 ">
        <BurgerMenu />
      </div>
    </div>
  );
}

export default Navbar;
