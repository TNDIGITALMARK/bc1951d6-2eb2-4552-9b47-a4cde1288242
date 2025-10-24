export const dynamic = 'force-dynamic'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Shield, Star, ChevronRight } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mt-20">
        {/* Hero Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-car.png"
            alt="Luxury car detailing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Experience Unmatched<br />Automotive Perfection
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Professional detailing services that restore and protect your vehicle with showroom-quality results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-[hsl(var(--primary-blue))] text-white px-8 py-4 rounded font-semibold hover:bg-[hsl(204,70%,43%)] transition-all inline-flex items-center justify-center"
            >
              BOOK NOW
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="bg-white text-[hsl(var(--primary))] px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">OUR SERVICES</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium automotive care tailored to your vehicle's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Interior Detailing Card */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-[hsl(var(--secondary))] rounded-lg mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-[hsl(var(--primary-blue))]" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">INTERIOR DETAILING</h3>
              <p className="text-gray-600 text-center mb-6">
                Deep cleaning and conditioning for a fresh, pristine cabin experience
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--primary-blue))] mr-2">✓</span>
                  Complete vacuum and steam cleaning
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--primary-blue))] mr-2">✓</span>
                  Leather conditioning & protection
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--primary-blue))] mr-2">✓</span>
                  Dashboard & console restoration
                </li>
              </ul>
              <Link
                href="/services"
                className="block text-center bg-[hsl(var(--primary-blue))] text-white py-3 rounded font-medium hover:bg-[hsl(204,70%,43%)] transition-all"
              >
                DISCOVER MORE
              </Link>
            </div>

            {/* Paint Protection Card */}
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-[hsl(var(--secondary))] rounded-lg mb-6 mx-auto">
                <Shield className="w-8 h-8 text-[hsl(var(--primary-blue))]" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">PAINT PROTECTION</h3>
              <p className="text-gray-600 text-center mb-6">
                Long-lasting ceramic coating and protection for your vehicle's finish
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--primary-blue))] mr-2">✓</span>
                  Ceramic coating application
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--primary-blue))] mr-2">✓</span>
                  Paint correction & polishing
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--primary-blue))] mr-2">✓</span>
                  6-month protection warranty
                </li>
              </ul>
              <Link
                href="/services"
                className="block text-center bg-[hsl(var(--primary-blue))] text-white py-3 rounded font-medium hover:bg-[hsl(204,70%,43%)] transition-all"
              >
                DISCOVER MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">BEFORE/AFTER GALLERY</h2>
            <p className="text-lg text-gray-600">Witness the transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/generated/gallery-before-1.png"
                alt="Before detailing"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4 text-center">
                <p className="font-semibold text-gray-700">Before</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/generated/gallery-after-1.png"
                alt="After detailing"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4 text-center">
                <p className="font-semibold text-[hsl(var(--primary-blue))]">After</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/generated/gallery-after-2.png"
                alt="Showroom finish"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4 text-center">
                <p className="font-semibold text-[hsl(var(--primary-blue))]">Showroom Quality</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 bg-white rounded-lg p-8 max-w-3xl mx-auto shadow-md">
            <h3 className="text-2xl font-semibold mb-4">My car looks brand new!</h3>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
              ))}
            </div>
            <p className="text-gray-600 italic">
              "The attention to detail was incredible. My BMW looks absolutely stunning!"
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">CUSTOMER TESTIMONIALS</h2>
            <p className="text-lg text-gray-600">What our clients say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Incredible attention to detail and my BMW looks brand new again. Best detailing service I've ever used!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(var(--secondary))] rounded-full flex items-center justify-center text-[hsl(var(--primary-blue))] font-bold text-lg">
                  SJ
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">BMW Owner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Professional service and fair pricing. I'm definitely recommending Prime Detailing to all my friends."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(var(--secondary))] rounded-full flex items-center justify-center text-[hsl(var(--primary-blue))] font-bold text-lg">
                  DC
                </div>
                <div className="ml-4">
                  <p className="font-semibold">David Chen</p>
                  <p className="text-sm text-gray-500">Tesla Owner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Convenient online booking and they came to my office parking lot. Can't ask for better service!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(var(--secondary))] rounded-full flex items-center justify-center text-[hsl(var(--primary-blue))] font-bold text-lg">
                  MG
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Maria Garcia</p>
                  <p className="text-sm text-gray-500">Mercedes Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(var(--secondary))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference professional detailing makes
          </p>
          <Link
            href="/booking"
            className="bg-[hsl(var(--primary-blue))] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[hsl(204,70%,43%)] transition-all inline-flex items-center text-lg"
          >
            SCHEDULE APPOINTMENT
            <ChevronRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
