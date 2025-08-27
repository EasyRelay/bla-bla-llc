import React from 'react';
import LegalLayout from '../components/legal/LegalLayout';
import LegalSection from '../components/legal/LegalSection';
import Divider from '../components/legal/Divider';

const TermsOfService: React.FC = () => {
  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'eligibility', title: 'Eligibility & Accounts' },
    { id: 'responsibilities', title: 'User Responsibilities' },
    { id: 'prohibited-uses', title: 'Prohibited Uses' },
    { id: 'intellectual-property', title: 'Intellectual Property Rights' },
    { id: 'disclaimer', title: 'Disclaimer & Limitation of Liability' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'amendments', title: 'Amendments to Terms' },
    { id: 'contact', title: 'Contact Information' }
  ];
  window.scrollTo(0,0);

  return (
    <LegalLayout
      title="Terms of Service"
      description="These Terms of Service govern your use of BLA BLA LLC's services and outline the rights and responsibilities of all parties."
      lastUpdated="August 21, 2025"
      sections={sections}
    >
      <LegalSection id="acceptance" title="Acceptance of Terms">
        <p className="mb-4">
          By accessing and using the services provided by BLA BLA LLC ("Company," "we," "us," or "our"), you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
        </p>
        <p className="mb-4">
          These Terms constitute a legally binding agreement between you and BLA BLA LLC regarding your use of our website, applications, and services.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="eligibility" title="Eligibility & Accounts">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Eligibility Requirements</h3>
            <p className="mb-2">To use our services, you must:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Be at least 18 years of age or have parental/guardian consent</li>
              <li>Have the legal capacity to enter into binding agreements</li>
              <li>Provide accurate and complete information when creating an account</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Registration</h3>
            <p className="mb-2">When creating an account, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide truthful, accurate, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your login credentials secure and confidential</li>
              <li>Notify us immediately of any unauthorized account use</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </div>
        </div>
      </LegalSection>

      <Divider />

      <LegalSection id="responsibilities" title="User Responsibilities">
        <p className="mb-4">As a user of our services, you are responsible for:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Using our services in compliance with these Terms and applicable laws</li>
          <li>Respecting the rights of other users and third parties</li>
          <li>Maintaining the security of your account credentials</li>
          <li>Providing accurate information when interacting with our services</li>
          <li>Promptly reporting any security vulnerabilities or abuse</li>
          <li>Paying all applicable fees in a timely manner</li>
          <li>Backing up any important data stored with our services</li>
        </ul>
      </LegalSection>

      <Divider />

      <LegalSection id="prohibited-uses" title="Prohibited Uses">
        <p className="mb-4">You may not use our services for any unlawful purpose or in any way that could damage, disable, or impair our services. Prohibited activities include, but are not limited to:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Illegal Activities</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Violating any applicable laws or regulations</li>
              <li>Engaging in fraudulent or deceptive practices</li>
              <li>Money laundering or financing illegal activities</li>
              <li>Distributing malware, viruses, or harmful code</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Abuse and Harassment</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Harassing, intimidating, or threatening other users</li>
              <li>Publishing or distributing hateful or discriminatory content</li>
              <li>Impersonating other individuals or entities</li>
              <li>Stalking or violating privacy rights</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Violations</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Interfering with or disrupting our services</li>
              <li>Reverse engineering or extracting source code</li>
              <li>Using automated tools to access our services without permission</li>
            </ul>
          </div>
        </div>
      </LegalSection>

      <Divider />

      <LegalSection id="intellectual-property" title="Intellectual Property Rights">
        <p className="mb-4">
          All content, features, and functionality of our services, including but not limited to text, graphics, logos, images, software, and design elements, are owned by BLA BLA LLC or our licensors and are protected by copyright, trademark, and other intellectual property laws.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">License to Use</h3>
            <p className="mb-4">
              We grant you a limited, non-exclusive, non-transferable license to access and use our services for their intended purpose. This license does not include the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Modify, reproduce, or distribute our content</li>
              <li>Create derivative works based on our services</li>
              <li>Use our trademarks or branding without permission</li>
              <li>Remove or alter copyright notices</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Content</h3>
            <p className="mb-4">
              You retain ownership of content you submit to our services. However, by submitting content, you grant us a worldwide, royalty-free license to use, display, and distribute that content in connection with our services.
            </p>
          </div>
        </div>
      </LegalSection>

      <Divider />

      <LegalSection id="disclaimer" title="Disclaimer & Limitation of Liability">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Disclaimer</h3>
            <p className="mb-4">
              Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
            <p className="mb-4">
              To the maximum extent permitted by law, BLA BLA LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, including but not limited to loss of profits, data, or business opportunities.
            </p>
            <p className="mb-4">
              Our total liability to you for any claims arising from these Terms or your use of our services shall not exceed the amount you paid us in the twelve months preceding the claim.
            </p>
          </div>
        </div>
      </LegalSection>

      <Divider />

      <LegalSection id="indemnification" title="Indemnification">
        <p className="mb-4">
          You agree to indemnify, defend, and hold harmless BLA BLA LLC, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses arising from:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Your use of our services in violation of these Terms</li>
          <li>Your violation of any applicable laws or regulations</li>
          <li>Your infringement of third-party intellectual property rights</li>
          <li>Any content you submit or make available through our services</li>
          <li>Your violation of the rights of another party</li>
        </ul>
      </LegalSection>

      <Divider />

      <LegalSection id="governing-law" title="Governing Law">
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of the State of Ohio, United States, without regard to its conflict of law principles.
        </p>
        <p className="mb-4">
          Any legal action or proceeding arising from these Terms shall be brought exclusively in the federal or state courts located in Ohio, and you consent to the personal jurisdiction of such courts.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="amendments" title="Amendments to Terms">
        <p className="mb-4">
          We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last Updated" date.
        </p>
        <p className="mb-4">
          Your continued use of our services after any changes constitutes acceptance of the new Terms. If you do not agree to the modified Terms, you must discontinue use of our services.
        </p>
      </LegalSection>

      <Divider />

      <LegalSection id="contact" title="Contact Information">
        <p className="mb-4">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold text-gray-900 mb-2">BLA BLA LLC</p>
          <p className="text-gray-700 mb-1">26250 Euclid Ave, 9th Floor, Suite #916</p>
          <p className="text-gray-700 mb-1">Euclid, Ohio, 44132, USA</p>
          <p className="text-gray-700 mb-1">Phone: <a href="tel:+1-937-910-8131" className="text-blue-600 hover:text-blue-800">+1-937-910-8131</a></p>
          <p className="text-gray-700">Email: <a href="mailto:legal@blabla.com" className="text-blue-600 hover:text-blue-800">safety@blablallc.com</a></p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
};

export default TermsOfService;