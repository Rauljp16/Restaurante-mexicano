import BurgerMenu from './BurguerMenu';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=" absolute h-14 ">
      <div className=" fixed left-0 right-0 top-0 z-20 flex h-14 w-full items-center justify-end  bg-orange-400/80 p-4 ">
        <div>
          <Link to="/" className=" hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-16 text-black"
            >
              <path
                fill="currentColor"
                d="M256 97c-7.5 0-16.28 6.144-25.512 19.992c-2.506 3.76-4.983 8.018-7.422 12.678c4.796 1.746 9.125 4.077 13.098 6.152C243.984 139.908 250.51 143 256 143c5.51 0 12.03-3.075 19.844-7.145c3.98-2.072 8.31-4.4 13.107-6.152c-2.443-4.673-4.926-8.943-7.438-12.71C272.28 103.142 263.5 97 256 97m-40.695 49.168a334.764 334.764 0 0 0-5.15 12.848c10.323.362 18.754 5.016 26.01 8.806C243.984 171.908 250.508 175 256 175c5.51 0 12.03-3.075 19.844-7.145c7.26-3.78 15.686-8.428 26.004-8.83a331.706 331.706 0 0 0-5.14-12.826c-3.757 1.2-7.907 3.2-12.548 5.618c-7.755 4.04-16.804 9.182-28.16 9.182c-11.374 0-20.42-5.176-28.17-9.225c-4.64-2.423-8.78-4.418-12.525-5.607zm-7.018 30.828c-1.15.037-2.794.353-4.723.867c-14.73 45.123-26.11 100.996-33.892 146.918C197.62 328.896 226.806 331 256 331c29.194 0 58.382-2.105 86.328-6.22c-7.786-45.95-19.177-101.865-33.92-147.003c-1.875-.467-3.48-.75-4.64-.78c-5.443-.14-11.853 2.782-19.608 6.82c-7.755 4.04-16.804 9.183-28.16 9.183c-11.374 0-20.42-5.176-28.17-9.225c-7.75-4.048-14.134-6.95-19.543-6.78zm-38.394 55.065c-30.435 5.178-57.67 12.973-80.02 22.66c-20.718 8.976-37.194 19.58-48.195 30.712a260.664 260.664 0 0 0 19.884 9.81c36.414-16.12 70.022-28.162 102.245-36.146c1.912-8.998 3.946-18.04 6.086-27.035zm172.214 0c2.14 8.996 4.174 18.038 6.086 27.036c32.223 7.984 65.83 20.026 102.245 36.146a260.664 260.664 0 0 0 19.884-9.81c-11-11.133-27.477-21.736-48.195-30.713c-22.35-9.687-49.585-17.482-80.02-22.66zm-182.252 46.315c-23.618 6.458-48.228 15.2-74.527 26.227c20.54 7.208 43.003 12.976 66.584 17.263c2.334-13.787 4.972-28.437 7.943-43.49m192.29 0c2.97 15.053 5.61 29.703 7.943 43.49c23.58-4.287 46.043-10.055 66.584-17.263c-26.3-11.026-50.91-19.768-74.527-26.227M30.533 299.89c-2.496 4.48-4.14 8.977-4.945 13.503l7.9-11.852a233.85 233.85 0 0 1-2.955-1.65zm450.934 0a227.07 227.07 0 0 1-2.955 1.65l7.9 11.853c-.804-4.526-2.45-9.024-4.945-13.502zM57 313.024v17.252l8.996-13.494A316.45 316.45 0 0 1 57 313.025zm398 0a319.403 319.403 0 0 1-8.996 3.758L455 330.276zM39 325.725l-8.975 13.46c2.23 4.2 5.218 8.382 8.975 12.55zm434 0v26.01c3.757-4.168 6.744-8.35 8.975-12.55zm-381.02.283l8.9 44.488l26.292-35.057c-12.094-2.723-23.852-5.868-35.192-9.432zm328.04 0c-11.34 3.564-23.098 6.71-35.192 9.43l26.293 35.058l8.9-44.488zm-344.584 9.064l-19.948 29.92l-2.83-.857c8.87 6.755 19.77 13.173 32.387 18.982zm361.128 0l-9.61 48.045c12.617-5.81 23.517-12.227 32.388-18.982l-2.83.857zm-275.572 6.785l32.768 65.536l46.867-58.582c-26.987-.63-53.81-2.925-79.635-6.953zm190.016 0c-25.824 4.028-52.648 6.322-79.635 6.954l46.867 58.583l32.768-65.536zM142.46 345.05l-35.26 47.012c19.772 6.996 42.413 12.664 67.075 16.616zm227.08 0l-31.815 63.628c24.662-3.952 47.303-9.62 67.074-16.616l-35.26-47.01zM256 358.407l-43.852 54.815A538.749 538.749 0 0 0 256 415c14.992 0 29.65-.618 43.852-1.78z"
              ></path>
            </svg>
          </Link>
        </div>
        <BurgerMenu />
      </div>
    </div>
  );
}

export default Navbar;
