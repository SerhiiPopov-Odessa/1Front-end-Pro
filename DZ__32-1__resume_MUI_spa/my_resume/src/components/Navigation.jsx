import { NavLink } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import styles from './Navigation.module.css';

const navItems = [
  { label: 'Profile', to: '/profile' },
  {
    label: 'The first practical assignment of the Frontend Basics course',
    to: '/practice',
  },
  {
    label: 'Todo React Redux-Saga of the Frontend PRO course',
    to: '/todo-saga',
  },
  {
    label: 'Todo React Redux-Thunk of the Frontend PRO course',
    to: '/todo-thunk',
  },
  {
    label: 'SWAPI React Redux-Thunk of the Frontend PRO course',
    to: '/swapi-thunk',
  },
  //{ label: 'THIS', to: '/this' },
];

const Navigation = () => {
  return (
    <div>
      <h2 className={styles.title}>My practice</h2>
      <div className={styles.divider}></div>
      <List className={styles.nav}>
        {navItems.map(({ label, to }) => (
          <ListItemButton
            key={to}
            component={NavLink}
            to={to}
            className={styles.link}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default Navigation;
