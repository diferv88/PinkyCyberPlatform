/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import HeaderComponent from "../../header/header.component";
import { Provider } from "react-redux";
import { useNotification } from "../notification/useNotification";
import { Notification } from "../notification/notification";
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

const cards = [
  {
    title: "Last scan performed",
    subtitle: "01-01-2022 20:00:00",
    icon: Ticket,
    status: null,
    button: true,
    buttonText: "Repeat scan",
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

  const { displayNotification } = useNotification();

  React.useEffect(() => {
    displayNotification({
      title: "Important! Our aggregated risk score is calculated based on 3 types of risks.",
      message: "Don’t panic, yet! Our cybersecurity experts treat every system as vulnerable unless proven otherwise. At first login you will see a high aggregated risk score. It is calculated based on 3 types of risks: Operational, Legal & Compliance, Reputational. Code red is for 100-70% risk, yellow for 69-50% and green for 49-0%. Score will improve as you go through development of your cybersecurity program.",
      type: 'error',
      timeout: null
    });
  }, [displayNotification]);

  return<>
    {/* Cards secction */}
    <HeaderComponent links={{"":"Pinky.ai", "./Inventory":"Inventory"}}>Inventory list</HeaderComponent>
    <section className="section-style cards">
      <Link to={"/"} > 
        <button onClick={RedirectClick}>test</button>
      </Link>
      <Grid container spacing={1} className="card-container">
        {cards.map((card, index) => (
          <Grid key={index} item xs={12} md={6} lg={2.4}>
            <Card
              title={card.title}
              priority={card.priority}
              quantity={card.quantity}
              icon={card.icon}
              total={card.total}
              status={card.status}
              link={card.link}
              button={card.button}
              buttonText={card.buttonText}
              subtitle={card?.subtitle ? card.subtitle : null}
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
    <section className="notification">
      <Provider store={store}>
        <Notification />
      </Provider>
    </section>
    {/* Table user accounts management secction*/}
    <section>
      <Title title="Devices management" />
      <TableUserAccounts/>

    </section>

  </>

}

export default InventoryList;