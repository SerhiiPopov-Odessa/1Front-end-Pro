
import Greenshop from '../img/todothunk.png';

const TodoThunk = () => {
  return (
    <div className="flex flex-col items-center justify-start p-4" >
      <h1 className="text-xl text-fuchsia-700 text-center mb-2 font-semibold">TODO React Redux-Thunk of the Frontend PRO course</h1>
      <p className="text-xl text-amber-700 text-center mb-2"> 
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
