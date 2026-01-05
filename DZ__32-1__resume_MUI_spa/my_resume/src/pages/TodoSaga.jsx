import styles from './Page.module.css';
import Greenshop from '../img/todosaga.png';

const TodoSaga = () => {
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>TODO Saga</h1>
        <p className={styles.pageText}>React Redux-Saga of the Frontend PRO course.</p>
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
