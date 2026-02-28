import styles from './Header.module.css';
import { Phone, Mail, MapPin } from 'lucide-react';
import profileImg from '../img/img_01.png';
import clsx from "clsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <div className={clsx("max-sm:w-65 max-sm:h-65 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-75 lg:h-75", styles.circle)}>
          <img
            src={profileImg}
            alt="Profile"
            className={styles.image}
          />
        </div>
      </div>
      <h1 className={clsx("sm:!text-base",styles.name)}>SERHII POPOV</h1>
      <h2 className={clsx("sm:!text-xs",styles.speciality)}>FRONTEND DEVELOPER</h2>
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
