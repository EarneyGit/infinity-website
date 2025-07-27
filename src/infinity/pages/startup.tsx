import ServicePageTemplate from "@/infinity/components/service-page-template";
import { servicesData } from "@/infinity/data/services-data";

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
