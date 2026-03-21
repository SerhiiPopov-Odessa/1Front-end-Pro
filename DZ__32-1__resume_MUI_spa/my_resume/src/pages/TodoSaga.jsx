
import Greenshop from '../img/todosaga.png';

const TodoSaga = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700/75 text-center mb-4 font-semibold bg-amber-300 rounded-2xl px-8">TODO Saga</h1>
        <p className="text-xl text-amber-700/90 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4 rounded-2xl mb-4">React Redux-Saga Formik Fetch methods AbortController  </p>
        <div>
          <a href="https://todoreactreduxsaga.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Greenshop} alt="todosaga.png" />
          </a>
        </div>
      </div>
    </>
  );
};

export default TodoSaga;
