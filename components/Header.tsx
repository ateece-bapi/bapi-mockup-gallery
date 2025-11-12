import Link from 'next/link';

export default function Header() {
  return (
    <header className='header'>
      <div className='container nav' role='navigation' aria-label='Main'>
        <Link href='/' className='logoLink'>
          {/* Header logo (BAPI) - using native img to avoid next/image dev warnings */}
          <img src='/images/logo.png' alt='BAPI logo' width={140} height={36} />
        </Link>

        <nav className='navLinks' aria-label='Primary'>
          <Link href='#'>Solutions</Link>
          <Link href='#'>Products</Link>
          <Link href='#'>About Us</Link>
          <Link href='#'>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
