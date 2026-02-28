
import Greenshop from '../img/swapithunk.png';

const SwapiThunk = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700 text-center mb-2 font-semibold">SWAPI Project</h1>
        <p className="text-xl text-amber-700 text-center mb-2">
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
