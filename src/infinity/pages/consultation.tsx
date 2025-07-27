import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from "lucide-react";

const serviceOptions = [
  "Startup Services",
  "Business Registrations",
  "GST Services",
  "MCA & Compliance",
  "Income Tax",
  "Trademark & IP",
  "Regulatory Services",
];

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    requirement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your Free, No-Obligation Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Let's discuss your business needs. Our experts will provide initial
            guidance and outline a clear path forward. Fill out the form below
            or book a meeting directly in our calendar.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900">
                Request a Call Back
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="companyName">Company Name (Optional)</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Primary Service of Interest *</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="requirement">
                    Tell us about your requirement
                  </Label>
                  <Textarea
                    id="requirement"
                    value={formData.requirement}
                    onChange={(e) =>
                      setFormData({ ...formData, requirement: e.target.value })
                    }
                    rows={4}
                    className="mt-2"
                    placeholder="Please describe your specific needs or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                >
                  Request a Call Back
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column - Booking & Contact */}
          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">
                  Book a Meeting Directly
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <CalendarIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />

                  <p className="text-gray-600">
                    Schedule a convenient time for your consultation using our
                    online calendar.
                  </p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold mb-4">
                  Open Calendar
                </Button>
                <p className="text-sm text-gray-500">
                  Available Monday - Saturday, 9:00 AM - 7:00 PM
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-green-600 mt-1" />

                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      D 72, Kilpauk Garden Road
                      <br />
                      T.P.Chatram, KVN Puram, Kilpauk
                      <br />
                      Chennai, Tamil Nadu 600010
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <PhoneIcon className="w-6 h-6 text-green-600" />

                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 98846 44544</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MailIcon className="w-6 h-6 text-green-600" />

                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@infinitytax.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <ClockIcon className="w-6 h-6 text-green-600" />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Mon - Sat: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
