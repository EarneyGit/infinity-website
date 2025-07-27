import { Link } from "react-router-dom";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";

const serviceLinks = [
  { name: "Startup Services", href: "/startup" },
  { name: "Business Registrations", href: "/registrations" },
  { name: "GST Services", href: "/gst" },
  { name: "MCA Compliance", href: "/mca-compliance" },
  { name: "Income Tax", href: "/income-tax" },
  { name: "Trademark & IP", href: "/trademark" },
  { name: "Regulatory Services", href: "/regulatory" },
  { name: "Business Loans", href: "/business-loans" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Free Consultation", href: "/consultation" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/Infinity Final Logo.png" 
                alt="Infinity Tax & Accounting Consultancy" 
                className="h-12 w-auto"
              />
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for comprehensive business solutions, from
              startup formation to complex regulatory compliance. Building
              success through expert guidance and unwavering integrity.
            </p>

            <div className="flex items-center space-x-2 text-green-400 mb-2">
              <ClockIcon className="w-4 h-4" />

              <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
            <div className="text-sm text-gray-400">Sunday: By Appointment</div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />

                <div className="text-sm text-gray-400">
                  <div>D 72, Kilpauk Garden Road</div>
                  <div>T.P.Chatram, KVN Puram, Kilpauk</div>
                  <div>Chennai, Tamil Nadu 600010</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-green-400 flex-shrink-0" />

                <div className="text-sm">
                  <a
                    href="tel:+919884644544"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    +91 98846 44544
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MailIcon className="w-5 h-5 text-green-400 flex-shrink-0" />

                <div className="text-sm">
                  <a
                    href="mailto:info@infinitytax.com"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    info@infinitytax.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-green-400">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                    <span className="text-xs font-bold">in</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  <span className="sr-only">Twitter</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                    <span className="text-xs font-bold">X</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  <span className="sr-only">Facebook</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                    <span className="text-xs font-bold">f</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Infinity Tax & Accounting Consultancy. All rights
              reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link
                to="/privacy"
                className="hover:text-green-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-green-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="hover:text-green-400 transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
