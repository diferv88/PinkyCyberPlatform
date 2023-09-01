/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import HeaderComponent from "../../header/header.component";
import { store } from "../notification/store";
import Card from "../../card/card.component";
import { Link } from 'react-router-dom/dist'; 
import calendarSVG from "../../../assets/images/arrowLeft.svg";
import ConectionYellowSvg from '../../../assets/images/conectionYellow.svg'
import ConectionRedSvg from '../../../assets/images/conectionRed.svg'
import Ticket from '../../../assets/images/ticket.svg';
import LegalCimplianceRisk from '../../../assets/images/legalComplianceRisk.svg';
import OperationalRisk from '../../../assets/images/operationalRisk.svg';
import ReputationalRisk from '../../../assets/images/reputationalRisk1.svg';
import { Title } from "./title/Title";
import "./inventoryList.styles.scss";
import TablePartnerAccounts from "./TablePartnerAccounts/TablePartnerAccounts"
import TableUserAccounts from "./TableUserAccounts/TableUserAccounts";
import { Grid } from '@mui/material';

let codeIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.99 7.80725V7.81V16.19C20.99 17.8111 20.5106 18.9851 19.7429 19.7529C18.9751 20.5206 17.8011 21 16.18 21H7.81C6.18889 21 5.01517 20.5207 4.24755 19.7521C3.47978 18.9834 3 17.8068 3 16.18V7.81C3 6.18887 3.47936 5.01486 4.24711 4.24711C5.01486 3.47936 6.18887 3 7.81 3H16.19C17.8113 3 18.9849 3.47944 19.7512 4.24666C20.5173 5.01368 20.9945 6.18676 20.99 7.80725ZM10.7705 10.173C9.9948 9.0103 8.92411 8.06488 7.67117 7.43755C6.8086 6.99847 5.75088 7.34525 5.32316 8.21763C4.89538 9.07964 5.22922 10.1381 6.11994 10.568C6.77556 10.8973 7.3518 11.3947 7.78865 12.0012C7.36102 12.6055 6.78441 13.1036 6.11691 13.4335L6.11691 13.4335L6.11279 13.4356C5.24924 13.8673 4.88114 14.9155 5.32801 15.7921C5.63626 16.4039 6.25123 16.75 6.89 16.75C7.16591 16.75 7.43822 16.6789 7.66721 16.5644C8.92179 15.9371 9.99388 14.991 10.7704 13.8272C11.5165 12.7202 11.5165 11.28 10.7705 10.173ZM13 16.75H17C17.9623 16.75 18.75 15.9623 18.75 15C18.75 14.0377 17.9623 13.25 17 13.25H13C12.0377 13.25 11.25 14.0377 11.25 15C11.25 15.9623 12.0377 16.75 13 16.75Z" fill="#0FB5AE" stroke="#FFFFFF" strokeWidth="2"/>
</svg>

const cards = [
  {
    title: "Last scan performed",
    subtitle: "01-01-2022 20:00:00",
    icon: Ticket,
    status: null,
    button: true,
    buttonText: "Repeat scan",
    buttonIcon: codeIcon,
    linkButton: '/Assets-Discovery',
    link: "/",
  },
  {
    title: "New devices",
    priority: false,
    quantity: 16,
    icon: Ticket,
    total: 120,
    status: null,
    link: "/",
  },
  {
    title: "Unassigned risk type",
    priority: false,
    quantity: 16,
    icon: null,
    total: 48,
    status: null,
    link: "/",
  },
  {
    title: "Unassigned risk impact",
    priority: false,
    quantity: 16,
    icon: ConectionYellowSvg,
    total: 48,
    status: null,
    link: "/",
  },
  {
    title: "Unassigned risk level",
    priority: false,
    quantity: 16,
    icon: ConectionRedSvg,
    total: 48,
    status: null,
    link: "/",
  }
];
const imageCards=[
  {imageUrl:OperationalRisk},
  {imageUrl:ReputationalRisk},
  {imageUrl:LegalCimplianceRisk}
]
const InventoryList =  () => {
  
  const RedirectClick = () => {
    window.localStorage.setItem("MEmailScan", JSON.stringify(true));
    window.localStorage.setItem("ClassifyYAssest", JSON.stringify(true));
    window.localStorage.setItem("KnowYourVulnerabilities", JSON.stringify(true));
    window.localStorage.setItem("activeStep", JSON.stringify("thirdStep"));
  }

  return<>
    {/* Cards secction */}
    <HeaderComponent links={{"":"Pinky.ai", "./Inventory":"Inventory"}}>Inventory list</HeaderComponent>
    <section className="section-style cards">
      <Grid container spacing={1} className="card-container">
        {cards.map((card, index) => (
          <Grid key={index} item xs={12} md={6} lg={2.4}>
            <Card
              title={card.title}
              priority={card.priority}
              quantity={card.quantity}
              subtitle={card?.subtitle ? card.subtitle : null}
              icon={card.icon}
              total={card.total}
              status={card.status}
              link={card.link}
              button={card.button}
              buttonText={card.buttonText}
              buttonIcon={card.buttonIcon}
              linkButton={card.linkButton}
            />
          </Grid>
        ))}
      </Grid>
    </section>
    <section className="section-style graph">
    <Grid container spacing={1} className="card-container">
        {imageCards.map((card, index) => (
          <>
          <Grid key={index} item xs={12} lg={4}>
            <Card
              key={index}
              imagen={card.imageUrl}
            />
          </Grid>
        </>
        ))}
      </Grid>
    </section>
    {/* Table user accounts management secction*/}
    <section>
      <Title title="Devices management" />
      <TableUserAccounts/>

    </section>

  </>

}

export default InventoryList;