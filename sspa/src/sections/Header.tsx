import LogoIcon from '/public/assets/logo.svg'
import MenuIcon from '/public/assets/icon-menu.svg'
import Button from '@/components/Button';
import Link from 'next/link';

export const Header = () => {
  return <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
        <div>
      <div className='justify-center items-center border-white/15'>
       <img src='/assets/logoT.png' className="h-12 w-12 ml-8" />
         </div>
        </div>
      <div className='hidden md:block'>
          <nav className='flex gap-8 text-white/70 text-sm'>
          <Link className='hover:text-white transition' href="/#">Home</Link>
            <Link className='hover:text-white transition' href="/timeline">Timeline</Link>
            <Link className='hover:text-white transition' href="/expandability">Expandability</Link>
            <Link className='hover:text-white transition' href="/lessons">Lessons</Link>
            <Link className='hover:text-white transition' href="/resources">Resources</Link>

          </nav>
        </div>
        <div className='flex gap-4 items-center'>
          <a href="https://projectsolstice.co/solar-system/"><Button>Explore</Button></a>
          <MenuIcon className='md:hidden' /> 
        </div>
      </div>
    </div>
    </header>;
};
