import Image from 'next/image';

export default function SolutionHero() {
  return (
    <section className='solutionHero'>
      <div className='container bannerInner'>
        <div className='heroContent'>
          <p className='eyebrow muted'>WAM by BAPI</p>

          {/* Wordmark near the eyebrow for stronger brand presence */}
          <div className='heroWordmark' aria-hidden='true'>
            <Image
              src='/images/wam-logo.png'
              alt='WAM logo'
              width={140}
              height={36}
            />
          </div>

          <h1 className='heroTitle'>
            Protect your valuable assets with real-time monitoring that gives
            you peace of mind!
          </h1>

          <p className='heroSub muted'>
            Real-time alerts, centralized dashboards, and flexible integrations
            so teams can stop worrying about equipment or product loss.
          </p>

          <div className='bannerCtas'>
            <button className='btn'>Request Demo</button>
            <button className='secondary'>Get Datasheet</button>
          </div>
        </div>

        <div className='heroVisual' aria-hidden='true'>
          <div
            className='visualInner'
            role='img'
            aria-label='WAM product visual'
          >
            {/* Use device visual similar to your mockup. If you prefer the simple wordmark-only hero, switch to wam-logo.png here. */}
            <Image
              src='/images/wam-sensors-with-gateway.png'
              alt='WAM devices'
              width={720}
              height={440}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
