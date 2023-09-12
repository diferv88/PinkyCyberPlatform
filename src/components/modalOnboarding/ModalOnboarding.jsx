/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import pinkyLoginLogo from '../../assets/images/pinkycibersafelogo.svg'
import './ModalEmailScan.styles.scss'
import Link1 from '@mui/material/Link';
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom/dist';

const ModalEmailScan = ({ title, bodyText, buttonText }) => {

  // Hooks to logic trough flows in EmailScan

  const [formState, setFormState] = useState({
    title: title,
    type: 'text',
    bodyText: bodyText,
    buttonText: buttonText,
    buttonLink: '/',
    showForgotPasswordLink: true,
    showRequirements: false,
    showInformationBox: false,
    flow: '1',
    auxiliarText: 'Email not displaying correctly? ',
    copyrightText: 'Copyright 2023 Pinky CyberSafe®. ',
    rightsReservedText: 'All Rights Reserved. For further info please contact Pinky CyberSafe®',
  });

  const linksAsociete = [
    "facebook",
    "/",
    "linkedin",
    "/",
    "twitter",
    "/",
    "website",
  ]
  const RedirectClick = e => {
    if (title === "Inventory scan completed!") {
      window.localStorage.setItem("MEmailScan", JSON.stringify(true));
      window.localStorage.setItem("ClassifyYAssest", JSON.stringify(false));
      window.localStorage.setItem("activeStep", JSON.stringify("secondStep"));     
    }else{
      window.localStorage.setItem("MEmailScan", JSON.stringify(true));
      window.localStorage.setItem("ClassifyYAssest", JSON.stringify(true));
      window.localStorage.setItem("KnowYourVulnerabilities", JSON.stringify(true));
      window.localStorage.setItem("MitigateYourRisk", JSON.stringify(true));
      window.localStorage.setItem("activeStep", JSON.stringify("finalStep"));         
    }
  }
  
  return (
    <>
      <div className="container">
        <div className="form-container">
          <img src={pinkyLoginLogo} className='pinky-logo'/>
          <h4>{formState.title}</h4>
          <div className='bodyText'>
            <p>{formState.bodyText}</p>
          </div>
          <form>            
            
            <div className="links">
              <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }} >
                <button
                  className={`sing-in`}
                  onClick={RedirectClick}
                >
                  {formState.buttonText}
                </button>
              </Link>
              <br />
              <br />
            </div>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <div style={{display: 'flex', justifyContent:"space-between", width: "560px", margin:"auto"}}>
              {linksAsociete.map((links, index) => (
                <Link1 key={index} style={{color:"#3892F3", fontWeight: 400, fontSize:"14px"}}>{links}</Link1>
                ))}
            </div>
            <br />
            <hr />
            <br />
            <br />
            <span style={{color:"#3E4852", fontWeight: 400, fontSize:"14px",display:"flex", justifyContent:"center"}}>{formState.auxiliarText} <Link style={{color:"#3892F3", fontWeight: 400, fontSize:"14px"}}>View in browser</Link></span>
            <div style={{display:"flex", justifyContent:"center", flexDirection:"column", marginTop:"25px"}}>
              <p style={{color:"#A4AEB8", fontWeight: 400, fontSize:"11px",margin:"auto"}}>{formState.copyrightText}</p>
              <p style={{color:"#A4AEB8", fontWeight: 400, fontSize:"11px",margin:"auto"}}>{formState.rightsReservedText}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalEmailScan;