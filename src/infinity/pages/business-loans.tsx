import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon,
  TrendingUpIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
  CreditCardIcon,
  BanknoteIcon
} from "lucide-react";

export default function BusinessLoansPage() {
  const fundingTypes = [
    {
      title: "Working Capital Loans",
      description: "To manage your day-to-day operational expenses from institutional lenders."
    },
    {
      title: "Term Loans (Short-term & Long-term)",
      description: "For business expansion, purchasing assets, or other capital expenditures."
    },
    {
      title: "CGTMSE Scheme Loans",
      description: "Facilitating collateral-free loans up to ₹5 crores for Micro and Small Enterprises under the Credit Guarantee Fund Trust scheme."
    },
    {
      title: "Private Finance (Cheque-Based Funding)",
      description: "For businesses requiring immediate, short-term funding with minimal documentation. We connect you with our network of reliable private financiers, facilitating loans secured through post-dated cheques (PDCs)."
    },
    {
      title: "Equipment Financing / Machinery Loans",
      description: "Secure funding specifically for the purchase of new or refurbished machinery and equipment."
    },
    {
      title: "Mudra Loans",
      description: "Assisting micro-enterprises under the Pradhan Mantri MUDRA Yojana (PMMY)."
    },
    {
      title: "Loan Against Property (LAP)",
      description: "Leveraging your residential or commercial property to secure high-value financing."
    },
    {
      title: "MSME & SME Loans",
      description: "A wide variety of unsecured and secured loan options tailored for Micro, Small, and Medium Enterprises."
    }
  ];

  const whyChooseUs = [
    {
      icon: <TrendingUpIcon className="w-8 h-8 text-green-600" />,
      title: "Statewide Expertise",
      description: "With our base in Chennai and a network spanning all major cities in Tamil Nadu, we possess a deep understanding of both urban and regional lending environments."
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-green-600" />,
      title: "Diverse Funding Network",
      description: "Beyond banks and NBFCs, we provide access to a vetted network of private financiers for alternative and immediate funding solutions."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-green-600" />,
      title: "Expertise in Government Schemes",
      description: "We have proven experience in navigating central and state government initiatives, including the popular CGTMSE scheme."
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-green-600" />,
      title: "Customized Financial Solutions",
      description: "We analyze your unique business needs, financial health, and urgency to recommend the best funding product for you."
    },
    {
      icon: <ClockIcon className="w-8 h-8 text-green-600" />,
      title: "Hassle-Free Process & Time Savings",
      description: "We handle the heavy lifting – from documentation to submission and follow-up. This saves you significant time and eliminates stress."
    },
    {
      icon: <BanknoteIcon className="w-8 h-8 text-green-600" />,
      title: "Improved Chances of Success",
      description: "A professionally prepared application and the right connections stand a much higher chance of success."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation & Assessment",
      description: "We begin with a free consultation to understand your business, financial requirements, and urgency."
    },
    {
      step: "02", 
      title: "Eligibility Check & Document Collation",
      description: "Our team helps you check your eligibility across different funding options and assists in gathering the necessary paperwork."
    },
    {
      step: "03",
      title: "Lender/Financier Matching & Application",
      description: "Based on our assessment, we identify the ideal bank, NBFC, or private financier and professionally manage the application process."
    },
    {
      step: "04",
      title: "Follow-up, Sanction & Disbursal",
      description: "We proactively follow up, handle queries, and assist you through the final steps of sanction and fund disbursal."
    }
  ];

  const faqs = [
    {
      question: "How long does the business loan approval process take?",
      answer: "A traditional bank loan can take 7-30 days. However, private finance can often be arranged within 24-48 hours for urgent needs."
    },
    {
      question: "Can I get a business loan without providing collateral?",
      answer: "Absolutely. We have special expertise in navigating schemes like CGTMSE, which is designed for collateral-free bank loans. Alternatively, most cheque-based private finance options do not require property collateral."
    },
    {
      question: "We are based in Tiruppur, not Chennai. Can you still help us?",
      answer: "Yes. We serve clients across the entire state of Tamil Nadu. Our processes are designed to work efficiently whether you are in Chennai, Coimbatore, Tiruppur, Madurai, or any other location."
    },
    {
      question: "Why should I use a consultant for private finance?",
      answer: "The private finance market can be unorganized. We connect you only with vetted and trustworthy financiers, ensuring transparent terms and a professional process. We act as your safety net."
    },
    {
      question: "I need funds very urgently, and my documentation isn't perfect for a bank loan. What are my options?",
      answer: "We understand that business emergencies require immediate solutions. In such cases, we can facilitate Private Finance. This is a fast, short-term funding option from private lenders, often secured by post-dated cheques. While interest rates are higher than traditional loans, it can be a vital tool for overcoming immediate financial hurdles."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Powering Business Ambitions <span className="text-green-600">Across Tamil Nadu</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              From traditional bank loans to fast private finance, we simplify the entire funding process so you can focus on what you do best – growing your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/consultation" className="flex items-center space-x-2">
                <span>Schedule a Free Consultation</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              Your Trusted Partner in Business Financing
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-6">
                Securing business funding in today's market can be a daunting task. The complex paperwork for bank loans, or the uncertainty of the private market, can drain your valuable time and resources, no matter where you are in Tamil Nadu.
              </p>
              <p className="mb-6">
                At <strong>Infinity Tax & Accounting Consultancy</strong>, we bridge the gap between your business ambitions and the financial resources you need. As a leading financial consultancy firm, we specialize in helping businesses of all sizes across the state successfully acquire a wide range of funding. Whether it's a traditional loan from a bank or fast funding from a private financier, our expert guidance ensures you get the right solution, positioned for success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us for Your Business Funding Needs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigating the diverse financial landscape of Tamil Nadu requires deep-rooted expertise. Here's how we provide unmatched value:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Types of Funding Section */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Types of Funding We Arrange
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert assistance for a comprehensive range of financing options available to businesses in Tamil Nadu:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fundingTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CreditCardIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {type.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Simple 4-Step Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Q{index + 1}: {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business Funding?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Don't let a lack of funds or slow processes hold back your growth. Partner with Tamil Nadu's comprehensive funding experts.
            </p>
            <p className="text-lg text-green-100 mb-8">
              Let's discuss your vision and find the perfect financial solution to make it a reality.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
            >
              <Link to="/consultation" className="flex items-center space-x-2">
                <span>Get a Free Funding Consultation!</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </Button>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="flex items-center justify-center space-x-3">
                <PhoneIcon className="w-6 h-6 text-green-200" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-green-100">+91 98846 44544</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MailIcon className="w-6 h-6 text-green-200" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-green-100">info@infinitytax.com</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPinIcon className="w-6 h-6 text-green-200" />
                <div>
                  <div className="font-semibold">Head Office</div>
                  <div className="text-green-100 text-sm">D 72, Kilpauk Garden Road, Chennai 600010</div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 text-green-100">
              <strong>Service Areas:</strong> All major cities and towns across Tamil Nadu.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 