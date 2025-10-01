import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Calendar } from 'lucide-react';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  lastUpdated: string;
  sections: Array<{
    id: string;
    title: string;
  }>;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({
  children,
  title,
  description,
  lastUpdated,
  sections
}) => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>{title} | BLA BLA LLC</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | BLA BLA LLC`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "publisher": {
              "@type": "Organization",
              "name": "BLA BLA LLC"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/logo/bg-logo.png" alt="company logo" className="h-10 w-20 mx-auto transform transition-all duration-700 hover:scale-110" />
                <span className="text-xl font-bold text-gray-900">BLA BLA LLC</span>
              </Link>

              <nav className="hidden md:flex space-x-8">
                <Link
                  to="/privacy-policy"
                  className={`text-sm font-medium transition-colors ${location.pathname === '/privacy-policy'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/cookie-policy"
                  className={`text-sm font-medium transition-colors ${location.pathname === '/cookie-policy'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  Cookie Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className={`text-sm font-medium transition-colors ${location.pathname === '/terms-of-service'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-4">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors focus:outline-none focus:text-blue-600"
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="flex flex-col space-y-3 text-sm">
                    <div className='flex-row'>
                      <div className="space-x-2">
                        <Phone className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <a href="tel:+1-937-910-8131" className="text-gray-600 hover:text-blue-600">
                          +1-937-910-8131
                        </a>
                      </div>
                      <div className="space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <address className="text-gray-600 not-italic">
                          26250 Euclid Ave, 9th Floor<br />
                          Suite #916<br />
                          Euclid, Ohio, 44132, USA
                        </address>
                      </div>
                    </div>
                    <div>
                      <form>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main id="main-content" className="lg:col-span-3">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-8">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      Last updated: {lastUpdated}
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
                  </div>

                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <img src="/logo/bg-logo.png" alt="company logo" className="h-6 w-10" />
                <span className="text-lg font-semibold text-gray-900">BLA BLA LLC</span>
              </div>
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} BLA BLA LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LegalLayout;