import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import DashBoard from "./routes/dashBoard/dashBoard.component";
import Home from "./routes/home/home.component";
import ScheduleScan from "./routes/scheduleScan/scheduleScan.component";
import AssetsDiscovery from "./routes/assetsDiscovery/assetsDiscovery.component";
import EmailScan from "./routes/emailScan/emailScan.component";
import PartnerAccountIndex from "./routes/partnerAccount/partnerAccount.component";
import AddPartnerAccount from "./routes/partnerAccount/PartnerAccouts/PartenrAccountsTest.component";
import Onboarding from "./routes/onboarding/Onboarding";
import { Login } from "./routes/login/Login";
import { RecoveryPasswordLogin } from "./routes/RecoveryPasswordLogin/RecoveryPasswordLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />}/>
        <Route path="Proceed-Scan" element={<DashBoard />}/>
        <Route path="Partner-Account" element={<PartnerAccountIndex />} />
        <Route path="add-partner-account/:id" element={<AddPartnerAccount />} />
        <Route path="Schedule-Scan" element={<ScheduleScan />} />
        <Route path="Assets-Discovery" element={<AssetsDiscovery />} />
        <Route path="Email-Scan" element={<EmailScan />} />
      </Route>
      <Route path="onboarding" element={<Onboarding/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="recovery-password" element={<RecoveryPasswordLogin/>}/>
    </Routes>
  );
}

export default App;
