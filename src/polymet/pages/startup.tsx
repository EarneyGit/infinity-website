import ServicePageTemplate from "@/polymet/components/service-page-template";
import { servicesData } from "@/polymet/data/services-data";

export default function StartupPage() {
  return (
    <ServicePageTemplate
      title={servicesData.startup.title}
      description={servicesData.startup.description}
      services={servicesData.startup.services}
      pageName="Startup Services"
    />
  );
}
