import ServicePageTemplate from "@/infinity/components/service-page-template";
import { servicesData } from "@/infinity/data/services-data";

export default function RegulatoryPage() {
  const sections = [
    {
      title: servicesData.regulatory.sections.rbi.title,
      services: servicesData.regulatory.sections.rbi.services,
    },
    {
      title: servicesData.regulatory.sections.irda.title,
      services: servicesData.regulatory.sections.irda.services,
    },
  ];

  return (
    <ServicePageTemplate
      title={servicesData.regulatory.title}
      description={servicesData.regulatory.description}
      sections={sections}
      pageName="Regulatory Services"
    />
  );
}
