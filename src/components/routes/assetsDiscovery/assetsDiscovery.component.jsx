/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import "./assetsDiscovery.styles.scss";
import ScanLoading from "../../scanLoading/ScanLoading";


const AssetsDiscovery = () => {
  const textData = {
    title: "Assets discovery / inventory",
    titleScan: "Scanning...",
    bodyText: "We are now scanning all connected devices to help you map your network, please make sure all your devices are online and connected.",
    redirectNavigate: "/Email-Scan"
  }

  return (
    <>
    <div>
      <ScanLoading title={textData.title} titleScan={textData.titleScan} bodyText={textData.bodyText} redirectNavigate={textData.redirectNavigate}/>
    </div>
    </>
  );
};

export default AssetsDiscovery;
