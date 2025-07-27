import { CheckCircleIcon } from "lucide-react";
import { whyChooseUs } from "@/polymet/data/services-data";

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The <span className="text-green-600">Infinity Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why businesses trust us with their most critical
              compliance and growth needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {whyChooseUs.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Experience the Difference?
                  </h3>
                  <p className="text-gray-600">
                    Join hundreds of satisfied clients who have transformed
                    their business operations with our expert guidance.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      1000+
                    </div>
                    <div className="text-sm text-gray-600">
                      Businesses Served
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      15+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">Expert Team</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">
                      Support Available
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />

                    <span>Free initial consultation</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />

                    <span>Transparent pricing with no hidden costs</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />

                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />

                    <span>Technology-driven solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
