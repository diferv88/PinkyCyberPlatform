// export default ScheduleScan;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
// import "./onboarding.styles.scss";
import UserRoll from "../../pageUsers/userRoll.component";

let sendIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.39969 6.31991L15.8897 3.48991C19.6997 2.21991 21.7697 4.29991 20.5097 8.10991L17.6797 16.5999C15.7797 22.3099 12.6597 22.3099 10.7597 16.5999L9.91969 14.0799L7.39969 13.2399C1.68969 11.3399 1.68969 8.22991 7.39969 6.31991Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1104 13.6501L13.6904 10.0601" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


const ClientAccount = () => {

    return (
        <>
          <UserRoll sendButtonIcon={sendIcon} rollUser={"Client accounts"} userAccount={false} subtitle={"Client accounts management"} terminateUrl={"Client accounts"}  buttondAddUser={"Add client account"}/>
        </>
      );
};

export default ClientAccount;
