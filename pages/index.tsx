import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const d = new Date();
    const formatted = d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    setLastUpdated(formatted);
  }, []);

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

          {/* Wireframes / Team Images Section */}
          <div className='mockupSection'>
            <h2 className='sectionTitle'>Wireframes</h2>
            <div className='mockupCards wireframeGrid'>
              <a
                href='/images/BAPI-homepage.png'
                target='_blank'
                rel='noopener noreferrer'
                className='mockupCard wireframeCard'
              >
                <div className='cardNumber'>10</div>
                <img
                  src='/images/BAPI-homepage.png'
                  alt='BAPI Homepage mockup'
                />
                <h3>BAPI Homepage</h3>
                <p>Homepage mockup (team)</p>
              </a>

              <a
                href='/images/BAPI-category.png'
                target='_blank'
                rel='noopener noreferrer'
                className='mockupCard wireframeCard'
              >
                <div className='cardNumber'>11</div>
                <img
                  src='/images/BAPI-category.png'
                  alt='Product category mockup'
                />
                <h3>Product Category</h3>
                <p>Category / collection layout (team)</p>
              </a>

              <a
                href='/images/BAPI-industry.png'
                target='_blank'
                rel='noopener noreferrer'
                className='mockupCard wireframeCard'
              >
                <div className='cardNumber'>12</div>
                <img
                  src='/images/BAPI-industry.png'
                  alt='Industry page mockup'
                />
                <h3>Industry</h3>
                <p>Industry landing mockup (team)</p>
              </a>

              <a
                href='/images/BAPI-product.png'
                target='_blank'
                rel='noopener noreferrer'
                className='mockupCard wireframeCard'
              >
                <div className='cardNumber'>13</div>
                <img
                  src='/images/BAPI-product.png'
                  alt='Product detail mockup'
                />
                <h3>Product Detail</h3>
                <p>Product detail / PDP mockup (team)</p>
              </a>

              <a
                href='/images/BAPI-solution.png'
                target='_blank'
                rel='noopener noreferrer'
                className='mockupCard wireframeCard'
              >
                <div className='cardNumber'>14</div>
                <img
                  src='/images/BAPI-solution.png'
                  alt='Solution / promo mockup'
                />
                <h3>Solution / Promo</h3>
                <p>Promo / solution layout (team)</p>
              </a>
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
                  Modern design with light/dark theme switcher and Tailwind CSS
                  styling
                </p>
                <span className='cardTag'>Interactive</span>
              </Link>
            </div>
          </div>

          {/* Headless Projects Section */}
          <div className='mockupSection'>
            <h2 className='sectionTitle'>Headless Projects</h2>
            <div className='mockupCards'>
              <a
                href='https://bapi-headless.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='mockupCard featured'
              >
                <div className='cardNumber'>09</div>
                <div className='featuredBadge'>HEADLESS</div>
                <h3>BAPI Headless — WP + Next.js</h3>
                <p>
                  Headless WordPress homepage built with Next.js — external
                  preview
                </p>
                <span className='cardTag'>Headless</span>
              </a>
            </div>
          </div>
        </div>

        <footer className='hubFooter'>
          <p>Last updated: {lastUpdated || 'November 25, 2025'}</p>
          <p className='footerNote'>
            Select any mockup above to view full design
          </p>
        </footer>
      </main>
    </div>
  );
}
