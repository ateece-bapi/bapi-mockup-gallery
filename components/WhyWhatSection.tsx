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

          <div className='featureCtas'>
            <button className='btn'>Start with WAM</button>
            <a className='muted smallLink' href='#'>
              See docs
            </a>
          </div>

          <div className='featureRow'>
            <div className='featureItem'>
              <strong>Real-time alerts</strong>
              <div className='muted'>
                Instant notifications via SMS, email, or webhook.
              </div>
            </div>
            <div className='featureItem'>
              <strong>Scale easily</strong>
              <div className='muted'>
                Add sensors and gateways without rearchitecting.
              </div>
            </div>
            <div className='featureItem'>
              <strong>Enterprise-ready</strong>
              <div className='muted'>
                Role-based access, audit logs, and secure APIs.
              </div>
            </div>
          </div>
        </div>

        <div className='col visual'>
          <div className='phoneMock'>
            <img
              src='/images/wam-devices.png'
              alt='WAM devices'
              className='phoneImg'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
