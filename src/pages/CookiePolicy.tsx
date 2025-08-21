import React from 'react';
import LegalLayout from '../components/legal/LegalLayout';
import LegalSection from '../components/legal/LegalSection';
import Divider from '../components/legal/Divider';

const CookiePolicy: React.FC = () => {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-are-cookies', title: 'What Are Cookies' },
    { id: 'types-of-cookies', title: 'Types of Cookies Used' },
    { id: 'purpose-of-cookies', title: 'Purpose of Cookies' },
    { id: 'managing-preferences', title: 'Managing Cookie Preferences' },
    { id: 'third-party-cookies', title: 'Third-Party Cookies' },
    { id: 'policy-updates', title: 'Policy Updates' },
    { id: 'contact', title: 'Contact' }
  ];
  window.scrollTo(0,0);

  return (
    <LegalLayout
      title="Cookie Policy"
      description="This Cookie Policy explains how BLA BLA LLC uses cookies and similar technologies to provide and improve our services."
      lastUpdated="August 21, 2025"
      sections={sections}
    >
      <LegalSection id="introduction" title="Introduction">
        <p className="mb-4">
          This Cookie Policy explains how BLA BLA LLC ("we," "us," or "our") uses cookies and similar tracking technologies on our website and services. This policy should be read alongside our <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>.
        </p>
        <p className="mb-4">
          By continuing to use our website, you consent to our use of cookies as described in this policy.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="what-are-cookies" title="What Are Cookies">
        <p className="mb-4">
          Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
        </p>
        <p className="mb-4">
          Cookies can be "persistent" (remaining on your device until deleted or expired) or "session" (deleted when you close your browser).
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="types-of-cookies" title="Types of Cookies Used">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
            <p className="mb-2">
              These cookies are necessary for the website to function properly and cannot be disabled.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Authentication and security cookies</li>
              <li>Session management cookies</li>
              <li>Load balancing cookies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Cookies</h3>
            <p className="mb-2">
              These cookies help us understand how visitors interact with our website by collecting anonymous information.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google Analytics cookies</li>
              <li>Page load time measurement</li>
              <li>Error tracking cookies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
            <p className="mb-2">
              These cookies enable enhanced functionality and personalization.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Language preference cookies</li>
              <li>User interface customization</li>
              <li>Remember user choices</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
            <p className="mb-2">
              These cookies are used to deliver relevant advertisements and track advertising campaign effectiveness.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Advertising targeting cookies</li>
              <li>Social media cookies</li>
              <li>Conversion tracking cookies</li>
            </ul>
          </div>
        </div>
      </LegalSection>

      <Divider />

      <LegalSection id="purpose-of-cookies" title="Purpose of Cookies">
        <p className="mb-4">We use cookies for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Website functionality:</strong> To ensure our website operates correctly and securely</li>
          <li><strong>User experience:</strong> To remember your preferences and provide personalized content</li>
          <li><strong>Analytics:</strong> To understand website usage patterns and improve our services</li>
          <li><strong>Security:</strong> To protect against fraudulent activity and maintain account security</li>
          <li><strong>Marketing:</strong> To deliver relevant advertisements and measure campaign effectiveness</li>
        </ul>
      </LegalSection>

      <Divider />

      <LegalSection id="managing-preferences" title="Managing Cookie Preferences">
        <p className="mb-4">
          You have several options for managing cookies:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Browser Settings</h3>
            <p className="mb-2">
              Most web browsers allow you to control cookies through their settings preferences. You can:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Block all cookies</li>
              <li>Allow only essential cookies</li>
              <li>Delete existing cookies</li>
              <li>Set notifications when cookies are being sent</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Browser-Specific Instructions</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Chrome:</strong> Settings {' > '} Advanced {' > '} Privacy and security {' > '} Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options {' > '} Privacy & Security {' > '} Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences {' > '} Privacy {' > '} Cookies and website data</li>
              <li><strong>Edge:</strong> Settings {' > '} Cookies and site permissions {' > '} Cookies and site data</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Disabling cookies may affect the functionality of our website and your user experience.
          </p>
        </div>
      </LegalSection>

      <Divider />

      <LegalSection id="third-party-cookies" title="Third-Party Cookies">
        <p className="mb-4">
          We may allow third-party service providers to place cookies on your device to help us analyze website usage and provide targeted advertising. These third parties include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Google Analytics:</strong> For website analytics and performance measurement</li>
          <li><strong>Social Media Platforms:</strong> For social sharing functionality and targeted advertising</li>
          <li><strong>Advertising Networks:</strong> For delivering relevant advertisements</li>
        </ul>
        <p className="mb-4">
          These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information about their data collection practices.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="policy-updates" title="Policy Updates">
        <p className="mb-4">
          We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date.
        </p>
        <p className="mb-4">
          We encourage you to review this policy periodically to stay informed about our cookie practices.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="contact" title="Contact">
        <p className="mb-4">
          If you have any questions about this Cookie Policy or our use of cookies, please contact us:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold text-gray-900 mb-2">BLA BLA LLC</p>
          <p className="text-gray-700 mb-1">26250 Euclid Ave, 9th Floor, Suite #916</p>
          <p className="text-gray-700 mb-1">Euclid, Ohio, 44132, USA</p>
          <p className="text-gray-700 mb-1">Phone: <a href="tel:+1-305-636-8257" className="text-blue-600 hover:text-blue-800">+1-305-636-8257</a></p>
          <p className="text-gray-700">Email: <a href="mailto:safety@blablallc.com" className="text-blue-600 hover:text-blue-800">safety@blablallc.com</a></p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
};

export default CookiePolicy;