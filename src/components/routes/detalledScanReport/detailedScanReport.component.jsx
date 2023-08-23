/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import HeaderComponent from "../../header/header.component";
import Card from "../../card/card.component";
import { Link } from 'react-router-dom/dist'; 
import calendarSVG from "../../../assets/images/arrowLeft.svg";
import ConectionYellowSvg from '../../../assets/images/conectionYellow.svg'
import ConectionRedSvg from '../../../assets/images/conectionRed.svg'
import Ticket from '../../../assets/images/ticket.svg';
import IdentifiedVulnerabilities from '../../../assets/images/Identified-vulnerabilities.svg';
import ConfirmedVulnerabilities from '../../../assets/images/confirmed-vulnerabilities.svg';
import IconCardsPorcent from '../../../assets/images/icon-cards-porcent.svg';
import { Title } from "./title/Title";
import "./detailedScanReport.styles.scss";
import TablePartnerAccounts from "./TablePartnerAccounts/TablePartnerAccounts"
import TableUserAccounts from "./TableUserAccounts/TableUserAccounts";
import { FormControl, Textarea } from '@mui/joy';
import { Box, FormLabel, Select } from '@mui/material';

const cards = [
  {
    title: "Critical",
    icon: Ticket,
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
    icon: Ticket,
    total: 1536,
    status: null,
    color: '#F05F1D'
    // link: "/",
  },
  {
    title: "Medium",
    priority: false,
    quantity: 568,
    icon: null,
    total: 1536,
    status: null,
    // link: "/",
  },
  {
    title: "Low",
    priority: false,
    quantity: 384,
    icon: ConectionYellowSvg,
    total: 1536,
    status: null,
    // link: "/",
  },
  {
    title: "Information",
    priority: false,
    quantity: 256,
    icon: ConectionRedSvg,
    total: 1536,
    status: null,
    // link: "/",
  }
];
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
  
  // const RedirectClick = e => {
  //   console.log(e)
  //   window.localStorage.setItem("MEmailScan", JSON.stringify(true));
  //   window.localStorage.setItem("ClassifyYAssest", JSON.stringify(true));
  //   window.localStorage.setItem("KnowYourVulnerabilities", JSON.stringify(true));
  //   window.localStorage.setItem("activeStep", JSON.stringify("thirdStep"));
  // }

  return<>
    {/* Cards secction */}
    <HeaderComponent links={""}>Detailed scan report</HeaderComponent>
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
          <div className='div-container-info'>
            <div className='div-container-info div-risk-level'>
              <FormLabel className='div-container-info div-risk-level formLabel1'>Risk level:</FormLabel>
              <span className='div-container-info div-risk-level risk-lavelTitle'>MEDIUM</span>
            </div>
          </div>
        </li>
      </ul>
      </FormControl>
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