import type { NextPage } from 'next';
import Head from 'next/head';
import SolutionHero from '../components/SolutionHero';
import WhyWhatSection from '../components/WhyWhatSection';

const LandingA: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WAM — Landing A (Marketing)</title>
      </Head>

      <main>
        <SolutionHero />

        <WhyWhatSection />

        {/* Removed "What is WAM" section per design — content consolidated into Why/What */}

        <section className='container section whyWam'>
          <h3 className='reveal'>WHY WAM?</h3>
          <p className='muted reveal'>
            Traditional asset monitoring methods can be time-consuming,
            error-prone, and often fail to provide real-time insights. However,
            with our advanced wireless sensor technology, you can take control
            of your asset protection strategy like never before. Here's how our
            solution can transform your business:
          </p>

          <div className='whyGrid'>
            <div className='whyMedia'>
              <img
                src='/images/wam-devices.png'
                alt='WAM devices illustration'
                width={820}
                height={460}
              />
            </div>

            <div className='whyText'>
              <h4>Customizable and Scalable Solutions</h4>
              <p className='muted'>
                We understand that every business has unique requirements. Our
                wireless sensor solutions are customizable to fit your specific
                needs, ensuring a tailored approach to asset protection.
                Moreover, our scalable architecture allows you to expand your
                monitoring system as your business grows, effortlessly adapting
                to changing demands.
              </p>
            </div>
          </div>
        </section>

        <section className='container section features'>
          <h3 className='reveal'>Designed for reliable HVAC control</h3>
          <p className='muted reveal'>
            Field-proven sensors, flexible outputs, and easy integration for
            building operators and engineers.
          </p>

          <div className='cards'>
            <article className='card reveal'>
              <h4>Accurate sensing</h4>
              <p className='muted'>
                High-accuracy temperature and humidity sensing with long-term
                stability.
              </p>
            </article>
            <article className='card reveal'>
              <h4>Flexible outputs</h4>
              <p className='muted'>
                0–10V, 4–20mA, and Modbus options for easy retrofits and
                integration.
              </p>
            </article>
            <article className='card reveal'>
              <h4>Rugged design</h4>
              <p className='muted'>
                IP-rated enclosures and field-replaceable probes for harsh
                environments.
              </p>
            </article>
          </div>
        </section>

        <section className='container section showcase'>
          <h3 className='reveal'>Product highlights</h3>
          <div className='showcaseRow'>
            <div className='showcaseImage'>
              <img
                src='/images/wam-quantum-e1755178852283.png'
                alt='WAM Quantum'
                width={420}
                height={260}
              />
            </div>
            <div className='showcaseDetails'>
              <h4>WAM-250 — Temp + RH</h4>
              <p className='muted'>
                Wall-mounted combined sensor — standard and high-accuracy
                options. Field-selectable outputs and optional IP-rated housing.
              </p>
              <div className='bannerCtas'>
                <button className='btn'>Request Quote</button>
                <button className='secondary'>Download Spec</button>
              </div>
            </div>
          </div>
        </section>

        <section className='container section ctaStrip'>
          <div className='ctaInner'>
            <div>
              <strong>Ready to specify WAM?</strong>
              <div className='muted'>
                Contact our sales team for samples, drawings, and pricing.
              </div>
            </div>
            <div>
              <button className='btn'>Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingA;
