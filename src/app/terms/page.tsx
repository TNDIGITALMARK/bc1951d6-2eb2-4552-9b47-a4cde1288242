export const dynamic = 'force-dynamic'

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-8 text-[hsl(var(--primary))]">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Service Agreement</h2>
              <p className="text-gray-700 mb-4">
                By booking services with Prime Detailing Co., you agree to the following terms and conditions. These terms govern the provision of automotive detailing services at our facility or mobile service locations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Appointment & Scheduling</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Appointments must be scheduled in advance through our online booking system or by phone</li>
                <li>We require 24-hour notice for cancellations to avoid a $50 cancellation fee</li>
                <li>Service times are estimates and may vary based on vehicle condition</li>
                <li>We reserve the right to refuse service if vehicle condition poses safety concerns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Payment is due upon service completion unless otherwise arranged</li>
                <li>We accept major credit cards, debit cards, and cash</li>
                <li>Prices are subject to change; quoted prices are guaranteed at time of booking</li>
                <li>Additional services requested during appointment will be charged separately</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Liability & Insurance</h2>
              <p className="text-gray-700 mb-4">
                Prime Detailing Co. is fully insured and bonded. While we exercise utmost care:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We are not responsible for pre-existing vehicle damage</li>
                <li>Fragile or worn components (cracked trim, faded paint) will be noted before service</li>
                <li>Any concerns should be reported immediately upon service completion</li>
                <li>Claims must be filed within 48 hours of service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Satisfaction Guarantee</h2>
              <p className="text-gray-700 mb-4">
                We stand behind our work with a 100% satisfaction guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>If you're not satisfied with any aspect of our service, notify us within 48 hours</li>
                <li>We will re-perform the service or provide a refund at our discretion</li>
                <li>Ceramic coating and protection services carry a 6-month warranty against defects</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Customer Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Remove all valuables from your vehicle before service</li>
                <li>Inform us of any vehicle issues, alarms, or special instructions</li>
                <li>Ensure your vehicle is accessible at the scheduled time</li>
                <li>Provide accurate contact information for appointment coordination</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                Prime Detailing Co. reserves the right to modify these terms at any time. Changes will be posted on our website with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-700">
                For questions about these terms, please contact us:
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Prime Detailing Co.</strong><br />
                123 Auto Plaza<br />
                Downtown Metro Area, CA 90210<br />
                Phone: (555) 123-4567<br />
                Email: info@primedetailing.com
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
