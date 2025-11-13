import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function HomeV2() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Head>
        <title>BAPI - Building Automation & Controls | Modern Design</title>
        <meta
          name="description"
          content="Industry-leading building automation sensors and controls for HVAC systems"
        />
        {/* Tailwind CDN - only loads on this page */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      'bapi-blue': '#0066cc',
                      'bapi-blue-dark': '#004999',
                      'bapi-yellow': '#ffc843',
                    }
                  }
                }
              }
            `,
          }}
        />
      </Head>

      <div className={isDark ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                  <Image
                    src="/images/bapi-logo.svg"
                    alt="BAPI"
                    width={120}
                    height={42}
                    priority
                  />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-bapi-blue dark:hover:text-bapi-yellow transition-colors font-medium">
                    Products
                  </a>
                  <a href="#solutions" className="text-gray-700 dark:text-gray-300 hover:text-bapi-blue dark:hover:text-bapi-yellow transition-colors font-medium">
                    Solutions
                  </a>
                  <a href="#resources" className="text-gray-700 dark:text-gray-300 hover:text-bapi-blue dark:hover:text-bapi-yellow transition-colors font-medium">
                    Resources
                  </a>
                  <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-bapi-blue dark:hover:text-bapi-yellow transition-colors font-medium">
                    About
                  </a>
                  <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-bapi-blue dark:hover:text-bapi-yellow transition-colors font-medium">
                    Contact
                  </a>
                </div>

                {/* Theme Toggle & CTA */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle theme"
                  >
                    {isDark ? (
                      <svg className="w-5 h-5 text-bapi-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    )}
                  </button>
                  <button className="px-6 py-2.5 bg-bapi-yellow hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Hero Content */}
                <div className="space-y-6">
                  <span className="inline-block px-4 py-2 bg-bapi-yellow text-gray-900 rounded-full text-sm font-bold uppercase tracking-wide">
                    Building Automation Excellence
                  </span>
                  <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                    Precision Sensors for
                    <span className="block text-bapi-blue dark:text-bapi-yellow mt-2">
                      Smarter Buildings
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    Industry-leading HVAC sensors and building automation controls trusted by engineers worldwide. Delivering accurate, reliable performance for over 30 years.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="px-8 py-4 bg-bapi-blue hover:bg-bapi-blue-dark text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Explore Products
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-bapi-yellow text-gray-900 dark:text-white hover:bg-bapi-yellow hover:text-gray-900 font-bold rounded-lg transition-all">
                      View Solutions
                    </button>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 pt-8">
                    <div>
                      <div className="text-4xl font-black text-bapi-blue dark:text-bapi-yellow">30+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-bapi-blue dark:text-bapi-yellow">500K+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Sensors Deployed</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-bapi-blue dark:text-bapi-yellow">50+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Countries</div>
                    </div>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-bapi-blue to-bapi-blue-dark dark:from-gray-800 dark:to-gray-900 p-8">
                    <Image
                      src="/images/wam-sensors-with-gateway.png"
                      alt="BAPI Sensors"
                      width={600}
                      height={500}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-bapi-yellow rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-bapi-blue rounded-full blur-3xl opacity-30"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Categories */}
          <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                  Product Categories
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Comprehensive building automation solutions for every application
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: '🌡️', title: 'Temperature Sensors', desc: 'Precision temperature monitoring for optimal climate control' },
                  { icon: '💨', title: 'Air Quality Sensors', desc: 'Monitor CO2, VOC, and particulate matter for healthier environments' },
                  { icon: '💧', title: 'Humidity Sensors', desc: 'Accurate humidity measurement for comfort and protection' },
                  { icon: '⚡', title: 'Pressure Sensors', desc: 'Reliable pressure monitoring for HVAC systems' },
                  { icon: '📡', title: 'Wireless Sensors', desc: 'Easy installation with reliable wireless protocols' },
                  { icon: '🎛️', title: 'Controls & Accessories', desc: 'Complete your building automation system' },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 hover:border-bapi-yellow"
                  >
                    <div className="text-5xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {product.desc}
                    </p>
                    <a href="#" className="inline-flex items-center text-bapi-blue dark:text-bapi-yellow font-bold hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-4 py-2 bg-bapi-yellow text-gray-900 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                    Why Choose BAPI
                  </span>
                  <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
                    Built for Performance & Reliability
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    Our sensors are engineered to deliver accurate, consistent performance in the most demanding environments.
                  </p>

                  <div className="space-y-6">
                    {[
                      { title: 'Industry-Leading Accuracy', desc: 'Precision calibration and quality testing ensure reliable measurements' },
                      { title: 'Made in USA', desc: 'Designed, engineered, and manufactured in our Minnesota facility' },
                      { title: '5-Year Warranty', desc: 'Backed by comprehensive warranty and exceptional support' },
                      { title: 'Protocol Flexibility', desc: 'Support for BACnet, Modbus, and other major protocols' },
                    ].map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-bapi-yellow rounded-full flex items-center justify-center font-black text-gray-900">
                          ✓
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/images/wam-quantum-e1755178852283.png"
                    alt="BAPI Product Quality"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6 bg-gradient-to-r from-bapi-blue to-bapi-blue-dark dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Upgrade Your Building Automation?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Connect with our team to find the right sensors for your project
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-4 bg-bapi-yellow hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                  Request a Quote
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-bapi-blue font-bold rounded-lg transition-all">
                  Download Catalog
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 bg-gray-900 dark:bg-black text-gray-400">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h4 className="text-white font-bold mb-4">Products</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-bapi-yellow transition-colors">Temperature</a></li>
                    <li><a href="#" className="hover:text-bapi-yellow transition-colors">Air Quality</a></li>
                    <li><a href="#" className="hover:text-bapi-yellow transition-colors">Humidity</a></li>
                    <li><a href="#" className="hover:text-bapi-yellow transition-colors">Pressure</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4">Resources</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-bapi-yellow transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-bapi-yellow transition-colors">Videos</a></li>
                    <li><a href="#" className="hover:text-bapi-yellow transition-colors">Support</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4">Company</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-bapi-yellow transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-bapi-yellow transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-bapi-yellow transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4">Contact</h4>
                  <p className="text-sm mb-2">750 North Blackhawk Ave</p>
                  <p className="text-sm mb-2">Glendale Heights, IL 60139</p>
                  <p className="text-sm">Phone: (815) 433-8100</p>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-8 text-center text-sm">
                <p>&copy; 2025 BAPI. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
