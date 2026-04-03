import Link from 'next/link'
import Navigation from './Navigation'
import NextLogo from './NextLogo'


const Header = () => {
  return (
    <header className='flex flex-wrap items-center flex-col sm:flex-row justify-center sm:justify-between space-y-2 border-b border-b-amber-300 px-10 py-5'>
        {/* <Link className="nav-link !text-white text-3xl " href={'https://nextjs.org/'} target="_blank" rel="noopener noreferrer"><strong>NEXT JS</strong></Link> */}
        <Link className="nav-link text-xl !text-white  " href={'https://nextjs.org/'} target="_blank" rel="noopener noreferrer"> Link to the website<NextLogo className="w-16 h-8 invert mx-auto" /> </Link>
        <p className='text-2xl font-bold'>Practice Next JS</p>
        <Navigation className='' />
    </header>
    
  )
}

export default Header