import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6 text-center">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Pupps ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700">
                These Terms of Service govern your use of our website and services related to pet adoption facilitation. By using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                Pupps is an online platform that connects potential pet adopters with animal shelters, rescue organizations, and pet owners looking to rehome their pets. Our services include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Pet listing and search functionality</li>
                <li>Communication facilitation between adopters and pet providers</li>
                <li>Educational resources about pet care and adoption</li>
                <li>Support services for the adoption process</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a user of Pupps, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate and truthful information about yourself and any pets</li>
                <li>Comply with all applicable laws and regulations regarding pet ownership</li>
                <li>Treat all animals with care, respect, and responsibility</li>
                <li>Not use the platform for commercial breeding or selling purposes</li>
                <li>Respect the privacy and rights of other users</li>
                <li>Not engage in fraudulent, abusive, or harmful activities</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Adoption Process and Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                <strong>For Adopters:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>You must be at least 18 years old to adopt a pet</li>
                <li>You agree to provide a safe, loving, and permanent home for the pet</li>
                <li>You will comply with all adoption requirements set by shelters or current owners</li>
                <li>You understand that adoption fees may apply and are non-refundable</li>
                <li>You agree to provide proper veterinary care for the adopted pet</li>
              </ul>
              
              <p className="text-gray-700 mb-4">
                <strong>For Pet Providers (Shelters/Owners):</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You must have legal authority to rehome the pet</li>
                <li>You will provide accurate information about the pet's health, behavior, and history</li>
                <li>You will conduct appropriate screening of potential adopters</li>
                <li>You will ensure all necessary medical records and documentation are provided</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Prohibited Uses</h2>
              <p className="text-gray-700 mb-4">
                You may not use Pupps for any of the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Commercial breeding or puppy mill operations</li>
                <li>Selling pets for profit rather than rehoming</li>
                <li>Animal fighting, abuse, or neglect</li>
                <li>Fraudulent activities or misrepresentation</li>
                <li>Harassment or threatening behavior toward other users</li>
                <li>Posting false, misleading, or inappropriate content</li>
                <li>Attempting to circumvent our security measures</li>
                <li>Using automated systems to access our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Content and Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                <strong>User Content:</strong> You retain ownership of content you post on Pupps, but you grant us a license to use, display, and distribute this content on our platform.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Platform Content:</strong> All content on Pupps, including text, graphics, logos, and software, is owned by us or our licensors and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, or create derivative works from our content without explicit permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Disclaimers and Limitations</h2>
              <p className="text-gray-700 mb-4">
                <strong>Service Availability:</strong> We strive to maintain our service, but we cannot guarantee uninterrupted access or error-free operation.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Third-Party Content:</strong> We are not responsible for the accuracy of information provided by shelters, rescue organizations, or individual users.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Adoption Outcomes:</strong> While we facilitate connections, we are not responsible for the success or failure of individual adoptions.
              </p>
              <p className="text-gray-700">
                <strong>Limitation of Liability:</strong> Our liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Account Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate or suspend your account at any time for violations of these terms or for any other reason we deem appropriate.
              </p>
              <p className="text-gray-700">
                You may also terminate your account at any time by contacting us. Upon termination, your right to use the service will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
              <p className="text-gray-700">
                These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which Pupps operates, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on our website. Your continued use of the service after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> legal@Pupps.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> (555) PET-LOVE</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Pet Street, Animal City, AC 12345</p>
              </div>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-8">
              <p className="text-blue-800">
                <strong>Important:</strong> By using Pupps, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;