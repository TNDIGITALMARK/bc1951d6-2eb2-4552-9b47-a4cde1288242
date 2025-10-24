export const dynamic = 'force-dynamic'

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-8 text-[hsl(var(--primary))]">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                Prime Detailing Co. collects personal information necessary to provide our automotive detailing services, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Name, phone number, and email address for appointment scheduling</li>
                <li>Vehicle information to customize our services</li>
                <li>Service preferences and special requests</li>
                <li>Payment information processed through secure third-party processors</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use your personal information to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Schedule and confirm detailing appointments</li>
                <li>Communicate about your service status</li>
                <li>Send appointment reminders and follow-ups</li>
                <li>Process payments securely</li>
                <li>Improve our services based on customer feedback</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information Protection</h2>
              <p className="text-gray-700 mb-4">
                We implement industry-standard security measures to protect your personal information. Your data is stored securely and accessed only by authorized personnel for legitimate business purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or transfer your personal information to third parties except as necessary to provide our services (e.g., payment processing) or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                For privacy-related questions or requests, please contact us at:
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Prime Detailing Co.</strong><br />
                123 Auto Plaza<br />
                Downtown Metro Area, CA 90210<br />
                Phone: (555) 123-4567<br />
                Email: privacy@primedetailing.com
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
