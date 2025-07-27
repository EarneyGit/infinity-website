import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon } from "lucide-react";

interface Service {
  name: string;
  description: string;
}

interface ServiceSection {
  title: string;
  services: Service[];
}

interface ServicePageTemplateProps {
  title: string;
  description: string;
  services?: Service[];
  sections?: ServiceSection[];
  pageName: string;
}

export default function ServicePageTemplate({
  title,
  description,
  services,
  sections,
  pageName,
}: ServicePageTemplateProps) {
  const handleEnquireClick = (serviceName: string) => {
    // Create WhatsApp message or contact form with service name
    const message = `Hi, I would like to enquire about ${serviceName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919884644544?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const ServiceCard = ({ service }: { service: Service }) => (
    <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-green-50 hover:to-white group">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-start space-x-3 mb-4">
          <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover:text-green-700 transition-colors" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {service.description}
            </p>
          </div>
        </div>
        
        <div className="mt-auto pt-2">
          <Button
            onClick={() => handleEnquireClick(service.name)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:bg-green-700"
            size="sm"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Enquire Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Services Content */}
        <div className="max-w-6xl mx-auto">
          {services && (
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </div>
          )}

          {sections && (
            <div className="space-y-16 mb-16">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.services.map((service, serviceIndex) => (
                      <ServiceCard key={serviceIndex} service={service} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-50 to-slate-50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Have Questions about {pageName}?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to provide personalized guidance and answer
            all your questions. Get started with a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/consultation" className="flex items-center space-x-2">
                <span>Schedule Free Consultation</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="w-4 h-4 text-green-500" />
              <span>Free Initial Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="w-4 h-4 text-green-500" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="w-4 h-4 text-green-500" />
              <span>Transparent Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
