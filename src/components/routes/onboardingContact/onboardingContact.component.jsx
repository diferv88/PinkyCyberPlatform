// export default ScheduleScan;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import "./onboardingContact.styles.scss";
import ScheduleScan from "../../scheduleScan/ScheduleScan";


const OnboardingContact = () => {
  const textData = {
    title: "Review contact and site location details",
    onboardingContact: true,
  }

  return (
    <>
    <div>
      <ScheduleScan title={textData.title} onboardingContact/>
    </div>
    </>
  );
};

export default OnboardingContact;
