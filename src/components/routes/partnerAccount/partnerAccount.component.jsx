// export default ScheduleScan;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
// import "./onboarding.styles.scss";
import UserRoll from "../../pageUsers/userRoll.component";

const PartnerAccount = () => {

    return (
        <>
          <UserRoll rollUser={"Partner accounts"} userAccount={true} subtitle={"Partner accounts management"} terminateUrl={"Partner accounts"}/>
        </>
      );
};

export default PartnerAccount;
