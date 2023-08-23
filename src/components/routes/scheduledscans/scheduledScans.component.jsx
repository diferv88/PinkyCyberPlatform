import HeaderComponent from "../../header/header.component";
import Card from "../../card/card.component";
import calendarSVG from "../../../assets/images/arrowLeft.svg";
import ConectionYellowSvg from '../../../assets/images/conectionYellow.svg'
import ConectionRedSvg from '../../../assets/images/conectionRed.svg'
import Ticket from '../../../assets/images/ticket.svg';
import { Title } from "./title/Title";
import "./partnerAccount.styles.scss";
import * as React from 'react';
import TablePartnerAccounts from "./TablePartnerAccounts/TablePartnerAccounts";
import TableUserAccounts from "./TableUserAccounts/TableUserAccounts";


const cards = [
  {
    title: "Scans performed (last 24h)",
    priority: false,
    quantity: 8,
    icon: Ticket,
    total: 320,
    status: null,
    link: "/",
  },
  {
    title: "Scans performed (last 30 days)",
    priority: false,
    quantity: 120,
    icon: null,
    total: 320,
    status: "GREEN",
    link: "/",
  },
  {
    title: "Scans scheduled for next 24h",
    priority: false,
    quantity: 8,
    icon: ConectionYellowSvg,
    total: 256,
    status: null,
    link: "/",
  },
  {
    title: "Scans scheduled for next 24h",
    priority: false,
    quantity: 4,
    icon: ConectionRedSvg,
    total: 256,
    status: null,
    link: "/",
  },
  
];
const ScheduledScansIndex =  () => {
  
  return<>

    {/* Cards secction */}
    <HeaderComponent links={""}>Scheduled Scans</HeaderComponent>
    <section className="section-style">
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
        
    {/* Table Partner accounts management seccion */}
    <section>
      <TablePartnerAccounts/>
    </section>

  </>

}

export default ScheduledScansIndex;