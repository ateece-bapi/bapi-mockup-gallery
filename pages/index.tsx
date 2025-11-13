import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='mockupHub'>
      <Head>
        <title>WAM Website Mockups — Team Review Hub</title>
        <meta
          name='description'
          content='Review and compare WAM website design mockups and landing page variations'
        />
      </Head>

      <main className='hubMain'>
        <div className='hubHeader'>
          <img
            src='/images/wam-logo.png'
            alt='WAM - Wireless Asset Monitoring'
            className='hubLogo'
          />
          <h1>Website Mockup Gallery</h1>
          <p className='hubSubtitle'>
            Review and compare design variations for the WAM website
          </p>
        </div>

        <div className='mockupGrid'>
          {/* Product Mockups Section */}
          <div className='mockupSection'>
            <h2 className='sectionTitle'>Product Pages</h2>
            <div className='mockupCards'>
              <Link href='/mockup1' className='mockupCard'>
                <div className='cardNumber'>01</div>
                <h3>Product Grid Layout</h3>
                <p>Clean product showcase with grid-based navigation</p>
                <span className='cardTag'>Product Focus</span>
              </Link>

              <Link href='/mockup2' className='mockupCard'>
                <div className='cardNumber'>02</div>
                <h3>Technical Detail View</h3>
                <p>In-depth technical specifications and features</p>
                <span className='cardTag'>Technical</span>
              </Link>
            </div>
          </div>

          {/* Landing Pages Section */}
          <div className='mockupSection'>
            <h2 className='sectionTitle'>Landing Pages</h2>
            <div className='mockupCards'>
              <Link href='/landing' className='mockupCard'>
                <div className='cardNumber'>03</div>
                <h3>Banner Variants A & B</h3>
                <p>Side-by-side comparison of hero banner styles</p>
                <span className='cardTag'>Comparison</span>
              </Link>

              <Link href='/landing-a' className='mockupCard'>
                <div className='cardNumber'>04</div>
                <h3>Landing A — Marketing Focus</h3>
                <p>Product-first approach with visual emphasis</p>
                <span className='cardTag'>Marketing</span>
              </Link>

              <Link href='/landing-b' className='mockupCard'>
                <div className='cardNumber'>05</div>
                <h3>Landing B — Technical Focus</h3>
                <p>Specification-driven layout for technical audiences</p>
                <span className='cardTag'>Technical</span>
              </Link>

              <Link href='/landing-a-v2' className='mockupCard featured'>
                <div className='cardNumber'>06</div>
                <div className='featuredBadge'>NEW</div>
                <h3>Landing V2 — Solution-Focused</h3>
                <p>
                  Problem-first messaging with outcome-driven content strategy
                </p>
                <span className='cardTag'>Solution Focus</span>
              </Link>
            </div>
          </div>

          {/* Home Pages Section */}
          <div className='mockupSection'>
            <h2 className='sectionTitle'>Home Pages</h2>
            <div className='mockupCards'>
              <Link href='/home-v1' className='mockupCard'>
                <div className='cardNumber'>07</div>
                <h3>Home V1 — Modern Professional</h3>
                <p>
                  Fresh, modern redesign with clear value proposition and
                  engaging visuals
                </p>
                <span className='cardTag'>Homepage</span>
              </Link>

              <Link href='/home-v2' className='mockupCard featured'>
                <div className='cardNumber'>08</div>
                <div className='featuredBadge'>NEW</div>
                <h3>Home V2 — Dark Mode Toggle</h3>
                <p>
                  Modern design with light/dark theme switcher and Tailwind CSS styling
                </p>
                <span className='cardTag'>Interactive</span>
              </Link>
            </div>
          </div>
        </div>

        <footer className='hubFooter'>
          <p>Last updated: November 13, 2025</p>
          <p className='footerNote'>
            Select any mockup above to view full design
          </p>
        </footer>
      </main>
    </div>
  );
}
