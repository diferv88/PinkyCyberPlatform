// export default ScheduleScan;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import "./onboardingComplete.styles.scss";
import ScheduleScan from "../../scheduleScan/ScheduleScan";


const OnboardingComplete = () => {
  const textData = {
    title: "Congratulations!",
    onboardingComplete: true,
  }

  return (
    <>
    <div>
      <ScheduleScan title={textData.title} onboardingComplete/>
    </div>
    </>
  );
};

export default OnboardingComplete;
