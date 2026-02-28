
import Greenshop from '../img/todosaga.png';

const TodoSaga = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start p-4">
        <h1 className="text-xl text-fuchsia-700 text-center mb-2 font-semibold">TODO Saga</h1>
        <p className="text-xl text-amber-700 text-center mb-2">React Redux-Saga of the Frontend PRO course.</p>
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
