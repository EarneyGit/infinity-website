import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  DollarSignIcon,
  Building2Icon,
  CreditCardIcon,
  TrendingUpIcon,
  ShieldIcon,
  FileTextIcon
} from "lucide-react";

export default function BusinessLoansPage() {
  const handleGetConsultation = () => {
    const message = "Hi! I would like to get a free consultation for business loans and funding solutions.";
    const whatsappUrl = `https://wa.me/919884644544?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const fundingTypes = [
    {
      title: "Working Capital Loans",
      description: "Manage day-to-day operational expenses from institutional lenders",
      icon: CreditCardIcon
    },
    {
      title: "Term Loans (Short-term & Long-term)",
      description: "For business expansion, purchasing assets, or capital expenditures",
      icon: TrendingUpIcon
    },
    {
      title: "CGTMSE Scheme Loans",
      description: "Collateral-free loans up to ₹5 crores for Micro and Small Enterprises",
      icon: ShieldIcon
    },
    {
      title: "Private Finance (Cheque-Based)",
      description: "Immediate, short-term funding with minimal documentation via PDCs",
      icon: DollarSignIcon
    },
    {
      title: "Equipment Financing",
      description: "Funding specifically for purchasing new or refurbished machinery",
      icon: Building2Icon
    },
    {
      title: "Mudra Loans",
      description: "Micro-enterprises assistance under Pradhan Mantri MUDRA Yojana",
      icon: FileTextIcon
    }
  ];

  const whyChoosePoints = [
    "Statewide Expertise: Deep understanding of Tamil Nadu's lending environment",
    "Diverse Funding Network: Access to banks, NBFCs, and vetted private financiers",
    "Government Schemes Expertise: Proven experience with CGTMSE and other schemes",
    "Customized Solutions: Tailored funding recommendations for your unique needs",
    "Hassle-Free Process: We handle documentation, submission, and follow-up",
    "Improved Success Rate: Professional applications with higher approval chances"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation & Assessment",
      description: "Free consultation to understand your business and financial requirements"
    },
    {
      step: "2", 
      title: "Eligibility Check & Documentation",
      description: "Check eligibility across funding options and gather necessary paperwork"
    },
    {
      step: "3",
      title: "Lender/Financier Matching",
      description: "Identify ideal banks, NBFCs, or private financiers and manage applications"
    },
    {
      step: "4",
      title: "Follow-up & Disbursal",
      description: "Proactive follow-up through sanction and fund disbursal"
    }
  ];

  const faqs = [
    {
      question: "How long does the business loan approval process take?",
      answer: "Traditional bank loans take 7-30 days. However, private finance can often be arranged within 24-48 hours for urgent needs."
    },
    {
      question: "Can I get a business loan without providing collateral?",
      answer: "Absolutely. We have special expertise in CGTMSE scheme for collateral-free bank loans. Most cheque-based private finance options also don't require property collateral."
    },
    {
      question: "We are based outside Chennai. Can you still help us?",
      answer: "Yes. We serve clients across Tamil Nadu. Our processes work efficiently whether you're in Chennai, Coimbatore, Tiruppur, Madurai, or any other location."
    },
    {
      question: "Why should I use a consultant for private finance?",
      answer: "We connect you only with vetted and trustworthy financiers, ensuring transparent terms and professional processes. We act as your safety net in the private finance market."
    },
    {
      question: "I need funds urgently and my documentation isn't perfect. What are my options?",
      answer: "We can facilitate Private Finance - fast, short-term funding from private lenders, often secured by post-dated cheques. While interest rates are higher, it's vital for immediate financial needs."
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Powering Business Ambitions Across Tamil Nadu
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              From traditional bank loans to fast private finance, we simplify the entire funding process so you can focus on what you do best – growing your business.
            </p>
            <Button
              onClick={handleGetConsultation}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Free Consultation
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Your Trusted Partner in Business Financing
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Securing business funding in today's market can be a daunting task. The complex paperwork for bank loans, or the uncertainty of the private market, can drain your valuable time and resources, no matter where you are in Tamil Nadu.
              </p>
              <p>
                At <strong>Infinity Tax & Accounting Consultancy</strong>, we bridge the gap between your business ambitions and the financial resources you need. As a leading financial consultancy firm, we specialize in helping businesses of all sizes across the state successfully acquire a wide range of funding. Whether it's a traditional loan from a bank or fast funding from a private financier, our expert guidance ensures you get the right solution, positioned for success.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16 bg-gray-50 rounded-2xl mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Us for Your Business Funding Needs?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Navigating the diverse financial landscape of Tamil Nadu requires deep-rooted expertise. Here's how we provide unmatched value:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoosePoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Types of Funding Section */}
        <div className="py-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Types of Funding We Arrange
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            We provide expert assistance for a comprehensive range of financing options available to businesses in Tamil Nadu:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundingTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Simple 4-Step Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Q{index + 1}: {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="py-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Secure Your Business Funding?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let a lack of funds or slow processes hold back your growth. Partner with Tamil Nadu's comprehensive funding experts.
            </p>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss your vision and find the perfect financial solution to make it a reality.
            </p>
            <Button
              onClick={handleGetConsultation}
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get a Free Funding Consultation!
              <PhoneIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <PhoneIcon className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 98846 44544</p>
              </div>
              <div className="flex flex-col items-center">
                <MailIcon className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@infinitytax.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Head Office</h3>
                <p className="text-gray-600 text-sm">
                  D 72, Kilpauk Garden Road<br />
                  T.P.Chatram, KVN Puram, Kilpauk<br />
                  Chennai, Tamil Nadu 600010
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                <strong>Service Areas:</strong> All major cities and towns across Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 