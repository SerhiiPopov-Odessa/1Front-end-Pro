import styles from './Page.module.css';
import Greenshop from '../img/todothunk.png';

const TodoThunk = () => {
  return (
    <div className={styles.page}>
      <h1>TODO React Redux-Thunk of the Frontend PRO course</h1>
      <p>
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
