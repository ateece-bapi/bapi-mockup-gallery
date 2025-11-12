import type { NextPage } from 'next';
import Head from 'next/head';

const Mockup1: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WAM — Mockup 1</title>
      </Head>

      <header className='header'>
        <div className='container nav'>
          <div className='logo'>BAPI HVAC — WAM</div>
          <nav className='navLinks'>
            <a>Products</a>
            <a>Applications</a>
            <a>Support</a>
            <a>Contact</a>
          </nav>
        </div>
      </header>

      <main className='container'>
        <section className='hero'>
          <div className='hero-left'>
            <h1>
              Wall-mount and duct-mount temperature/humidity solutions — WAM
            </h1>
            <p className='muted'>
              Accurate, reliable air monitoring with HVAC-grade sensors and easy
              field wiring. Select models for general environments, clean rooms,
              and critical HVAC system control.
            </p>

            <div className='cta-row'>
              <button className='btn'>Request Quote</button>
              <button className='btn ghost'>Download Spec</button>
            </div>

            <div className='note'>
              Draft 2 mockup: emphasize product selection and quick comparison.
            </div>

            <div className='filters'>
              <div className='filter'>All Types</div>
              <div className='filter'>Temperature</div>
              <div className='filter'>Humidity</div>
              <div className='filter'>Duct/Wall</div>
              <div className='filter'>IP65</div>
            </div>

            <div className='grid' aria-label='Product grid'>
              {[
                [
                  'WAM-100',
                  'Basic Wall Sensor',
                  'Temp ±0.3°C | 2-wire | Plenum',
                ],
                ['WAM-250', 'Temp + RH', '±2% RH | Digital output'],
                ['WAM-400', 'Duct Probe', 'Probe 6" | IP65'],
                ['WAM-600', 'Cleanroom', 'ISO Class 5 | ±0.2°C'],
                ['WAM-700', 'Multi-sensor', 'Modbus | 4-20mA'],
                ['WAM-800', 'IP-rated', 'IP66 | Stainless'],
              ].map((p) => (
                <article className='card' key={p[0]}>
                  <h3>
                    {p[0]} — {p[1]}
                  </h3>
                  <p style={{ color: 'var(--muted)' }}>{p[2]}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className='hero-right'>
            <div className='device'>
              <h4>Quick Specs & Downloads</h4>
              <p className='muted'>
                Select a product to view detailed specs, wiring diagrams and
                accessory lists.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                <button className='btn' style={{ flex: 1 }}>
                  Spec Sheet
                </button>
                <button className='btn ghost' style={{ flex: 1 }}>
                  Wiring
                </button>
              </div>
              <div
                className='muted'
                style={{
                  marginTop: 12,
                  borderTop: '1px dashed var(--bg)',
                  paddingTop: 12,
                }}
              >
                <strong>Contact local rep</strong>
                <br />
                Call: (555) 555‑5555
                <br />
                Email: sales@bapi.com
              </div>
            </div>
          </aside>
        </section>

        <footer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <div>© BAPI HVAC — WAM product family</div>
            <div>Privacy · Terms · Support</div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Mockup1;
