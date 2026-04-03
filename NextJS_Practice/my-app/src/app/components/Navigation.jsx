import Link from 'next/link'
function Navigation() {
  return (
    <nav className="navigation">
      <Link className="nav-link" href="/">Home</Link>
      <Link className="nav-link" href="/about">About</Link>
      <Link className="nav-link" href="/getExample">GetApiInfo</Link>
    </nav>
  );
}

export default Navigation;
