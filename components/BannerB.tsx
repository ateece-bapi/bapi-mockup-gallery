// using native <img> to avoid next/image dev warning about fetchPriority

export default function BannerB() {
  return (
    <section className='banner bannerB' aria-labelledby='banner-b-title'>
      <div className='bannerInner container'>
        <div className='bannerBContent'>
          <h2 id='banner-b-title' className='reveal'>
            WAM Software — Monitor, Alert, and Control
          </h2>
          <p className='muted reveal'>
            A technical, data-first banner highlighting integrations, data
            export, and calibration options.
          </p>

          <ul className='featureList reveal' aria-hidden='false'>
            <li>Real-time dashboards</li>
            <li>Exportable CSV & API access</li>
            <li>Field calibration & probe options</li>
          </ul>

          <div className='bannerCtas'>
            <button type='button' className='btn reveal'>
              Request Demo
            </button>
            <button type='button' className='secondary reveal'>
              View Docs
            </button>
          </div>
        </div>

        <div className='bannerBVisual' aria-hidden='true'>
          <div className='floatingChart'>
            <img
              src='/images/wam-overview-no-background.png'
              alt='WAM overview diagram'
              className='chartImg'
            />
          </div>
          <div className='floatingNodes'>
            <img
              src='/images/wam-logo.png'
              alt='WAM logo'
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
