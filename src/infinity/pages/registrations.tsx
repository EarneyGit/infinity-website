import ServicePageTemplate from "@/infinity/components/service-page-template";
import { servicesData } from "@/infinity/data/services-data";

export default function RegistrationsPage() {
  return (
    <ServicePageTemplate
      title={servicesData.registrations.title}
      description={servicesData.registrations.description}
      services={servicesData.registrations.services}
      pageName="Registration Services"
    />
  );
}
