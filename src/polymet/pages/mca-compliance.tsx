import ServicePageTemplate from "@/polymet/components/service-page-template";
import { servicesData } from "@/polymet/data/services-data";

export default function MCACompliancePage() {
  const sections = [
    {
      title: servicesData.mca.sections.secretarial.title,
      services: servicesData.mca.sections.secretarial.services,
    },
    {
      title: servicesData.mca.sections.eventBased.title,
      services: servicesData.mca.sections.eventBased.services,
    },
    {
      title: servicesData.mca.sections.accounting.title,
      services: servicesData.mca.sections.accounting.services,
    },
  ];

  return (
    <ServicePageTemplate
      title={servicesData.mca.title}
      description={servicesData.mca.description}
      sections={sections}
      pageName="MCA & Compliance Services"
    />
  );
}
