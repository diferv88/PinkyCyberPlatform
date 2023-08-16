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
import { Title } from "./title/Title";
import "./detailedScanReport.styles.scss";
import TablePartnerAccounts from "./TablePartnerAccounts/TablePartnerAccounts"
import TableUserAccounts from "./TableUserAccounts/TableUserAccounts";

const cards = [
  {
    title: "Critical",
    icon: Ticket,
    status: null,
    // link: "/",
    quantity: 16,
    total: 1536,
  },
  {
    title: "Hide",
    priority: false,
    quantity: 32,
    icon: Ticket,
    total: 1536,
    status: null,
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
    icon: Ticket,
    total: "100%",
    status: null,
    link: "/",
  },
  {
    title: "HIPPA",
    priority: false,
    quantity: "64%",
    icon: Ticket,
    total: "100%",
    status: null,
    link: "/",
  },
  {
    title: "SOC-2",
    priority: false,
    quantity: "80%",
    icon: Ticket,
    total: "100%",
    status: null,
    link: "/",
  },
  {
    title: "GDPR",
    priority: false,
    quantity: "88%",
    icon: Ticket,
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
  
  const RedirectClick = e => {
    console.log(e)
    window.localStorage.setItem("MEmailScan", JSON.stringify(true));
    window.localStorage.setItem("ClassifyYAssest", JSON.stringify(true));
    window.localStorage.setItem("KnowYourVulnerabilities", JSON.stringify(true));
    window.localStorage.setItem("activeStep", JSON.stringify("thirdStep"));
  }


  return<>
    {/* Cards secction */}
    <HeaderComponent links={""}>Detailed scan report</HeaderComponent>
    <section className="section-style-detailedScanReport cards">
      <p className="section-style-detailedScanReport title-vulnerability">Vulnerabilities</p>
      {/* <Link to={"/"} > 
        <button onClick={RedirectClick}>test</button>
      </Link> */}
      <ul className="card-container">
        {cards.map((card, index) => (
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
          <>
          <li>
            <Card
              key={index}
              imagen={card.imageUrl}
            />
          </li>
        </>
        ))}
      </ul>
    </section>

    {/* Table user accounts management secction*/}
    <section>
      <Title title="Vulnerability summary" />
      {/* <TableUserAccounts/> */}

    </section>

  </>

}

export default DetailedScanReport;