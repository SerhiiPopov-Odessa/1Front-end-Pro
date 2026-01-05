import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Header />
        <Navigation />
      </aside>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
