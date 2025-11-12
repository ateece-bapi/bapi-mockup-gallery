export default function WhyWhatSection() {
  return (
    <section className='container section whyWhat'>
      <div className='twoCol whyWhatInner'>
        <div className='col copy'>
          <p className='eyebrow accent'>Modular solutions</p>
          <h2>How it works</h2>
          <p className='muted lead'>
            WAM's Wireless Asset Monitoring system sends sensor readings to a
            central gateway which securely forwards data to the cloud. Teams get
            real-time alerts, customizable dashboards, and simple integrations
            so you can prevent loss and reduce risk.
          </p>

          <div className='featureRow'>
            <div className='featureItem'>
              <div className='featureIcon' aria-hidden='true'>
                {/* simple bell icon */}
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15 17H9'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 3C10.3431 3 9 4.34315 9 6V7C6.79086 7 5 8.79086 5 11V15L4 16V17H20V16L19 15V11C19 8.79086 17.2091 7 15 7V6C15 4.34315 13.6569 3 12 3Z'
                    stroke='white'
                    strokeWidth='1.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div className='featureCopy'>
                <h5>Real-time alerts</h5>
                <p className='muted'>
                  Instant notifications via SMS, email, or webhook.
                </p>
              </div>
            </div>

            <div className='featureItem'>
              <div className='featureIcon' aria-hidden='true'>
                {/* simple grid/scale icon */}
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 6H21'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6 20V10'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M18 20V10'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div className='featureCopy'>
                <h5>Scale easily</h5>
                <p className='muted'>
                  Add sensors and gateways without rearchitecting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='col visual'>
          <div className='phoneMock'>
            <picture>
              <source
                srcSet='/images/wam-overview-no-background-cropped-transparent.webp'
                type='image/webp'
              />
              <img
                src='/images/wam-overview-no-background-cropped-transparent.png'
                alt='WAM overview illustration'
                className='phoneImg'
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
