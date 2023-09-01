/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import HeaderComponent from "../../header/header.component";
import Card from "../../card/card.component";
import { Link } from 'react-router-dom/dist'; 
import Button from "../../button/button.component";
import IdentifiedVulnerabilities from '../../../assets/images/Identified-vulnerabilities.svg';
import ConfirmedVulnerabilities from '../../../assets/images/confirmed-vulnerabilities.svg';
import IconCardsPorcent from '../../../assets/images/icon-cards-porcent.svg';
import IconWarning from '../../../assets/images/warning.svg';
import IconFlagHigh from '../../../assets/images/flag-high.svg';
import IconFlagMedium from '../../../assets/images/flag-medium.svg';
import IconFlagLow from '../../../assets/images/flag-low.svg';
import IconInfo from '../../../assets/images/info-circle.svg';
import clouseIcon from "../../../assets/images/scan.svg";
import iconTckSquare from "../../../assets/images/tick-square-white.svg";
import { Title } from "./title/Title";
import "./detailedScanReport.styles.scss";
import TablePartnerAccounts from "./TablePartnerAccounts/TablePartnerAccounts"
import { FormControl } from '@mui/joy';
import { Avatar, FormLabel } from '@mui/material';


const cardsPorcent = [
  {
    title: "ISO 27001 Compliance",
    priority: false,
    quantity: "72%",
    icon: IconCardsPorcent,
    total: "100%",
    status: null,
    link: "/",
  },
  {
    title: "HIPPA",
    priority: false,
    quantity: "64%",
    icon: IconCardsPorcent,
    total: "100%",
    status: null,
    link: "/",
  },
  {
    title: "SOC-2",
    priority: false,
    quantity: "80%",
    icon: IconCardsPorcent,
    total: "100%",
    status: null,
    link: "/",
  },
  {
    title: "GDPR",
    priority: false,
    quantity: "88%",
    icon: IconCardsPorcent,
    total: "100%",
    status: null,
    link: "/",
  },
]
const imageCards=[
  {imageUrl:IdentifiedVulnerabilities},
  {imageUrl:ConfirmedVulnerabilities},
]

