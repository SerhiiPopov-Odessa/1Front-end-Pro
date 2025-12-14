import ChangeButtonColor from './ChangeButtonColor';
import Link from './Link';
const Header = () => (
  <header className='header'>
    <div className='header__logo'><Link href='/company'>TODO</Link></div>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/contacts'>Contacts</Link>
      </li>
    </ul>
    <ChangeButtonColor  />
  </header>
);

export default Header;