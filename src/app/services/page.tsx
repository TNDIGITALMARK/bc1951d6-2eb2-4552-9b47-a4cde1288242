export const dynamic = 'force-dynamic'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, Clock, Shield, Sparkles, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  const packages = [
    {
      name: 'Basic Wash & Wax',
      price: '$89',
      duration: '2 hours',
      features: [
        'Exterior hand wash with premium soap',
        'Clay bar treatment for smooth finish',
        'Protective wax application',
        'Wheel and tire cleaning',
        'Window cleaning (interior & exterior)',
        'Tire dressing for showroom shine',
      ],
      popular: false,
    },
    {
      name: 'Premium Detail Package',
      price: '$189',
      duration: '4 hours',
      features: [
        'Everything in Basic Package',
        'Interior deep clean and vacuum',
        'Leather conditioning and protection',
        'Paint correction (minor swirl removal)',
        'Dashboard and console restoration',
        'Door jamb and trunk detailing',
        'Engine bay cleaning',
      ],
      popular: true,
    },
    {
      name: 'Ultimate Protection',
      price: '$299',
      duration: 'Full day',
      features: [
        'Everything in Premium Package',
        'Ceramic coating application',
        'Multi-stage paint correction',
        '6-month protection warranty',
        'Headlight restoration',
        'Complete interior sanitization',
        'Premium fabric/leather protectant',
        'Free maintenance wash (monthly for 3 months)',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--primary))] text-white py-24 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Services & Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Choose the perfect detailing package for your vehicle. All services include our satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl ${
                  pkg.popular ? 'ring-4 ring-[hsl(var(--primary-blue))] scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-[hsl(var(--primary-blue))] text-white text-center py-2 font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold mb-2 text-[hsl(var(--primary))]">{pkg.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold text-[hsl(var(--primary-blue))]">{pkg.price}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{pkg.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-[hsl(var(--primary-blue))] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-[hsl(var(--primary-blue))] text-white hover:bg-[hsl(204,70%,43%)]'
                        : 'bg-[hsl(var(--secondary))] text-[hsl(var(--primary))] hover:bg-[hsl(200,56%,80%)]'
                    }`}
                  >
                    BOOK THIS PACKAGE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Prime Detailing?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our professional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-[hsl(var(--secondary))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[hsl(var(--primary-blue))]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">12 Years Experience</h3>
              <p className="text-gray-600">
                ASE-certified with over a decade of professional automotive detailing expertise
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-[hsl(var(--secondary))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[hsl(var(--primary-blue))]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Products</h3>
              <p className="text-gray-600">
                We use only the finest professional-grade products for exceptional results
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-[hsl(var(--secondary))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-[hsl(var(--primary-blue))]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                Fully insured and bonded with a 100% satisfaction guarantee on all services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">
              Enhance your package with these premium add-ons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2">Headlight Restoration</h4>
              <p className="text-[hsl(var(--primary-blue))] font-bold mb-2">$49</p>
              <p className="text-gray-600 text-sm">Remove oxidation and restore clarity</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2">Pet Hair Removal</h4>
              <p className="text-[hsl(var(--primary-blue))] font-bold mb-2">$39</p>
              <p className="text-gray-600 text-sm">Deep extraction of stubborn pet hair</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2">Odor Elimination</h4>
              <p className="text-[hsl(var(--primary-blue))] font-bold mb-2">$59</p>
              <p className="text-gray-600 text-sm">Complete interior deodorization treatment</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2">Paint Protection Film</h4>
              <p className="text-[hsl(var(--primary-blue))] font-bold mb-2">Starting at $499</p>
              <p className="text-gray-600 text-sm">Ultimate protection for high-impact areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(var(--secondary))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule your appointment online in just a few clicks
          </p>
          <Link
            href="/booking"
            className="bg-[hsl(var(--primary-blue))] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[hsl(204,70%,43%)] transition-all inline-flex items-center text-lg"
          >
            BOOK APPOINTMENT
            <ChevronRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
