import unit_testPNG from "../img/unit_test.png";
import videoFile from "../img/spec.cy.js.mp4";

const Testing = () => {
  return (
    <div className="flex flex-col items-center justify-start p-4">
      <h1
        className="text-xl text-fuchsia-700/75 text-center mb-8 
      font-semibold bg-amber-300 rounded-2xl px-8 shadow-lg shadow-amber-400/50"
      >
        Testing the TODO app 
      </h1>

      <p className="text-xl text-amber-700/90 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4 rounded-2xl mb-2 shadow-lg shadow-lime-300/50">
        Unit test
      </p>
      <div className="mb-8 ">
        <img className=" rounded-2xl" src={unit_testPNG} alt="unit_testPNG" />
      </div>

      <p className="text-xl text-amber-700/90 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4 rounded-2xl mb-2">
        Cypress test
      </p>
      <video width="600" controls>
        <source src={videoFile} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
};

export default Testing;
