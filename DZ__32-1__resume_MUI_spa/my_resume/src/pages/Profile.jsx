import styles from './Page.module.css';

const Profile = () => {

  return (
    <div className={styles.page}>
      <div className={styles.profile}>
        <h1>Profile</h1>
        <div className={styles.divider}></div>
        <p className={styles.intro}>
          Hello. I'm 38 years old. I'm Ukrainian. Since school, I've been interested in computers, programming,
          and microelectronics, such as Arduino. I also have an interest in 3D modeling and have experience with SketchUp.
        </p>

        <section className={styles.section}>
          <h3>Work Experience</h3>
          <div className={styles.divider}></div>
          <div className={styles.jobHeader}>
            <span className={styles.jobTitle}>Agronomist plant protection</span>
            <span className={styles.date}>2010 - 2023</span>
          </div>
          <ul className={styles.list}>
            <li><strong>Main place of work:</strong> work in the civil service in the specialty of plant protection.</li>
            <li><strong>Additional job:</strong> computer administrator.</li>
            <li><strong>Work on the 1C platform.</strong></li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Education</h3>
          <div className={styles.divider}></div>
          <ul className={styles.list}>
            <li>
              <span className={styles.date}>2004 – 2009</span>
              <div className={styles.info}>
                <strong>Odessa State Agrarian University</strong>
                (<a href="https://osau.edu.ua" target="_blank" rel="noreferrer">osau.edu.ua</a>)
              </div>
            </li>
            <li>
              <span className={styles.date}>2007 – 2009</span>
              <div className={styles.info}>
                <strong> Programmer. IT Step Academy</strong>
                (<a href="https://od.itstep.org" target="_blank" rel="noreferrer">od.itstep.org</a>)
              </div>
            </li>
            <li>
              <span className={styles.date}>2015</span>
              <div className={styles.info}>
                <strong>1C (BAS) Programming</strong>
                (<a href="https://www.abissoft.com" target="_blank" rel="noreferrer">abissoft.com</a>)
              </div>
            </li>
            <li>
              <span className={styles.date}>2025</span>
              <div className={styles.info}>
                <strong>Front-end Basic</strong>
                (<a href="https://certificate.ithillel.ua/view/19171804" target="_blank" rel="noreferrer">Hillel IT school</a>)
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Profile;
