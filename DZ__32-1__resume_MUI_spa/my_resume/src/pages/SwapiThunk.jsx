import styles from './Page.module.css';
import Greenshop from '../img/swapithunk.png';

const SwapiThunk = () => {
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>SWAPI Project</h1>
        <p className={styles.pageText}>
          Fetch data from SWAPI using React Redux-Thunk.
        </p>
        <div>
          <a href="https://dz301swapireactreduxthunk.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Greenshop} alt="swapithunk.png" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SwapiThunk;
