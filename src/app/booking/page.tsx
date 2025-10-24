'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Calendar, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    vehicleType: '',
    date: '',
    time: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-[hsl(var(--primary))]">Booking Confirmed!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you, {formData.fullName}! We've received your appointment request.
              </p>
              <div className="bg-[hsl(var(--secondary))] rounded-lg p-6 mb-8 text-left">
                <h2 className="font-semibold text-lg mb-4">Appointment Details:</h2>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Service:</strong> {formData.service}</p>
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                  <p><strong>Vehicle:</strong> {formData.vehicleType}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                We'll contact you shortly at <strong>{formData.phone}</strong> to confirm your appointment and answer any questions.
              </p>
              <a
                href="/"
                className="bg-[hsl(var(--primary-blue))] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[hsl(204,70%,43%)] transition-all inline-block"
              >
                RETURN HOME
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--primary))] text-white py-24 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Book Your Appointment</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Schedule your detailing service today and experience the Prime Detailing difference
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-[hsl(var(--secondary))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Booking Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--primary))]">Schedule Service</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary-blue))] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary-blue))] focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary-blue))] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Package *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary-blue))] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="Basic Wash & Wax - $89">Basic Wash & Wax - $89</option>
                    <option value="Premium Detail Package - $189">Premium Detail Package - $189</option>
                    <option value="Ultimate Protection - $299">Ultimate Protection - $299</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Type *
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    required
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary-blue))] focus:border-transparent"
                  >
                    <option value="">Select vehicle type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Truck">Truck</option>
                    <option value="Sports Car">Sports Car</option>
                    <option value="Van">Van</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary-blue))] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary-blue))] focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary-blue))] focus:border-transparent resize-none"
                    placeholder="Any special requests or concerns about your vehicle?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[hsl(var(--primary-blue))] text-white py-4 rounded-lg font-semibold hover:bg-[hsl(204,70%,43%)] transition-all text-lg"
                >
                  CONFIRM BOOKING
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By booking, you agree to our terms of service. We'll contact you to confirm your appointment.
                </p>
              </form>
            </div>

            {/* Location & Gallery Info */}
            <div className="space-y-8">
              {/* Sample Images */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/generated/gallery-after-2.png"
                  alt="Detailing showcase"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--primary))]">Premium Results Guaranteed</h3>
                  <p className="text-gray-600">
                    Our professional detailing services deliver showroom-quality results every time. We're committed to exceeding your expectations.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--primary))]">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[hsl(var(--primary-blue))] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-gray-600">123 Auto Plaza<br />Downtown Metro Area, CA 90210</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[hsl(var(--primary-blue))] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:+15551234567" className="text-[hsl(var(--primary-blue))] hover:underline">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[hsl(var(--primary-blue))] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@primedetailing.com" className="text-[hsl(var(--primary-blue))] hover:underline">
                        info@primedetailing.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[hsl(var(--primary-blue))] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Business Hours</p>
                      <p className="text-gray-600">
                        Mon-Fri: 8AM - 6PM<br />
                        Saturday: 9AM - 5PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
