'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--primary))] shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center">
              <svg
                width="40"
                height="40"
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
                <path
                  d="M8 20H32"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="13" cy="26" r="2" fill="currentColor" />
                <circle cx="27" cy="26" r="2" fill="currentColor" />
              </svg>
              <span className="ml-3 text-xl font-bold text-white">PRIME DETAILING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium">
              HOME
            </Link>
            <Link href="/services" className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium">
              SERVICES
            </Link>
            <Link href="/booking" className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium">
              BOOKING
            </Link>
            <Link href="#gallery" className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium">
              GALLERY
            </Link>
            <Link href="#testimonials" className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium">
              TESTIMONIALS
            </Link>
            <Link href="/booking#contact" className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium">
              CONTACT
            </Link>
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+15551234567"
              className="flex items-center space-x-2 bg-[hsl(var(--primary-blue))] text-white px-6 py-2.5 rounded font-medium hover:bg-[hsl(204,70%,43%)] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/booking"
                className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOKING
              </Link>
              <Link
                href="#gallery"
                className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                GALLERY
              </Link>
              <Link
                href="#testimonials"
                className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                TESTIMONIALS
              </Link>
              <Link
                href="/booking#contact"
                className="text-white hover:text-[hsl(var(--primary-blue))] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center space-x-2 bg-[hsl(var(--primary-blue))] text-white px-6 py-2.5 rounded font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
