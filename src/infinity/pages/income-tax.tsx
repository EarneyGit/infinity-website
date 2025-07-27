import ServicePageTemplate from "@/infinity/components/service-page-template";
import { servicesData } from "@/infinity/data/services-data";

export default function IncomeTaxPage() {
  const sections = [
    {
      title: servicesData.incomeTax.sections.taxation.title,
      services: servicesData.incomeTax.sections.taxation.services,
    },
    {
      title: servicesData.incomeTax.sections.taxFiling.title,
      services: servicesData.incomeTax.sections.taxFiling.services,
    },
  ];

  return (
    <ServicePageTemplate
      title={servicesData.incomeTax.title}
      description={servicesData.incomeTax.description}
      sections={sections}
      pageName="Income Tax Services"
    />
  );
}
