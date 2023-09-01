/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import "./emailScan.styles.scss";
import Modal from '../../modalEmailScan/ModalEmailScan'


const EmailScan = () => {
  const textData = {
    title: "Inventory scan completed!",
    body: "Your assets discovery/inventory scan is completed please proceed to review and classify your associated risks.",
    btnText: "Classify associated risks"
  }

  return (
    <>
    <div className='container email-scan'>
      <Modal title={textData.title} bodyText={textData.body} buttonText={textData.btnText} />
    </div>
    </>
  );
};

export default EmailScan;
