import Image from 'next/image';

export default function SolutionHero() {
  return (
    <section className='solutionHero'>
      <div className='container bannerInner'>
        <div className='heroContent'>
          <p className='eyebrow muted'>WAM by BAPI</p>
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
            <Image
              src='/images/wam-overview-no-background.png'
              alt='WAM overview'
              width={560}
              height={360}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
