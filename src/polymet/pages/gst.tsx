import ServicePageTemplate from "@/polymet/components/service-page-template";
import { servicesData } from "@/polymet/data/services-data";

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
