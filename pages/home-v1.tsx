import Head from 'next/head';
// Use native <img> to avoid next/image dev warning about fetchPriority

export default function HomeV1() {
  return (
    <div className='home-v1'>
      <Head>
        <title>BAPI - Building Automation & Controls | Sensors for HVAC</title>
        <meta
          name='description'
          content='Industry-leading building automation sensors and controls for HVAC systems'
        />
      </Head>

      {/* Navigation */}
      <nav className='nav'>
        <div className='nav-container'>
          <div className='nav-logo'>
            <img
              src='/images/bapi-logo.svg'
              alt='BAPI'
              width={140}
              height={50}
            />
          </div>
          <div className='nav-links'>
            <a href='#products'>Products</a>
            <a href='#resources'>Resources</a>
            <a href='#about'>About Us</a>
            <a href='#support'>Support</a>
            <a href='#contact'>Contact</a>
          </div>
          <button className='nav-cta'>Request Quote</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='hero'>
        <div className='hero-content'>
          <div className='hero-text'>
            <span className='hero-label'>Building Automation Excellence</span>
            <h1 className='hero-title'>
              Precision Sensors for
              <span className='hero-highlight'> Smarter Buildings</span>
            </h1>
            <p className='hero-description'>
              Industry-leading HVAC sensors and building automation controls
              trusted by engineers worldwide. Delivering accurate, reliable
              performance for over 30 years.
            </p>
            <div className='hero-actions'>
              <button className='btn-primary'>Explore Products</button>
              <button className='btn-secondary'>View Solutions</button>
            </div>
            <div className='hero-stats'>
              <div className='stat'>
                <div className='stat-number'>30+</div>
                <div className='stat-label'>Years Experience</div>
              </div>
              <div className='stat'>
                <div className='stat-number'>500K+</div>
                <div className='stat-label'>Sensors Deployed</div>
              </div>
              <div className='stat'>
                <div className='stat-number'>50+</div>
                <div className='stat-label'>Countries</div>
              </div>
            </div>
          </div>
          <div className='hero-visual'>
            <div className='hero-image-wrapper'>
              <img
                src='/images/wam-sensors-with-gateway.png'
                alt='BAPI Sensors'
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className='trust-bar'>
        <div className='trust-container'>
          <span className='trust-text'>Trusted by leading organizations:</span>
          <div className='trust-logos'>
            <div className='trust-logo'>Johnson Controls</div>
            <div className='trust-logo'>Honeywell</div>
            <div className='trust-logo'>Siemens</div>
            <div className='trust-logo'>Schneider Electric</div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className='products-section'>
        <div className='section-header'>
          <h2 className='section-title'>Product Categories</h2>
          <p className='section-subtitle'>
            Comprehensive building automation solutions for every application
          </p>
        </div>
        <div className='products-grid'>
          <div className='product-card'>
            <div className='product-icon'>🌡️</div>
            <h3>Temperature Sensors</h3>
            <p>
              Precision temperature monitoring for optimal climate control and
              energy efficiency
            </p>
            <ul className='product-features'>
              <li>Room & duct sensors</li>
              <li>Immersion sensors</li>
              <li>Outdoor sensors</li>
            </ul>
            <a href='#' className='product-link'>
              View All →
            </a>
          </div>

          <div className='product-card'>
            <div className='product-icon'>💨</div>
            <h3>Air Quality Sensors</h3>
            <p>
              Monitor CO2, VOC, and particulate matter for healthier indoor
              environments
            </p>
            <ul className='product-features'>
              <li>CO2 sensors</li>
              <li>VOC sensors</li>
              <li>Multi-sensor solutions</li>
            </ul>
            <a href='#' className='product-link'>
              View All →
            </a>
          </div>

          <div className='product-card'>
            <div className='product-icon'>💧</div>
            <h3>Humidity Sensors</h3>
            <p>
              Accurate humidity measurement for comfort and equipment protection
            </p>
            <ul className='product-features'>
              <li>Wall mount sensors</li>
              <li>Duct mount sensors</li>
              <li>Wireless options</li>
            </ul>
            <a href='#' className='product-link'>
              View All →
            </a>
          </div>

          <div className='product-card'>
            <div className='product-icon'>⚡</div>
            <h3>Pressure Sensors</h3>
            <p>
              Reliable pressure monitoring for HVAC systems and critical
              environments
            </p>
            <ul className='product-features'>
              <li>Differential pressure</li>
              <li>Static pressure</li>
              <li>Building pressure</li>
            </ul>
            <a href='#' className='product-link'>
              View All →
            </a>
          </div>

          <div className='product-card'>
            <div className='product-icon'>📡</div>
            <h3>Wireless Sensors</h3>
            <p>
              Easy installation with reliable wireless communication protocols
            </p>
            <ul className='product-features'>
              <li>BACnet MS/TP</li>
              <li>Modbus</li>
              <li>LoRaWAN</li>
            </ul>
            <a href='#' className='product-link'>
              View All →
            </a>
          </div>

          <div className='product-card'>
            <div className='product-icon'>🎛️</div>
            <h3>Controls & Accessories</h3>
            <p>
              Complete your building automation system with our control
              solutions
            </p>
            <ul className='product-features'>
              <li>Thermostats</li>
              <li>Actuators</li>
              <li>Power supplies</li>
            </ul>
            <a href='#' className='product-link'>
              View All →
            </a>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className='applications-section'>
        <div className='section-header'>
          <h2 className='section-title'>Applications & Solutions</h2>
          <p className='section-subtitle'>
            Proven solutions across diverse building types and industries
          </p>
        </div>
        <div className='applications-grid'>
          <div className='application-card'>
            <div className='application-image'>
              <img
                src='/images/hospitals-pharmacies-wam.png'
                alt='Healthcare'
                width={400}
                height={300}
              />
            </div>
            <div className='application-content'>
              <h3>Healthcare Facilities</h3>
              <p>
                Critical monitoring for patient comfort, safety, and regulatory
                compliance in hospitals and medical facilities.
              </p>
              <a href='#' className='app-link'>
                Learn More →
              </a>
            </div>
          </div>

          <div className='application-card'>
            <div className='application-image'>
              <img
                src='/images/grocery-stores-wam.png'
                alt='Commercial'
                width={400}
                height={300}
              />
            </div>
            <div className='application-content'>
              <h3>Commercial Buildings</h3>
              <p>
                Optimize energy efficiency and occupant comfort in offices,
                retail spaces, and commercial properties.
              </p>
              <a href='#' className='app-link'>
                Learn More →
              </a>
            </div>
          </div>

          <div className='application-card'>
            <div className='application-image'>
              <img
                src='/images/meat-processors-wam.png'
                alt='Industrial'
                width={400}
                height={300}
              />
            </div>
            <div className='application-content'>
              <h3>Industrial & Manufacturing</h3>
              <p>
                Rugged sensors for demanding environments with precise process
                control requirements.
              </p>
              <a href='#' className='app-link'>
                Learn More →
              </a>
            </div>
          </div>

          <div className='application-card'>
            <div className='application-image'>
              <img
                src='/images/greenhouses-wam.png'
                alt='Specialized'
                width={400}
                height={300}
              />
            </div>
            <div className='application-content'>
              <h3>Specialized Environments</h3>
              <p>
                Custom solutions for data centers, clean rooms, laboratories,
                and controlled agriculture.
              </p>
              <a href='#' className='app-link'>
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='features-section'>
        <div className='features-container'>
          <div className='feature-content'>
            <span className='feature-label'>Why Choose BAPI</span>
            <h2 className='feature-title'>
              Built for Performance & Reliability
            </h2>
            <p className='feature-description'>
              Our sensors are engineered to deliver accurate, consistent
              performance in the most demanding environments.
            </p>
            <div className='feature-list'>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div>
                  <h4>Industry-Leading Accuracy</h4>
                  <p>
                    Precision calibration and quality testing ensure reliable
                    measurements
                  </p>
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div>
                  <h4>Made in USA</h4>
                  <p>
                    Designed, engineered, and manufactured in our Minnesota
                    facility
                  </p>
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div>
                  <h4>5-Year Warranty</h4>
                  <p>
                    Backed by comprehensive warranty and exceptional support
                  </p>
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div>
                  <h4>Protocol Flexibility</h4>
                  <p>
                    Support for BACnet, Modbus, and other major building
                    automation protocols
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='feature-visual'>
            <img
              src='/images/wam-quantum-e1755178852283.png'
              alt='BAPI Product Quality'
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className='resources-section'>
        <div className='section-header'>
          <h2 className='section-title'>Resources & Support</h2>
          <p className='section-subtitle'>
            Everything you need to specify, install, and maintain BAPI products
          </p>
        </div>
        <div className='resources-grid'>
          <div className='resource-card'>
            <div className='resource-icon'>📋</div>
            <h3>Application Notes</h3>
            <p>
              Technical guides and best practices for sensor selection and
              installation
            </p>
            <a href='#' className='resource-link'>
              Browse Library →
            </a>
          </div>
          <div className='resource-card'>
            <div className='resource-icon'>📺</div>
            <h3>Video Tutorials</h3>
            <p>Step-by-step installation and configuration videos</p>
            <a href='#' className='resource-link'>
              Watch Now →
            </a>
          </div>
          <div className='resource-card'>
            <div className='resource-icon'>🛠️</div>
            <h3>Product Configurator</h3>
            <p>Find the perfect sensor for your specific application</p>
            <a href='#' className='resource-link'>
              Get Started →
            </a>
          </div>
          <div className='resource-card'>
            <div className='resource-icon'>💬</div>
            <h3>Technical Support</h3>
            <p>Expert assistance from our engineering team</p>
            <a href='#' className='resource-link'>
              Contact Us →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='cta-section'>
        <div className='cta-container'>
          <h2 className='cta-title'>
            Ready to Upgrade Your Building Automation?
          </h2>
          <p className='cta-description'>
            Connect with our team to find the right sensors for your project
          </p>
          <div className='cta-actions'>
            <button className='btn-primary-large'>Request a Quote</button>
            <button className='btn-secondary-large'>Download Catalog</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-column'>
            <h4>Products</h4>
            <ul>
              <li>
                <a href='#'>Temperature</a>
              </li>
              <li>
                <a href='#'>Air Quality</a>
              </li>
              <li>
                <a href='#'>Humidity</a>
              </li>
              <li>
                <a href='#'>Pressure</a>
              </li>
              <li>
                <a href='#'>Wireless</a>
              </li>
            </ul>
          </div>
          <div className='footer-column'>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href='#'>Application Notes</a>
              </li>
              <li>
                <a href='#'>Videos</a>
              </li>
              <li>
                <a href='#'>Catalog</a>
              </li>
              <li>
                <a href='#'>Configurator</a>
              </li>
            </ul>
          </div>
          <div className='footer-column'>
            <h4>About</h4>
            <ul>
              <li>
                <a href='#'>Company</a>
              </li>
              <li>
                <a href='#'>Careers</a>
              </li>
              <li>
                <a href='#'>News</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='footer-column'>
            <h4>Contact</h4>
            <p>
              750 North Blackhawk Ave
              <br />
              Glendale Heights, IL 60139
            </p>
            <p>Phone: (815) 433-8100</p>
            <p>sales@bapihvac.com</p>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>&copy; 2025 BAPI. All rights reserved.</p>
          <div className='footer-links'>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
