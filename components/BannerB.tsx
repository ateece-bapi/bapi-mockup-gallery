export default function BannerB() {
  return (
    <section
      aria-labelledby='banner-b-title'
      className='bg-slate-50 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto px-4 py-12 lg:py-20'>
        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16'>
          <div className='w-full lg:w-1/2 min-w-0'>
            <p className='eyebrow text-brand-blue-strong'>
              Technical
            </p>
            <h2
              id='banner-b-title'
              className='mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900'
            >
              WAM — Monitor, alert, and integrate
            </h2>
            <p className='mt-4 text-slate-600'>
              A compact technical overview focused on data export, integrations,
              and field calibration options. Designed for engineers and
              specifiers.
            </p>

            <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700'>
              <li className='inline-flex items-center gap-3'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow text-brand-blue'>
                  📊
                </span>
                Real-time dashboards
              </li>
              <li className='inline-flex items-center gap-3'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow text-brand-blue'>
                  🔁
                </span>
                Exportable CSV & API
              </li>
              <li className='inline-flex items-center gap-3'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow text-brand-blue'>
                  🛠️
                </span>
                Field calibration & probes
              </li>
              <li className='inline-flex items-center gap-3'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-md bg-white shadow text-brand-blue'>
                  🔒
                </span>
                Enterprise security
              </li>
            </ul>

            <div className='mt-8 flex items-center gap-3'>
              <a href='#' className='btn'>
                Datasheet
                <span className='ml-2 text-xs bg-white/10 px-2 py-0.5 rounded'>
                  PDF · 120KB
                </span>
              </a>

              <a href='#' className='secondary'>
                Request demo
              </a>
            </div>
          </div>

          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end min-w-0'>
            <div className='w-full max-w-full lg:max-w-md rounded-lg shadow-lg overflow-hidden bg-white'>
              <img
                src='/images/wam-overview-no-background.png'
                alt='WAM overview diagram'
                className='w-full h-auto object-contain'
                loading='eager'
                decoding='async'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
