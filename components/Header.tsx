import Link from 'next/link';

export default function Header() {
  return (
    <header className='header'>
      <div className='container nav' role='navigation' aria-label='Main'>
        <Link href='/' className='logoLink'>
          {/* Use a native img tag for the small header logo to avoid dev warning from next/image internals */}
          <img src='/images/logo.png' alt='BAPI logo' width={140} height={36} />
        </Link>

        <nav className='navLinks' aria-label='Primary'>
          <Link href='/mockup1'>Products</Link>
          <Link href='/mockup2'>Applications</Link>
          <Link href='/landing-a'>Landing A</Link>
          <Link href='/landing-b'>Landing B</Link>
        </nav>
      </div>
    </header>
  );
}
