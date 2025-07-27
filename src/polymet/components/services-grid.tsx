import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  RocketIcon,
  FileTextIcon,
  CalculatorIcon,
  BuildingIcon,
  DollarSignIcon,
  ShieldIcon,
  ScaleIcon,
} from "lucide-react";
import { coreServices } from "@/polymet/data/services-data";

const serviceIcons = {
  Startup: RocketIcon,
  Registrations: FileTextIcon,
  GST: CalculatorIcon,
  "MCA & Compliance": BuildingIcon,
  "Income Tax": DollarSignIcon,
  Trademark: ShieldIcon,
  Regulatory: ScaleIcon,
};

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            A Complete Spectrum of{" "}
            <span className="text-green-600">Business Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startup formation to complex regulatory compliance, we provide
            comprehensive solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {coreServices.map((service, index) => {
            const IconComponent = serviceIcons[service.name];
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-green-200 bg-white hover:bg-green-50/30"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300"
                  >
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution or have questions about our services?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/consultation">Get Expert Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
