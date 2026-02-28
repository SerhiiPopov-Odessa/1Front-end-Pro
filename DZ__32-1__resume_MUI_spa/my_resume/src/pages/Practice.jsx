
import Greenshop from '../img/greenshop.png';

const Practice = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700 text-center mb-2 font-semibold">First project</h1>
        <p className="text-xl text-amber-700 text-center mb-2">First practical assignment of Frontend Basics. HTML, CSS, JavaScript, SCSS, jQuery, SlickSliderJS, adaptive, download optimization</p>
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
