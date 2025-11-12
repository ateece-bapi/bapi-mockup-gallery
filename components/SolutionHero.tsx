import Image from 'next/image';

export default function SolutionHero() {
  return (
    <section className='solutionHero'>
      <div className='container bannerInner'>
        <div className='heroContent'>
          <p className='eyebrow muted'>WAM by BAPI</p>

          {/* Wordmark near the eyebrow for stronger brand presence */}
          <div style={{ marginBottom: 12 }} aria-hidden='true'>
            <Image
              src='/images/wam-logo.png'
              alt='WAM logo'
              width={140}
              height={36}
            />
          </div>

          <h1 className='heroTitle'>
            Protect critical assets with 24/7 environmental monitoring
          </h1>

          <p className='heroSub muted'>
            Real-time alerts, centralized dashboards, and flexible integrations
            so teams can stop worrying about equipment or product loss.
          </p>

          <div className='bannerCtas'>
            <button className='btn'>Request Demo</button>
            <button className='secondary'>Get Datasheet</button>
          </div>

          {/* Trust logos moved below CTAs for visual hierarchy */}
          <div className='trustRow muted' aria-hidden='true'>
            <span>Trusted by</span>
            <div className='trustLogos'>
              <Image
                src='/images/logo.png'
                alt='BAPI'
                width={100}
                height={30}
              />
              <Image
                src='/images/wam-logo.png'
                alt='WAM'
                width={80}
                height={30}
              />
              <Image
                src='/images/wam-sensors-with-gateway.png'
                alt='Sensors with Gateway'
                width={140}
                height={30}
              />
            </div>
          </div>
        </div>

        <div className='heroVisual' aria-hidden='true'>
          <div className='visualInner'>
            {/* Use device visual similar to your mockup. If you prefer the simple wordmark-only hero, switch to wam-logo.png here. */}
            <Image
              src='/images/wam-sensors-with-gateway.png'
              alt='WAM devices'
              width={620}
              height={380}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
