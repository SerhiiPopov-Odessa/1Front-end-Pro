import styles from './Header.module.css';
import { Phone, Mail, MapPin } from 'lucide-react';
import profileImg from '../img/img_01.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <div className={styles.circle}>
          <img
            src={profileImg}
            alt="Profile"
            className={styles.image}
          />
        </div>
      </div>
      <h1 className={styles.name}>SERHII POPOV</h1>
      <h2 className={styles.speciality}>FRONTEND DEVELOPER</h2>
      <div className={styles.content}>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.divider}></div>

        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Phone size={18} />
            </div>
            <a href="tel:+380985558993" className={styles.contactText}>+38 098 555 89 93</a>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <Mail size={18} />
            </div>
            <a href="mailto:ukrpowta@gmail.com" className={styles.contactText}>
              ukrpowta@gmail.com
            </a>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <MapPin size={18} />
            </div>
            <span className={styles.contactText}>Belgium</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
