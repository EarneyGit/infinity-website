import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/polymet/layouts/main-layout";
import Homepage from "@/polymet/pages/homepage";
import StartupPage from "@/polymet/pages/startup";
import RegistrationsPage from "@/polymet/pages/registrations";
import GSTPage from "@/polymet/pages/gst";
import MCACompliancePage from "@/polymet/pages/mca-compliance";
import IncomeTaxPage from "@/polymet/pages/income-tax";
import TrademarkPage from "@/polymet/pages/trademark";
import RegulatoryPage from "@/polymet/pages/regulatory";
import ConsultationPage from "@/polymet/pages/consultation";

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

          <Route path="/consultation" element={<ConsultationPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
