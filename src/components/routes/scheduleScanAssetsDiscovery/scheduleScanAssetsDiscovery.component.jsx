// export default ScheduleScan;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import "./scheduleScanAssestsDiscovery.styles.scss";
import ScheduleScan from "../../scheduleScan/ScheduleScan";


const ScheduleScanAssetsDiscovery = () => {
  const textData = {
    title: "Assets discovery / inventory",
    disclaimer: "Please accept permission request to map the network and make sure all your devices are working and are connected to the network. It will take up 24h to complete the scan. Meanwhile, please read more on Assets Inventory. Thank you for patience!",
    condiocionalChecked1: "I accept the request to map the network.",
    condiocionalChecked2: "I confirm that all devices are working and connected to the network.",
  }

  return (
    <>
    <div>
      <ScheduleScan title={textData.title} disclaimer={textData.disclaimer} condiocionalChecked1={textData.condiocionalChecked1} condiocionalChecked2={textData.condiocionalChecked2}/>
    </div>
    </>
  );
};

export default ScheduleScanAssetsDiscovery;
