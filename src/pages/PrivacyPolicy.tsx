import React from 'react';
import LegalLayout from '../components/legal/LegalLayout';
import LegalSection from '../components/legal/LegalSection';
import Divider from '../components/legal/Divider';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collect', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'cookies-tracking', title: 'Cookies & Tracking Technologies' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'third-party', title: 'Third-Party Disclosure' },
    { id: 'ringcentral', title: 'RingCentral Integration' },
    { id: 'user-rights', title: 'User Rights & Consent' },
    { id: 'security', title: 'Security Measures' },
    { id: 'policy-changes', title: 'Changes to This Policy' },
    { id: 'contact', title: 'Contact Information' }
  ];
  window.scrollTo(0,0);

  return (
    <LegalLayout
      title="Privacy Policy"
      description="This Privacy Policy describes how BLA BLA LLC collects, uses, and protects your personal information when you use our services."
      lastUpdated="August 21, 2025"
      sections={sections}
    >
      <LegalSection id="introduction" title="Introduction">
        <p className="mb-4">
          At BLA BLA LLC, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <p className="mb-4">
          By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="information-collect" title="Information We Collect">
        <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
          <p className="mb-2">We may collect personally identifiable information such as:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Name and contact information (email address, phone number, mailing address)</li>
            <li>Account credentials (username, password)</li>
            <li>Payment information (billing address, payment method details)</li>
            <li>Professional information (company name, job title)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Information</h3>
          <p className="mb-2">We automatically collect certain information when you use our services:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage patterns (pages visited, time spent, click paths)</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Location data (if permitted by your device settings)</li>
          </ul>
        </div>
      </LegalSection>

      <Divider />

      <LegalSection id="how-we-use" title="How We Use Your Information">
        <p className="mb-4">We use the collected information for various purposes, including:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Providing, operating, and maintaining our services</li>
          <li>Processing transactions and sending related information</li>
          <li>Communicating with you about our services, updates, and promotional offers</li>
          <li>Improving our website and services based on user feedback and usage patterns</li>
          <li>Ensuring security and preventing fraud</li>
          <li>Complying with legal obligations and protecting our rights</li>
          <li>Personalizing your experience and providing relevant content</li>
        </ul>
      </LegalSection>

      <Divider />

      <LegalSection id="cookies-tracking" title="Cookies & Tracking Technologies">
        <p className="mb-4">
          We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. For detailed information about our cookie practices, please refer to our <a href="/cookie-policy" className="text-blue-600 hover:text-blue-800 underline">Cookie Policy</a>.
        </p>
        <p className="mb-4">
          You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our services.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="data-retention" title="Data Retention">
        <p className="mb-4">
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </p>
        <p className="mb-4">
          When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="third-party" title="Third-Party Disclosure">
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Service providers who assist us in operating our website and conducting business</li>
          <li>Legal requirements or to protect rights, property, or safety</li>
          <li>Business transfers (mergers, acquisitions, or asset sales)</li>
          <li>With your explicit consent for specific purposes</li>
        </ul>
      </LegalSection>

      <Divider />

      <LegalSection id="ringcentral" title="RingCentral Integration">
        <p className="mb-4">
          Our service uses RingCentral's APIs to facilitate communication. When you connect your RingCentral account, we may access and use data such as:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Your RingCentral account information</li>
          <li>Call and message metadata (not message content)</li>
          <li>Contact and directory information</li>
        </ul>
        <p className="mb-4">
          This data is not shared with third parties except as required to operate the service.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="user-rights" title="User Rights & Consent">
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Access, update, or delete your personal information</li>
          <li>Object to processing of your personal information</li>
          <li>Request restriction of processing</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
          <li>File a complaint with supervisory authorities</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us using the information provided in the Contact section below.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="security" title="Security Measures">
        <p className="mb-4">
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Encryption of sensitive data in transit and at rest</li>
          <li>Regular security assessments and updates</li>
          <li>Access controls and authentication mechanisms</li>
          <li>Employee training on data protection practices</li>
          <li>Incident response procedures</li>
        </ul>
      </LegalSection>

      <Divider />

      <LegalSection id="policy-changes" title="Changes to This Policy">
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
        <p className="mb-4">
          We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="contact" title="Contact Information">
        <p className="mb-4">
          If you have any questions about this Privacy Policy or our data practices, please contact us:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold text-gray-900 mb-2">BLA BLA LLC</p>
          <p className="text-gray-700 mb-1">26250 Euclid Ave, 9th Floor, Suite #916</p>
          <p className="text-gray-700 mb-1">Euclid, Ohio, 44132, USA</p>
          <p className="text-gray-700 mb-1">Phone: <a href="tel:+1-937-910-8131" className="text-blue-600 hover:text-blue-800">+1-937-910-8131</a></p>
          <p className="text-gray-700">Email: <a href="mailto:privacy@blabla.com" className="text-blue-600 hover:text-blue-800">safety@blablallc.com</a></p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
};

export default PrivacyPolicy;