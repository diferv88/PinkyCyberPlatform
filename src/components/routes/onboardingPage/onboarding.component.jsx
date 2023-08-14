// export default ScheduleScan;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import "./onboarding.styles.scss";
import ScheduleScan from "../../scheduleScan/ScheduleScan";


const Onboarding = () => {
  const textData = {
    title: "Review company details",
    onboarding: true,
  }

  return (
    <>
    <div>
      <ScheduleScan title={textData.title} onboarding/>
    </div>
    </>
  );
};

export default Onboarding;
