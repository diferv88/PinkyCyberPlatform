import HeaderComponent from "../../header/header.component";
import Card from "../../card/card.component";
import calendarSVG from "../../../assets/images/arrowLeft.svg";
import { Title } from "./title/Title";
import "./PartnerAccount.styles.scss";
import * as React from 'react';
import TablePartnerAccounts from "./TablePartnerAccounts/TablePartnerAccounts"
import TableUserAccounts from "./TableUserAccounts/TableUserAccounts";

const cards = [
  {
    title: "Reported issues with accounts",
    priority: false,
    quantity: 8,
    icon: calendarSVG,
    total: 120,
    status: null,
    link: "/",
  },
  {
    title: "Online Partners",
    priority: false,
    quantity: 24,
    icon: null,
    total: 256,
    status: "GREEN",
    link: "/",
  },
  {
    title: "Network status: Red",
    priority: false,
    quantity: 3,
    icon: calendarSVG,
    total: 256,
    status: "GREEN",
    link: "/",
  },
  {
    title: "Network status: Yellow",
    priority: false,
    quantity: 1,
    icon: null,
    total: 256,
    status: "RED",
    link: "/",
  },
  
];
const PartnerAccountsIndex =  () => {
  
  return<>

    {/* Cards secction */}
    <HeaderComponent links={""}>Clients accounts</HeaderComponent>
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
      <Title title="Partner accounts management" />
      <TablePartnerAccounts/>
    </section>

    {/* Table user accounts management secction*/}
    <section>
      <Title title="User accounts management" />
      <TableUserAccounts/>

    </section>

  </>

}

export default PartnerAccountsIndex;