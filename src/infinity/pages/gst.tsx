import ServicePageTemplate from "@/infinity/components/service-page-template";
import { servicesData } from "@/infinity/data/services-data";

export default function GSTPage() {
  return (
    <ServicePageTemplate
      title={servicesData.gst.title}
      description={servicesData.gst.description}
      services={servicesData.gst.services}
      pageName="GST Services"
    />
  );
}
