import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  MailIcon,
  CalendarIcon,
  ArrowRightIcon,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-green-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
            Take the first step towards seamless compliance and accelerated
            growth. Our experts are ready to guide you through every aspect of
            your business journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/consultation" className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5" />

                <span>Schedule Free Consultation</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" />

                <span>Call Us Now</span>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
              <p className="opacity-90">
                No obligation, expert guidance to understand your needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Immediate Support</h3>
              <p className="opacity-90">
                Get answers to your questions within 24 hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
              <p className="opacity-90">
                Tailored strategies designed for your specific business
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-lg opacity-90 mb-4">
              Join the growing community of successful businesses who trust
              Infinity Tax & Accounting
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-75">
              <span>✓ 1000+ Satisfied Clients</span>
              <span>✓ 15+ Years Experience</span>
              <span>✓ 98% Success Rate</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
