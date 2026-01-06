import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type FontControlsProps = {
  sampleText: string;
  setSampleText: (v: string) => void;
  size: 'sm' | 'md' | 'lg';
  setSize: (v: 'sm' | 'md' | 'lg') => void;
  weight: 'regular' | 'medium' | 'bold';
  setWeight: (v: 'regular' | 'medium' | 'bold') => void;
};

function FontControls({ sampleText, setSampleText, size, setSize, weight, setWeight }: FontControlsProps) {
  return (
    <div className='fontControls'>
      <label className='controlLabel' htmlFor='sampleTextInput'>
        Sample text
      </label>
      <input
        id='sampleTextInput'
        aria-label='Sample text for font comparison'
        className='controlInput'
        value={sampleText}
        onChange={(e) => setSampleText(e.target.value)}
      />

      <label className='controlLabel' htmlFor='sizeSelect'>
        Size
      </label>
      <select
        id='sizeSelect'
        aria-label='Sample size'
        className='controlSelect'
        value={size}
        onChange={(e) => setSize(e.target.value as 'sm' | 'md' | 'lg')}
      >
        <option value='sm'>Small</option>
        <option value='md'>Medium</option>
        <option value='lg'>Large</option>
      </select>

      <label className='controlLabel' htmlFor='weightSelect'>
        Weight
      </label>
      <select
        id='weightSelect'
        aria-label='Font weight'
        className='controlSelect'
        value={weight}
        onChange={(e) => setWeight(e.target.value as 'regular' | 'medium' | 'bold')}
      >
        <option value='regular'>Regular</option>
        <option value='medium'>Medium</option>
        <option value='bold'>Bold</option>
      </select>
    </div>
  );
}

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

  // Font comparison controls (shared state)
  const [sampleText, setSampleText] = useState(
    'The quick brown fox jumps over the lazy dog.'
  );
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [weight, setWeight] = useState<'regular' | 'medium' | 'bold'>('regular');

  return (
    <div className='mockupHub'>
      <Head>
        <title>BAPI Website Mockups — Team Review Hub</title>
        <meta
          name='description'
          content='Review and compare WAM website design mockups and landing page variations'
        />
      </Head>

      <main className='hubMain'>
        <div className='hubHeader'>
          <h1>Website Mockup Gallery</h1>
          <p className='hubSubtitle'>
            Review and compare variations to the BAPI Website
          </p>
        </div>

        <div className='mockupGrid'>
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
                  Headless WordPress backend with a Next.js frontend — live
                  external preview
                </p>
                <span className='cardTag'>Headless</span>
              </a>

              <Link href='/daily-log' className='mockupCard'>
                <div className='cardNumber'>10</div>
                <h3>Daily Log</h3>
                <p>Track daily progress on the BAPI Headless project</p>
                <span className='cardTag'>Documentation</span>
              </Link>

              <Link href='/todo' className='mockupCard'>
                <div className='cardNumber'>11</div>
                <h3>TODO & Next Steps</h3>
                <p>Current tasks and upcoming features for BAPI Headless</p>
                <span className='cardTag'>Documentation</span>
              </Link>

              <Link href='/competitor-analysis-belimo' className='mockupCard'>
                <div className='cardNumber'>12</div>
                <h3>Competitor Analysis: Belimo</h3>
                <p>In-depth analysis of Belimo's market position and strategies</p>
                <span className='cardTag'>Research</span>
              </Link>

              <Link href='/competitive-ecosystem-analysis' className='mockupCard'>
                <div className='cardNumber'>13</div>
                <h3>Competitive Ecosystem Analysis</h3>
                <p>Comprehensive overview of the competitive landscape</p>
                <span className='cardTag'>Research</span>
              </Link>
            </div>
          </div>

          {/* Font Comparison Section */}
          <div className='mockupSection'>
            <h2 className='sectionTitle'>Font Comparison</h2>
            <FontControls
              sampleText={sampleText}
              setSampleText={setSampleText}
              size={size}
              setSize={setSize}
              weight={weight}
              setWeight={setWeight}
            />
            <div className='fontCompare' id='fontCompareContainer'>
              <div className='fontSample'>
                <h3 className='sampleTitle'>Roboto</h3>
                {(() => {
                  const fontSizes = { sm: '1rem', md: '1.5rem', lg: '2.25rem' };
                  const fontWeights = { regular: 400, medium: 500, bold: 700 };
                  return (
                    <>
                      <h1
                        className='ff-roboto'
                        style={{ fontSize: fontSizes[size], fontWeight: fontWeights[weight] }}
                        aria-live='polite'
                      >
                        {sampleText}
                      </h1>
                      <p className='ff-roboto' style={{ fontSize: fontSizes[size], fontWeight: fontWeights[weight] }}>{sampleText}</p>
                    </>
                  );
                })()}
              </div>
              <div className='fontSample'>
                <h3 className='sampleTitle'>Acumin Semicondensed</h3>
                {(() => {
                  const fontSizes = { sm: '1rem', md: '1.5rem', lg: '2.25rem' };
                  const fontWeights = { regular: 400, medium: 500, bold: 700 };
                  return (
                    <>
                      <h1
                        className='ff-acumin-pro-condensed'
                        style={{ fontSize: fontSizes[size], fontWeight: fontWeights[weight] }}
                        aria-live='polite'
                      >
                        {sampleText}
                      </h1>
                      <p className='ff-acumin-pro-condensed' style={{ fontSize: fontSizes[size], fontWeight: fontWeights[weight] }}>{sampleText}</p>
                    </>
                  );
                })()}
              </div>
              <div className='fontSample'>
                <h3 className='sampleTitle'>Acumin Condensed</h3>
                {(() => {
                  const fontSizes = { sm: '1rem', md: '1.5rem', lg: '2.25rem' };
                  const fontWeights = { regular: 400, medium: 500, bold: 700 };
                  return (
                    <>
                      <h1
                        className='ff-acumin-pro'
                        style={{ fontSize: fontSizes[size], fontWeight: fontWeights[weight] }}
                        aria-live='polite'
                      >
                        {sampleText}
                      </h1>
                      <p className='ff-acumin-pro' style={{ fontSize: fontSizes[size], fontWeight: fontWeights[weight] }}>{sampleText}</p>
                    </>
                  );
                })()}
              </div>
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

              {/* Landing B removed as requested */}

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

          {/* Headless Projects Section removed (duplicate) */}
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
