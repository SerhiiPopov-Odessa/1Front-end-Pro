
import NextJS_png from '../img/practiceNextJS.png';


const TodoSaga = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700/75 text-center mb-4 font-semibold bg-amber-300 rounded-2xl px-8 shadow-lg shadow-amber-400/50">Practice Next.JS</h1>
        <p className="text-xl text-amber-700/90 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4 rounded-2xl mb-4 shadow-lg shadow-lime-300/50">NextJS   </p>
        <div>
          <a href="https://practicenextjs-kohl.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={NextJS_png} alt="todosaga.png" />
          </a>
        </div>
      </div>
    </>
  );
};

export default TodoSaga;
