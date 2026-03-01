import { NavLink } from "react-router-dom";
import { List, ListItemButton, ListItemText } from "@mui/material";
import clsx from "clsx";
import styles from "./Navigation.module.css";

const navItems = [
  { label: "Profile", to: "/profile" },
  {
    label: "The first practical assignment of the Frontend Basics course",
    to: "/practice",
  },
  {
    label: "Booking",
    to: "/booking",
  },
  {
    label: "Todo React Redux-Saga",
    to: "/todo-saga",
  },
  {
    label: "Todo React Redux-Thunk",
    to: "/todo-thunk",
  },
  {
    label: "SWAPI React Redux-Thunk",
    to: "/swapi-thunk",
  },
  {
    label: "Vanila JS",
    to: "/vanilaJS",
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
            sx={{
              px:0,
              py: { xs: 0.25, sm: 0.25, md: 0.5 }, 
              minHeight: { xs: 24,sm: 0.25, md: 32 },
            }}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default Navigation;
