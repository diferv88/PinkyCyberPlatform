/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import HeaderComponent from "../header/header.component";
import Card from "../card/card.component";
import ConectionYellowSvg from '../../assets/images/conectionYellow.svg'
import ConectionRedSvg from '../../assets/images/conectionRed.svg'
import Ticket from '../../assets/images/ticket.svg';
import { Title } from "./title/Title";
import "./userRoll.styles.scss";
import TablePartnerAccounts from "./TablePartnerAccounts/TablePartnerAccounts"
import TableUserAccounts from "./TableUserAccounts/TableUserAccounts";
import { Grid } from "@mui/material";

const cards = [
  {
    title: "Reported issues with accounts",
    priority: false,
    quantity: 8,
    icon: Ticket,
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
    icon: ConectionYellowSvg,
    total: 256,
    status: null,
    link: "/",
  },
  {
    title: "Network status: Yellow",
    priority: false,
    quantity: 1,
    icon: ConectionRedSvg,
    total: 256,
    status: null,
    link: "/",
  },
  
];
const UserRoll =  (props) => {
  

  const {rollUser, userAccount, subtitle, terminateUrl,  buttondAddUser="Add partner account", iconSelectMenu} = props;

  return<>

    {/* Cards secction */}
    <HeaderComponent links={{"":"Pinky.ai", "./Partner-Account":`${terminateUrl}`}}>{rollUser}</HeaderComponent>
    <div className="partner-account">
      <section className="section-style">
        <Grid container spacing={1} className="card-container">
          {cards.map((card, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card
                title={card.title}
                priority={card.priority}
                quantity={card.quantity}
                icon={card.icon}
                total={card.total}
                status={card.status}
                link={card.link}
              />
            </Grid>
          ))}
        </Grid>
      </section>
          
      {/* Table Partner accounts management seccion */}
      <section>
        <Title title={subtitle} />
        <TablePartnerAccounts buttondAddUser={buttondAddUser} userRoll={rollUser} iconSelectMenu={iconSelectMenu}/>
      </section>

      {/* Table user accounts management secction*/}
      {userAccount ? (
        <section>
          <Title title="User accounts management" />
          <TableUserAccounts/>
        </section>
      ) : null}
    </div>

  </>

}

export default UserRoll;