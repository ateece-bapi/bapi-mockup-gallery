import type { NextPage } from 'next';
import Head from 'next/head';

const LandingAV2: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WAM — Solution-Focused Landing</title>
      </Head>

      <main>
        {/* Hero: Problem-Focused */}
        <section className='hero solutionHero'>
          <div className='container heroContent'>
            <div className='heroText'>
              <div className='heroLogo'>
                <img
                  src='/images/wam-logo.png'
                  alt='WAM - Wireless Asset Monitoring'
                  width={180}
                  height={60}
                />
              </div>
              <div className='eyebrow'>ASSET PROTECTION SOLUTIONS</div>
              <h1>
                Equipment failures costing you thousands?
                <br />
                <span className='highlight'>Get ahead of the problem.</span>
              </h1>
              <p className='lead'>
                Stop reacting to costly breakdowns. Our real-time monitoring
                solutions help facility managers prevent equipment failures,
                reduce downtime, and protect critical assets—before problems
                escalate.
              </p>
              <div className='heroStats'>
                <div className='stat'>
                  <strong>40%</strong>
                  <span>Average reduction in unplanned downtime</span>
                </div>
                <div className='stat'>
                  <strong>$50K+</strong>
                  <span>Typical annual savings per facility</span>
                </div>
                <div className='stat'>
                  <strong>24/7</strong>
                  <span>Continuous protection and monitoring</span>
                </div>
              </div>
              <div className='heroCtas'>
                <button className='btn'>See Your Potential ROI</button>
                <button className='secondary'>Speak to a Specialist</button>
              </div>
            </div>
            <div className='heroMedia'>
              <img
                src='/images/wam-devices.png'
                alt='Complete facility monitoring solution with sensors and gateway'
                width={600}
                height={450}
              />
            </div>
          </div>
        </section>

        {/* Business Outcomes Section */}
        <section className='container section outcomes'>
          <div className='sectionHeader'>
            <h2 className='reveal'>Outcomes that matter to your business</h2>
            <p className='muted reveal'>
              Our clients don't just monitor equipment—they transform their
              operations with measurable results.
            </p>
          </div>

          <div className='outcomeGrid'>
            <article className='outcomeCard reveal'>
              <div className='outcomeIcon'>🛡️</div>
              <h3>Prevent Costly Failures</h3>
              <p className='muted'>
                Get real-time alerts on temperature fluctuations, humidity
                changes, and equipment anomalies—so you can intervene before
                minor issues become major failures.
              </p>
              <div className='outcomeMetric'>
                <strong>85%</strong> of critical failures prevented
              </div>
            </article>

            <article className='outcomeCard reveal'>
              <div className='outcomeIcon'>📉</div>
              <h3>Reduce Operational Costs</h3>
              <p className='muted'>
                Eliminate emergency repairs, optimize energy usage, and extend
                equipment lifespan with predictive insights and proactive
                maintenance scheduling.
              </p>
              <div className='outcomeMetric'>
                <strong>30-45%</strong> reduction in maintenance costs
              </div>
            </article>

            <article className='outcomeCard reveal'>
              <div className='outcomeIcon'>⏱️</div>
              <h3>Minimize Downtime</h3>
              <p className='muted'>
                Keep your operations running smoothly with continuous
                monitoring. When issues arise, you'll know immediately—not after
                the damage is done.
              </p>
              <div className='outcomeMetric'>
                <strong>99.8%</strong> uptime achieved by clients
              </div>
            </article>

            <article className='outcomeCard reveal'>
              <div className='outcomeIcon'>📊</div>
              <h3>Make Data-Driven Decisions</h3>
              <p className='muted'>
                Access historical trends, compliance reports, and performance
                analytics to optimize your asset management strategy and
                demonstrate ROI to stakeholders.
              </p>
              <div className='outcomeMetric'>
                <strong>100%</strong> visibility across all assets
              </div>
            </article>
          </div>
        </section>

        {/* Social Proof / Case Study Highlight */}
        <section className='container section caseStudy'>
          <div className='caseStudyContent'>
            <div className='caseStudyQuote'>
              <blockquote>
                "Within 3 months of implementing WAM's monitoring solution, we
                identified and prevented what would have been a $75,000 HVAC
                system failure. The ROI was immediate."
              </blockquote>
              <div className='attribution'>
                <strong>Michael Chen</strong>
                <span>Facilities Director, National Retail Chain</span>
              </div>
            </div>
            <div className='caseStudyMetrics'>
              <div className='metric'>
                <strong>$220K</strong>
                <span>Annual savings achieved</span>
              </div>
              <div className='metric'>
                <strong>3 months</strong>
                <span>Time to full ROI</span>
              </div>
              <div className='metric'>
                <strong>147 locations</strong>
                <span>Now monitored 24/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution / How It Works */}
        <section className='container section howItWorks'>
          <div className='sectionHeader'>
            <h2 className='reveal'>How our solution protects your assets</h2>
            <p className='muted reveal'>
              A comprehensive approach to asset monitoring that integrates
              seamlessly with your existing operations.
            </p>
          </div>

          <div className='processGrid'>
            <div className='processStep reveal'>
              <div className='stepNumber'>1</div>
              <h4>Discovery & Assessment</h4>
              <p className='muted'>
                Our specialists evaluate your facility, identify critical
                assets, and understand your specific risks and priorities.
              </p>
            </div>

            <div className='processStep reveal'>
              <div className='stepNumber'>2</div>
              <h4>Custom Solution Design</h4>
              <p className='muted'>
                We design a tailored monitoring system with the right sensors,
                alerts, and integrations for your unique environment.
              </p>
            </div>

            <div className='processStep reveal'>
              <div className='stepNumber'>3</div>
              <h4>Seamless Implementation</h4>
              <p className='muted'>
                Professional installation with minimal disruption. Wireless
                sensors deploy quickly without complex wiring or downtime.
              </p>
            </div>

            <div className='processStep reveal'>
              <div className='stepNumber'>4</div>
              <h4>24/7 Monitoring & Alerts</h4>
              <p className='muted'>
                Real-time data flows to your dashboard. Instant alerts notify
                you of anomalies via email, SMS, or your building management
                system.
              </p>
            </div>

            <div className='processStep reveal'>
              <div className='stepNumber'>5</div>
              <h4>Ongoing Optimization</h4>
              <p className='muted'>
                Continuous support and system refinement. We help you maximize
                ROI and adapt to changing operational needs.
              </p>
            </div>
          </div>

          <div className='howItWorksVisual'>
            <img
              src='/images/wam-sensors-with-gateway.png'
              alt='Solution workflow diagram'
              width={1000}
              height={400}
            />
          </div>
        </section>

        {/* Industries / Use Cases */}
        <section className='container section industries'>
          <div className='sectionHeader'>
            <h2 className='reveal'>Solutions for your industry</h2>
            <p className='muted reveal'>
              Proven protection across diverse environments and critical
              applications.
            </p>
          </div>

          <div className='industryGrid'>
            <article className='industryCard reveal'>
              <img
                src='/images/hospitals-pharmacies-wam.png'
                alt='Healthcare facilities'
                width={400}
                height={250}
              />
              <h4>Healthcare Facilities</h4>
              <p className='muted'>
                Protect pharmaceuticals, labs, and patient comfort with
                validated temperature and humidity monitoring.
              </p>
              <a href='#' className='link'>
                View healthcare solutions →
              </a>
            </article>

            <article className='industryCard reveal'>
              <img
                src='/images/meat-processors-wam.png'
                alt='Manufacturing plants'
                width={400}
                height={250}
              />
              <h4>Manufacturing</h4>
              <p className='muted'>
                Ensure production quality, equipment reliability, and compliance
                with environmental monitoring.
              </p>
              <a href='#' className='link'>
                View manufacturing solutions →
              </a>
            </article>

            <article className='industryCard reveal'>
              <img
                src='/images/greenhouses-wam.png'
                alt='Greenhouses and controlled environments'
                width={400}
                height={250}
              />
              <h4>Greenhouses & Controlled Environments</h4>
              <p className='muted'>
                Maintain optimal conditions for servers and prevent catastrophic
                failures in mission-critical environments.
              </p>
              <a href='#' className='link'>
                View data center solutions →
              </a>
            </article>

            <article className='industryCard reveal'>
              <img
                src='/images/grocery-stores-wam.png'
                alt='Grocery and retail'
                width={400}
                height={250}
              />
              <h4>Grocery & Retail</h4>
              <p className='muted'>
                Reduce HVAC costs, prevent tenant complaints, and protect
                building infrastructure across your portfolio.
              </p>
              <a href='#' className='link'>
                View commercial solutions →
              </a>
            </article>
          </div>
        </section>

        {/* The Technology (Products positioned as enablers) */}
        <section className='container section technology'>
          <div className='sectionHeader'>
            <h2 className='reveal'>
              Enterprise-grade technology that delivers
            </h2>
            <p className='muted reveal'>
              Our solution is powered by field-proven sensors, flexible outputs,
              and easy integration—designed for reliability in demanding
              environments.
            </p>
          </div>

          <div className='techFeatures'>
            <div className='techFeature reveal'>
              <div className='featureVisual'>
                <img
                  src='/images/wam-quantum-e1755178852283.png'
                  alt='WAM monitoring devices'
                  width={500}
                  height={300}
                />
              </div>
              <div className='featureContent'>
                <h3>Industrial-Grade Sensors</h3>
                <p className='muted'>
                  High-accuracy temperature and humidity sensing with long-term
                  stability. IP-rated enclosures for harsh environments.
                  Field-replaceable components for easy maintenance.
                </p>
                <ul className='featureList'>
                  <li>±0.3°F temperature accuracy</li>
                  <li>±2% RH humidity accuracy</li>
                  <li>10+ year sensor lifespan</li>
                  <li>-40°F to 185°F operating range</li>
                </ul>
              </div>
            </div>

            <div className='techFeature reveal'>
              <div className='featureContent'>
                <h3>Flexible Integration</h3>
                <p className='muted'>
                  Multiple output options (0–10V, 4–20mA, Modbus) ensure
                  compatibility with your existing building management systems,
                  PLCs, and control platforms.
                </p>
                <ul className='featureList'>
                  <li>Works with any BMS/BAS system</li>
                  <li>Cloud and on-premise options</li>
                  <li>RESTful API for custom integrations</li>
                  <li>Legacy system compatibility</li>
                </ul>
              </div>
              <div className='featureVisual'>
                <img
                  src='/images/wam-gateway-1-e1755179749955.png'
                  alt='Integration capabilities'
                  width={500}
                  height={300}
                />
              </div>
            </div>

            <div className='techFeature reveal'>
              <div className='featureVisual'>
                <img
                  src='/images/ble-scanner-app-phone.png'
                  alt='Monitoring dashboard'
                  width={500}
                  height={300}
                />
              </div>
              <div className='featureContent'>
                <h3>Intelligent Platform</h3>
                <p className='muted'>
                  Intuitive dashboards, customizable alerts, and powerful
                  analytics give you complete visibility and control from
                  anywhere.
                </p>
                <ul className='featureList'>
                  <li>Real-time monitoring and alerts</li>
                  <li>Historical data and trending</li>
                  <li>Automated compliance reports</li>
                  <li>Mobile app for on-the-go access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className='container section trust'>
          <div className='sectionHeader'>
            <h2 className='reveal'>Trusted by leading organizations</h2>
          </div>
          <div className='trustLogos'>
            <img src='/images/logo-client-1.png' alt='Client logo' />
            <img src='/images/logo-client-2.png' alt='Client logo' />
            <img src='/images/logo-client-3.png' alt='Client logo' />
            <img src='/images/logo-client-4.png' alt='Client logo' />
            <img src='/images/logo-client-5.png' alt='Client logo' />
            <img src='/images/logo-client-6.png' alt='Client logo' />
          </div>
          <div className='certifications'>
            <div className='cert'>ISO 9001 Certified</div>
            <div className='cert'>UL Listed</div>
            <div className='cert'>FDA 21 CFR Part 11 Compliant</div>
            <div className='cert'>ASHRAE Standard 55</div>
          </div>
        </section>

        {/* Final CTA */}
        <section className='container section finalCta'>
          <div className='ctaBox'>
            <h2>Ready to protect your assets and reduce costs?</h2>
            <p className='lead'>
              Schedule a consultation with our specialists to see how our
              solution can deliver measurable results for your facility.
            </p>
            <div className='ctaActions'>
              <button className='btn large'>Schedule a Consultation</button>
              <button className='secondary large'>Calculate Your ROI</button>
            </div>
            <p className='disclaimer'>
              No obligation. Free assessment of your monitoring needs and
              potential savings.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingAV2;
