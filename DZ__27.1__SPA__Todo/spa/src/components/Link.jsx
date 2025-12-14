import { useContext } from 'react'
import { ChangeThemeContext } from '../context/changeThemeContext';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
  const [theme] = useContext(ChangeThemeContext);

  const { children, href } = props;

  return (
    <NavLink to={href} className={`links ${theme.themeClassName}`}>{children}</NavLink>
  )
}

export default Link;