const DetailedScanReport =  () => {
  // let iconInfo = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.379 17.4533L13.4181 17.4181L13.4533 17.379C13.5962 17.2202 13.7424 17.0215 13.8481 16.7524C13.938 16.5328 14 16.2766 14 16C14 15.7183 13.9357 15.4577 13.8431 15.2354C13.7481 15.0075 13.6162 14.802 13.4533 14.621L13.4181 14.5819L13.379 14.5467C13.2967 14.4726 13.2093 14.405 13.1171 14.3443C13.5032 14.0226 13.75 13.5386 13.75 13V8C13.75 7.03772 12.9623 6.25 12 6.25C11.0377 6.25 10.25 7.03772 10.25 8V13C10.25 13.5386 10.4968 14.0226 10.8829 14.3443C10.7907 14.405 10.7033 14.4726 10.621 14.5467L10.5819 14.5819L10.5467 14.621C10.3838 14.802 10.2519 15.0075 10.1569 15.2354C10.0643 15.4577 10 15.7183 10 16C10 16.2766 10.062 16.5328 10.1519 16.7524C10.2576 17.0215 10.4038 17.2202 10.5467 17.379L10.5819 17.4181L10.621 17.4533C10.802 17.6162 11.0075 17.7481 11.2354 17.8431C11.4577 17.9357 11.7183 18 12 18C12.2817 18 12.5423 17.9357 12.7646 17.8431C12.9925 17.7481 13.198 17.6162 13.379 17.4533ZM3 12C3 7.04228 7.04228 3 12 3C16.9577 3 21 7.04228 21 12C21 16.9577 16.9577 21 12 21C7.04228 21 3 16.9577 3 12Z" fill="#3892F3" stroke="#3892F3" strokeWidth="2"/></svg>

  const cards = [
    {
      title: "Critical",
      icon: IconWarning,
      status: null,
      // link: "/",
      quantity: 16,
      color: '#EA3829',
      total: 1536,
    },
    {
      title: "Hide",
      priority: false,
      quantity: 32,
      icon: IconFlagHigh,
      total: 1536,
      status: null,
      color: '#F05F1D'
      // link: "/",
    },
    {
      title: "Medium",
      priority: false,
      quantity: 568,
      icon: IconFlagMedium,
      total: 1536,
      status: null,
      // link: "/",
    },
    {
      title: "Low",
      priority: false,
      quantity: 384,
      icon: IconFlagLow,
      total: 1536,
      status: null,
      // link: "/",
    },
    {
      title: "Information",
      priority: false,
      quantity: 256,
      icon: IconInfo,
      total: 1536,
      status: null,
      // link: "/",
    }
  ];
  
  const RedirectClick = () => {
    window.localStorage.setItem("MEmailScan", JSON.stringify(true));
    window.localStorage.setItem("ClassifyYAssest", JSON.stringify(true));
    window.localStorage.setItem("KnowYourVulnerabilities", JSON.stringify(true));
    window.localStorage.setItem("MitigateYourRisk", JSON.stringify(true));
    window.localStorage.setItem("activeStep", JSON.stringify("LearnMore"));
  }


  return<>
    {/* Cards secction */}
    <HeaderComponent links={{"":"Pinky.ai", "/":"Issues management", "./InventoryList":"Detailed scan report"}}>Detailed scan report</HeaderComponent>
    <section className="section-style-detailedScanReport formControl">
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <ul className="FomrControl-container">
        <li>
          <div className='div-container-info'>
            <FormLabel>Scan report:</FormLabel>
            <span className='div-container-info formBody'>5-6-2022 20:07:34 <span className='div-container-info formBody spanSection'> (UTC+02:00)</span></span>
            <FormLabel>Scan address:</FormLabel>
            <a className='div-container-info spanLink' href='#'>SaaS Client name</a>
          </div>
        </li>
        <li>
          <div className='div-container-info'>
            <FormLabel>Scan time:</FormLabel>
            <span className='div-container-info formBody'>3-6-2022 20:51:22 <span className='div-container-info formBody spanSection'> (UTC+02:00)</span></span>
            <FormLabel>Scan duration:</FormLabel>
            <span className='div-container-info formBody'>00:08:25:56</span>
          </div>
        </li>
        <li>
          <div className='div-container-info'>
            <FormLabel>Total Requests:</FormLabel>
            <span className='div-container-info formBody' style={{height:'38px'}}>461.434</span>
            <FormLabel>Total Requests:</FormLabel>
            <span className='div-container-info formBody'>15,2 r/s</span>
          </div>
        </li>
        <li className='li-risk-level-container'>
          <div className='div-container-info' style={{display:'flex'}}>
            <div className='div-container-info div-risk-level'>
              <div><FormLabel className='div-container-info div-risk-level formLabel1'>Risk level:</FormLabel>
              <span className='div-container-info div-risk-level risk-lavelTitle'>MEDIUM</span></div>
              <div className='div-container-info icon-avatar'>
                <Avatar src={IconFlagMedium} sx={{bgcolor: 'white'}} />
              </div>
            </div>
          </div>
        </li>
      </ul>
      </FormControl>
      <div className='button-section-information'>
        <Link to={"/"} style={{marginRight:'15px'}}>
          <Button 
            onClick={RedirectClick}
            type={"succes"}
            size="low"
            position={"left"}
            icons={<img style={{marginRight:"5px"}} src={iconTckSquare} alt="confimScan" />}
          >
            Confirm scan results
          </Button>
        </Link>
        <Link to={"#"} > 
          <Button 
            // onClick={routeChange(step.testNavigation)}
            type={"discard"}
            size="low"
            position={"left"}
            icons={<img style={{marginRight:"5px"}} src={clouseIcon} alt="redeScan" />}
          >
            Redo scan
          </Button>
        </Link>
      </div>
    </section>
    <section className="section-style-detailedScanReport cards">
      <p className="section-style-detailedScanReport title-vulnerability">Vulnerabilities</p>
      {/* <Link to={"/"} > 
        <button onClick={RedirectClick}>test</button>
      </Link> */}
      <ul className="card-container">
        {cards.map((card, index) => (
          <li key={index}>
            <Card
              color={card.color}
              title={card.title}
              priority={card.priority}
              quantity={card.quantity}
              icon={card.icon}
              total={card.total}
              status={card.status}
              link={card.link}
            />
          </li>
        ))}
      </ul>
    </section>
    <section className="section-style-detailedScanReport cardsporcent">
      <ul className="card-container">
        {cardsPorcent.map((card, index) => (
          <li key={index}>
            <Card
              title={card.title}
              priority={card.priority}
              quantity={card.quantity}
              icon={card.icon}
              total={card.total}
              status={card.status}
              link={card.link}
            />
          </li>
        ))}
      </ul>
    </section>
    <section className="section-style-detailedScanReport graph">
      <ul className="card-container">
        {imageCards.map((card, index) => (
          <li key={index}>
            <Card
              key={index}
              imagen={card.imageUrl}
            />
          </li>
        ))}
      </ul>
    </section>

    {/* Table user accounts management secction*/}
    <section>
      <Title title="Vulnerability summary" />
      <TablePartnerAccounts/>

    </section>

  </>

}

export default DetailedScanReport;