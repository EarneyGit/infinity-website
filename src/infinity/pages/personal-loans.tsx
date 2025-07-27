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
  BanknoteIcon,
  HeartIcon,
  GraduationCapIcon,
  HomeIcon
} from "lucide-react";

export default function PersonalLoansPage() {
  const loanPurposes = [
    {
      icon: <HeartIcon className="w-6 h-6 text-green-600" />,
      title: "Weddings",
      description: "Cover all expenses for that perfect wedding celebration without financial strain."
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-green-600" />,
      title: "Medical Emergencies", 
      description: "Get immediate funds for unexpected medical treatments and hospital bills."
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-green-600" />,
      title: "Home Renovation",
      description: "Upgrade, repair, or furnish your home to create your ideal living space."
    },
    {
      icon: <GraduationCapIcon className="w-6 h-6 text-green-600" />,
      title: "Higher Education",
      description: "Fund your own or your children's education and invest in a brighter future."
    },
    {
      icon: <CreditCardIcon className="w-6 h-6 text-green-600" />,
      title: "Debt Consolidation",
      description: "Combine multiple high-interest debts (like credit card bills) into a single loan with a lower interest rate."
    },
    {
      icon: <BanknoteIcon className="w-6 h-6 text-green-600" />,
      title: "Travel & Major Purchases",
      description: "Finance that dream vacation or buy electronics, appliances, and other high-value items."
    }
  ];

  const whyChooseUs = [
    {
      icon: <UsersIcon className="w-8 h-8 text-green-600" />,
      title: "Access to Multiple Lenders",
      description: "We connect you with a wide network of banks and NBFCs, saving you the effort of applying at multiple places."
    },
    {
      icon: <TrendingUpIcon className="w-8 h-8 text-green-600" />,
      title: "Better Interest Rates",
      description: "With our market knowledge and relationships, we help you identify lenders offering the most competitive interest rates."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-green-600" />,
      title: "Credit Score Guidance", 
      description: "We offer a free initial assessment and provide expert advice on how to improve your score to enhance loan eligibility."
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-green-600" />,
      title: "Simplified Process",
      description: "We handle the paperwork, verify documentation, and manage the application submission, making the process stress-free."
    },
    {
      icon: <ClockIcon className="w-8 h-8 text-green-600" />,
      title: "Higher Approval Chance",
      description: "We present your profile professionally, addressing potential weak points, significantly increasing approval chances."
    },
    {
      icon: <MapPinIcon className="w-8 h-8 text-green-600" />,
      title: "Statewide Service",
      description: "Our services extend across all of Tamil Nadu, providing expert assistance in Chennai, Coimbatore, Madurai, and beyond."
    }
  ];

  const salariedDocs = [
    "KYC Documents: PAN Card, Aadhaar Card, Passport/Voter ID",
    "Photographs: Recent passport-sized photos", 
    "Income Proof: Latest 3 months' salary slips",
    "Financials: Bank account statement for the last 6 months showing salary credits",
    "Employment Proof: Employee ID card and official email ID or appointment letter"
  ];

  const selfEmployedDocs = [
    "KYC Documents: PAN Card, Aadhaar Card",
    "Photographs: Recent passport-sized photos",
    "Income Proof: Income Tax Returns (ITR) for the last 2-3 years", 
    "Financials: Audited financial statements (Balance Sheet, Profit & Loss Account)",
    "Business & Personal Bank Statements: For the last 6-12 months",
    "Proof of Business: Business registration documents (e.g., GST certificate, Shop Act license)"
  ];

  const faqs = [
    {
      question: "What is a good CIBIL score to get a personal loan?",
      answer: "A CIBIL score of 750 or above is considered excellent by most lenders and will help you get faster approval and lower interest rates. We can help you get a loan even with a slightly lower score."
    },
    {
      question: "How quickly can I get the loan amount in my account?",
      answer: "Once your loan is approved, the funds are typically disbursed within 24 to 72 hours. Our efficient process helps minimize delays."
    },
    {
      question: "Can I prepay my personal loan?",
      answer: "Yes, most lenders allow prepayment of the loan after a certain period (usually 6-12 months), though a prepayment penalty may apply. We help you understand these clauses beforehand."
    },
    {
      question: "Why should I use a consultant instead of applying on a banking app or portal?",
      answer: "Online portals are transactional. We provide a personalized service. We advise you, help strengthen your profile, negotiate on your behalf, and act as your single point of contact throughout the process."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Unlock Your Personal Goals with <span className="text-green-600">the Right Financial Support</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Get expert guidance on securing personal loans across Tamil Nadu with better terms and less hassle. We turn your aspirations into reality.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/consultation" className="flex items-center space-x-2">
                <span>Check Your Eligibility for Free</span>
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
              Your Partner for Life's Financial Needs
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-6">
                Life's important moments, opportunities, and unexpected emergencies don't always align with your bank balance. Whether you're planning a dream wedding, facing a medical expense, or consolidating debt, securing a personal loan can provide the immediate support you need.
              </p>
              <p className="mb-6">
                However, navigating the loan application process can be confusing. Comparing offers from different banks, understanding complex terms, and meeting strict eligibility criteria can be overwhelming.
              </p>
              <p className="mb-6">
                At <strong>Infinity Tax & Accounting Consultancy</strong>, we simplify this journey. Our team of financial experts across Tamil Nadu is dedicated to helping you find and secure the best personal loan that fits your unique situation, ensuring a smooth, transparent, and successful process.
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
              Why Choose Us for Your Personal Loan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While you can apply for a loan directly, our expert guidance provides significant advantages:
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

      {/* Loan Purposes Section */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              When Can You Use a Personal Loan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A personal loan is a versatile financial tool that can be used for any legitimate purpose. We commonly assist clients with funding for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanPurposes.map((purpose, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {purpose.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {purpose.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {purpose.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility & Documents Section */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Eligibility & Documents Required
            </h2>
            <p className="text-xl text-gray-600">
              Requirements differ slightly for salaried and self-employed individuals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* General Eligibility */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">General Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>Age:</strong> 21 to 60 years</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>Citizenship:</strong> Indian</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>CIBIL Score:</strong> 750 or higher is preferred for the best rates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>Minimum Monthly Income:</strong> Typically starts from ₹20,000 (varies by city and lender)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Document Requirements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Documents for Salaried Individuals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {salariedDocs.map((doc, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Documents for Self-Employed Individuals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {selfEmployedDocs.map((doc, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
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
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Let's make your financial goals a reality. Talk to our experts today for a free, no-obligation consultation and find out the best loan options available for you.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
            >
              <Link to="/consultation" className="flex items-center space-x-2">
                <span>Schedule My Free Consultation Now!</span>
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
              <strong>Service Areas:</strong> We assist clients across all of Tamil Nadu.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 