import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import DashBoard from "./routes/dashBoard/dashBoard.component";
import PartnerAccountIndex from "./routes/partnerAccount/partnerAccount.component";
import AddPartnerAccount from "./routes/partnerAccount/PartnerAccouts/PartenrAccountsTest.component";
import Onboarding from "./routes/onboarding/Onboarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<DashBoard />}/>
        <Route path="Partner-Account" element={<PartnerAccountIndex />} />
        <Route path="add-partner-account/:id" element={<AddPartnerAccount />} />
      </Route>
      <Route path="onboarding" element={<Onboarding/>}/>
    </Routes>
  );
}

export default App;
