import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import DashBoard from "./routes/dashBoard/dashBoard.component";
import PartnerAccount from "./routes/partnerAccount/partnerAccount.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<DashBoard />}/>
        <Route path="Partner-Account" element={<PartnerAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
