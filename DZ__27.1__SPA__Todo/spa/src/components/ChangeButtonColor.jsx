import { useContext } from "react";
import { ChangeThemeContext, themes } from "../context/changeThemeContext";

const ChangeButtonColor = () => {
  const [theme, setTheme] = useContext(ChangeThemeContext);

  const handleClick = () => {
    setTheme(theme.name === "dark" ? themes.light : themes.dark);
  };

  return <button className='change__Btn' onClick={handleClick}>Change Theme dark/light</button>;
};

export default ChangeButtonColor;
