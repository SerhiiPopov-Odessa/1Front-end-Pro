
import Greenshop from '../img/greenshop.png';

const Practice = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700/75 text-center mb-4 font-semibold bg-amber-300 rounded-2xl px-8">First project</h1>
        <p className="text-xl text-amber-700/90 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4 rounded-2xl mb-4">First practical assignment of Frontend Basics. HTML, CSS, JavaScript, SCSS, jQuery, SlickSliderJS, adaptive, download optimization</p>
        <div>
          <a href="https://serhiipopov-odessa.github.io/Greenshop_NEW/" target="_blank" rel="noopener noreferrer">
            <img  src={Greenshop} alt="Greenshop" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Practice;
