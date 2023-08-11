import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import DashBoard from "./routes/dashBoard/dashBoard.component";
import Home from "./routes/home/home.component";
import ScheduleScanAssetsDiscovery from "./routes/scheduleScanAssetsDiscovery/scheduleScanAssetsDiscovery.component";
import ScheduleScanVulnerability from "./routes/scheduleScanVulnerability/scheduleScanVulnerability.component";
import AssetsDiscovery from "./routes/assetsDiscovery/assetsDiscovery.component";
import VulnerabilityAssesment from "./routes/vulnerabilityAssesment/vulnerabilityAssessment.component";
import InventoryList from "./routes/inventoryList/inventoryList.component";
import EmailScan from "./routes/emailScan/emailScan.component";
import PartnerAccountIndex from "./routes/partnerAccount/partnerAccount.component";
import AddPartnerAccount from "./routes/partnerAccount/PartnerAccouts/PartenrAccountsTest.component";
import Onboarding from "./routes/onboarding/Onboarding";
import { Login } from "./routes/login/Login";
import { RecoveryPasswordLogin } from "./routes/RecoveryPasswordLogin/RecoveryPasswordLogin";
import EmailScanVulnerability from "./routes/emailScanVulnerability/emailScanVulnerability.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />}/>
        <Route path="Proceed-Scan" element={<DashBoard />}/>
        <Route path="Partner-Account" element={<PartnerAccountIndex />} />
        <Route path="add-partner-account/:id" element={<AddPartnerAccount />} />
        <Route path="Schedule-Scan-Assets" element={<ScheduleScanAssetsDiscovery />} />
        <Route path="Schedule-Scan-Vulnerability" element={<ScheduleScanVulnerability />} />
        <Route path="Assets-Discovery" element={<AssetsDiscovery />} />
        <Route path="Vulnerability-Assessment" element={<VulnerabilityAssesment />} />
        <Route path="Inventory" element={<InventoryList />} />
      </Route>
      <Route path="Email-Scan" element={<EmailScan />} />
      <Route path="Email-Scan-Vulnerability" element={<EmailScanVulnerability />} />
      <Route path="onboarding" element={<Onboarding/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="recovery-password" element={<RecoveryPasswordLogin/>}/>
    </Routes>
  );
}

export default App;
