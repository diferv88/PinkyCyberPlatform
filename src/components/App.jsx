import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import DashBoard from "./routes/dashBoard/dashBoard.component";
import Home from "./routes/home/home.component";
import ScheduleScanAssetsDiscovery from "./routes/scheduleScanAssetsDiscovery/scheduleScanAssetsDiscovery.component";
import Onboarding from "./routes/onboardingPage/onboarding.component";
import OnboardingContact from "./routes/onboardingContact/onboardingContact.component";
import OnboardingComplete from "./routes/onboardingComplete/onboardingComplete.component"
import ScheduleScanVulnerability from "./routes/scheduleScanVulnerability/scheduleScanVulnerability.component";
import AssetsDiscovery from "./routes/assetsDiscovery/assetsDiscovery.component";
import VulnerabilityAssesment from "./routes/vulnerabilityAssesment/vulnerabilityAssessment.component";
import InventoryList from "./routes/inventoryList/inventoryList.component";
import DetailedScanReport from "./routes/detalledScanReport/detailedScanReport.component";
import EmailScan from "./routes/emailScan/emailScan.component";
import PartnerAccountIndex from "./routes/partnerAccount/partnerAccount.component";
import ClientAccountIndex from "./routes/clientAccount/partnerAccount.component";
import AddPartnerAccount from "./pageUsers/PartnerAccouts/PartenrAccountsTest.component";
// import Onboarding from "./routes/onboarding/Onboarding";
import { Login } from "./routes/login/Login";
import { RecoveryPasswordLogin } from "./routes/RecoveryPasswordLogin/RecoveryPasswordLogin";
import EmailScanVulnerability from "./routes/emailScanVulnerability/emailScanVulnerability.component";
import ScheduledScansIndex from "./routes/scheduledscans/scheduledScans.component";
import InventoryList2 from "./routes/inventoryList2/inventoryList2.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />}/>
        <Route path="add-partner-account/:id" element={<AddPartnerAccount />} />
        <Route path="Assets-Discovery" element={<AssetsDiscovery />} />
        <Route path="Inventory" element={<InventoryList />} />
        <Route path="InventoryList" element={<InventoryList2/>}/>
        <Route path="DetailedScanReport" element={<DetailedScanReport />} />
        <Route path="Partner-Account" element={<PartnerAccountIndex />} />
        <Route path="Client-Account" element={<ClientAccountIndex />} />
        <Route path="Proceed-Scan" element={<DashBoard />}/>
        <Route path="Onboarding" element={<Onboarding />} />
        <Route path="Onboarding-Contact" element={<OnboardingContact />} />
        <Route path="Onboarding-Complete" element={<OnboardingComplete />} />
        <Route path="Scheduled-Scans" element={<ScheduledScansIndex />} />
        <Route path="Schedule-Scan-Assets" element={<ScheduleScanAssetsDiscovery />} />
        <Route path="Schedule-Scan-Vulnerability" element={<ScheduleScanVulnerability />} />
        <Route path="Vulnerability-Assessment" element={<VulnerabilityAssesment />} />
        <Route path="Vulnerability-Assessment" element={<VulnerabilityAssesment />} />
      </Route>
      <Route path="Email-Scan" element={<EmailScan />} />
      <Route path="Email-Scan-Vulnerability" element={<EmailScanVulnerability />} />
      {/* <Route path="onboarding" element={<Onboarding/>}/> */}
      <Route path="login" element={<Login/>}/>
      <Route path="recovery-password" element={<RecoveryPasswordLogin/>}/>
    </Routes>
  );
}

export default App;
