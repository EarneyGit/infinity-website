import ServicePageTemplate from "@/polymet/components/service-page-template";
import { servicesData } from "@/polymet/data/services-data";

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
