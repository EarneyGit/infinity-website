import ServicePageTemplate from "@/polymet/components/service-page-template";
import { servicesData } from "@/polymet/data/services-data";

export default function TrademarkPage() {
  const sections = [
    {
      title: servicesData.trademark.sections.ipr.title,
      services: servicesData.trademark.sections.ipr.services,
    },
    {
      title: servicesData.trademark.sections.patentCopyright.title,
      services: servicesData.trademark.sections.patentCopyright.services,
    },
  ];

  return (
    <ServicePageTemplate
      title={servicesData.trademark.title}
      description={servicesData.trademark.description}
      sections={sections}
      pageName="Trademark & IP Services"
    />
  );
}
