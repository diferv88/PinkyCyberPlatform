// export default ScheduleScan;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
// import "./onboarding.styles.scss";
import UserRoll from "../../pageUsers/userRoll.component";

const ClientAccount = () => {

    return (
        <>
          <UserRoll rollUser={"Client accounts"} userAccount={false} subtitle={"Client accounts management"} terminateUrl={"Client accounts"}  buttondAddUser={"Add client account"}/>
        </>
      );
};

export default ClientAccount;
