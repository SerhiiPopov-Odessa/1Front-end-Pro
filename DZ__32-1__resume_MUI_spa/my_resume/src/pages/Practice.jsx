import styles from './Page.module.css';
import Greenshop from '../img/greenshop.png';

const Practice = () => {
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>First project</h1>
        <p className={styles.pageText}>First practical assignment of Frontend Basics.</p>
        <div>
          <a href="https://serhiipopov-odessa.github.io/Greenshop_NEW/" target="_blank" rel="noopener noreferrer">
            <img src={Greenshop} alt="Greenshop" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Practice;
