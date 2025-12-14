import { createContext } from 'react';

export const themes = {
  light: {
    name: "light",
    themeClassName: "light-theme",
  },
  dark: {
    name: "dark",
    themeClassName: "dark-theme",
  }
};

export const ChangeThemeContext = createContext();
