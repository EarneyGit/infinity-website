import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/infinity/layouts/main-layout";
import Homepage from "@/infinity/pages/homepage";
import StartupPage from "@/infinity/pages/startup";
import RegistrationsPage from "@/infinity/pages/registrations";
import GSTPage from "@/infinity/pages/gst";
import MCACompliancePage from "@/infinity/pages/mca-compliance";
import IncomeTaxPage from "@/infinity/pages/income-tax";
import TrademarkPage from "@/infinity/pages/trademark";
import RegulatoryPage from "@/infinity/pages/regulatory";
import BusinessLoansPage from "@/infinity/pages/business-loans";
import ConsultationPage from "@/infinity/pages/consultation";

export default function InfinityTaxWebsite() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/startup" element={<StartupPage />} />

          <Route path="/registrations" element={<RegistrationsPage />} />

          <Route path="/gst" element={<GSTPage />} />

          <Route path="/mca-compliance" element={<MCACompliancePage />} />

          <Route path="/income-tax" element={<IncomeTaxPage />} />

          <Route path="/trademark" element={<TrademarkPage />} />

          <Route path="/regulatory" element={<RegulatoryPage />} />

          <Route path="/business-loans" element={<BusinessLoansPage />} />

          <Route path="/consultation" element={<ConsultationPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
