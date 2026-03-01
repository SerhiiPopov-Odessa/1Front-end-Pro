
import Greenshop from '../img/todothunk.png';

const TodoThunk = () => {
  return (
    <div className="flex flex-col items-center justify-start p-4" >
      <h1 className="text-xl text-fuchsia-700/75 text-center mb-4 font-semibold bg-amber-300 rounded-2xl px-8">TODO React Redux-Thunk of the Frontend PRO course</h1>
      <p className="text-xl text-amber-700/90 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4 rounded-2xl mb-4"> 
        Project using React, Redux and Redux-Thunk for managing asynchronous actions.
      </p>
      <div>
        <a href="https://dz30todoreactreduxthunk.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={Greenshop} alt="todothunk.png" />
        </a>
      </div>
    </div>
  );
};

export default TodoThunk;
