
import Greenshop from '../img/swapithunk.png';

const SwapiThunk = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700/75 text-center mb-4 font-semibold bg-amber-300 rounded-2xl px-8">SWAPI Project</h1>
        <p className="text-xl text-amber-700/90 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4 rounded-2xl  mb-4">
          Fetch data from SWAPI using React Redux-Thunk.
        </p>
        <div>
          <a href="https://dz301swapireactreduxthunk.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Greenshop} alt="swapithunk.png" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SwapiThunk;
