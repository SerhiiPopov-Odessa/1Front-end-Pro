
import weatherPNG from '../img/weather.png';
import sliderPNG from '../img/slider.png';

const VanilaJS = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700/75 text-center mb-4 font-semibold bg-amber-300 rounded-2xl px-8">Vanilla JS</h1>
        
        <p className="text-xl text-amber-700/90 font-semibold text-center bg-blue-400/50 w-fit mx-auto px-4 rounded-2xl mb-2">Weather (HTML CSS VanillaJS Fetch a JSON File API https://api.openweathermap.org)</p>
        
        <div className="mb-6 ">
          <a href="https://weather-mocha-zeta-35.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className=" rounded-3xl" src={weatherPNG} alt="weatherPNG" />
          </a>
        </div>

        <p className="text-xl text-amber-700/90 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4 rounded-2xl mb-1">Slider (HTML VanillaJS + CSS)</p>
        <div className="">
          <a href="https://slider-beta-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className=" rounded-3xl " src={sliderPNG} alt="sliderPNG" />
          </a>
        </div>
      </div>
    </>
  );
};

export default VanilaJS;
