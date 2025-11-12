import type { NextPage } from 'next';
import Head from 'next/head';

const Mockup2: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WAM — Mockup 2</title>
      </Head>

      <div className='wrap'>
        <header className='headerSmall'>
          <div>
            <div className='brand'>BAPI — WAM</div>
            <div className='meta'>Draft 2 — Technical variant</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className='secondary'>All Products</button>
            <button className='btn'>Request Sample</button>
          </div>
        </header>

        <div className='layout'>
          <aside className='panel' aria-label='Product details panel'>
            <div className='product-hero'>
              <div className='imgPlaceholder'>Device Image</div>
              <div>
                <h2>WAM-250 Temp + RH</h2>
                <div className='muted'>
                  Wall-mounted combined sensor — standard and high-accuracy
                  options
                </div>
              </div>
            </div>

            <div className='spec-list' role='list'>
              <div className='spec-row'>
                <div>Accuracy</div>
                <div>±0.3°C / ±2% RH</div>
              </div>
              <div className='spec-row'>
                <div>Outputs</div>
                <div>0-10V, 4-20mA, Modbus</div>
              </div>
              <div className='spec-row'>
                <div>Power</div>
                <div>12-30 VDC</div>
              </div>
            </div>

            <div className='tabs' role='tablist'>
              <div className='tab' role='tab'>
                Overview
              </div>
              <div className='tab' role='tab'>
                Wiring
              </div>
              <div className='tab' role='tab'>
                Accessories
              </div>
            </div>

            <div className='download'>
              <button className='btn'>Download Spec</button>
              <button className='secondary'>Datasheet PDF</button>
            </div>

            <div className='callout'>
              Request calibration or custom probe length — contact engineering
              support.
            </div>
          </aside>

          <main className='content'>
            <div className='panel'>
              <h3>Product Overview</h3>
              <p className='muted'>
                This variant of the WAM family packs temperature and humidity
                sensing in a low-profile enclosure for interior HVAC control.
              </p>
              <h4>Why choose this model?</h4>
              <ul className='muted'>
                <li>Field-selectable outputs for easy retrofits</li>
                <li>Low-drift humidity sensor for long-term stability</li>
                <li>Optional IP-rated housing and probe lengths</li>
              </ul>
            </div>

            <div className='panel'>
              <h4>Related Products</h4>
              <div className='related'>
                <div className='small-card'>
                  <strong>WAM-100</strong>
                  <br />
                  <span className='muted'>Basic temp only</span>
                </div>
                <div className='small-card'>
                  <strong>WAM-400</strong>
                  <br />
                  <span className='muted'>Duct probe</span>
                </div>
                <div className='small-card'>
                  <strong>WAM-700</strong>
                  <br />
                  <span className='muted'>Multi-sensor</span>
                </div>
                <div className='small-card'>
                  <strong>Accessories</strong>
                  <br />
                  <span className='muted'>Mounting plates, probes</span>
                </div>
              </div>
            </div>
          </main>
        </div>

        <footer>
          <div className='muted'>© BAPI HVAC</div>
        </footer>
      </div>
    </div>
  );
};

export default Mockup2;
