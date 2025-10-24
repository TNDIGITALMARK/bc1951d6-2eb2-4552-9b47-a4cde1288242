'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M8 20C8 16 10 14 14 14H26C30 14 32 16 32 20V26C32 28 31 29 29 29H11C9 29 8 28 8 26V20Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M8 20H32" stroke="currentColor" strokeWidth="2" />
                <circle cx="13" cy="26" r="2" fill="currentColor" />
                <circle cx="27" cy="26" r="2" fill="currentColor" />
              </svg>
              <span className="ml-2 text-lg font-bold">PRIME DETAILING</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Professional automotive detailing services that restore and protect your vehicle's appearance since 2018.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+15551234567" className="flex items-center text-white/80 hover:text-[hsl(var(--primary-blue))] transition-colors text-sm">
                  <Phone className="w-4 h-4 mr-3" />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@primedetailing.com" className="flex items-center text-white/80 hover:text-[hsl(var(--primary-blue))] transition-colors text-sm">
                  <Mail className="w-4 h-4 mr-3" />
                  info@primedetailing.com
                </a>
              </li>
              <li>
                <div className="flex items-start text-white/80 text-sm">
                  <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                  <span>123 Auto Plaza<br />Downtown Metro Area, CA 90210</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-[hsl(var(--primary-blue))] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[hsl(var(--primary-blue))] transition-colors text-sm">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-white/80 hover:text-[hsl(var(--primary-blue))] transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-white/80 hover:text-[hsl(var(--primary-blue))] transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/booking#contact" className="text-white/80 hover:text-[hsl(var(--primary-blue))] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">BUSINESS HOURS</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">8AM - 6PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">9AM - 5PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">FOLLOW US</h4>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--primary-blue))] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--primary-blue))] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--primary-blue))] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Prime Detailing Co. All rights reserved. Fully Insured & Bonded.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
