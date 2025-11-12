import Image from 'next/image';

export default function BannerA() {
  return (
    <section className='banner bannerA' aria-labelledby='banner-a-title'>
      <div className='bannerInner container'>
        <div className='bannerLeft'>
          <h1 id='banner-a-title' className='reveal'>
            WAM — Environmental Monitoring for HVAC
          </h1>
          <p className='muted reveal'>
            Accurate temperature and humidity sensing for reliable HVAC control
            — field-friendly, rugged, and easy to integrate.
          </p>

          <div className='bannerCtas'>
            <button type='button' className='btn reveal'>
              Request Quote
            </button>
            <button type='button' className='secondary reveal'>
              Download Spec
            </button>
          </div>
        </div>

        <div className='bannerRight' aria-hidden='true'>
          <div className='deviceHero'>
            <div className='deviceFace'>
              <Image
                src='/images/wam-devices.png'
                alt='WAM devices'
                width={260}
                height={156}
              />
            </div>
            <div className='deviceSpecs'>
              <div>
                <strong>±0.3°C</strong> accuracy
              </div>
              <div>
                <strong>0–10V</strong>, <strong>Modbus</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
