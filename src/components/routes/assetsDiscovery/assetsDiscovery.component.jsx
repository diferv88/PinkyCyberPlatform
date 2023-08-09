/* eslint-disable no-unused-vars */
import * as React from "react";
import { Provider } from "react-redux";
import HeaderComponent from "../../header/header.component";
import Button from "../../button/button.component";
import Card from "../../card/card.component";
import calendarSVG from "../../../assets/images/calendar.svg";
import flagSVG from "../../../assets/images/flag.svg";
import flashCirleSVG from "../../../assets/images/flashCircle.svg";
import shiledSearchSVG from "../../../assets/images/shiledSearch.svg";
import tickCircle from "../../../assets/images/tickCircle.svg";
import ticketSVG from "../../../assets/images/ticket.svg";
import ServerStatus from "./serverStatus/serverStatus.component";
import { useNotification } from "../notification/useNotification";
import { Link } from "react-router-dom";
import "./assetsDiscovery.styles.scss";
import { Notification } from "../notification/notification";
import { store } from "../notification/store";

const DashBoard = () => {
  const links = {
    1: "Partner-Account",
    2: "network",
    3: "server",
    4: "server",
    5: "server",
  };
  const serversStatus = {
    1: {
      status: "GREEN",
      number: 1,
      percentage: 32,
      totalPercentage: 100,
    },
    2: {
      status: "GREEN",
      number: 2,
      percentage: 24,
      totalPercentage: 100,
    },
    3: {
      status: "YELLOW",
      number: 3,
      percentage: 56,
      totalPercentage: 100,
    },
    4: {
      status: "RED",
      number: 4,
      percentage: 80,
      totalPercentage: 100,
    },
  };
  const cards = [
    {
      title: "Overdue payments",
      priority: false,
      quantity: 4,
      icon: ticketSVG,
      total: 512,
      status: null,
      link: "/",
    },
    {
      title: "New trouble tickets",
      priority: false,
      quantity: 32,
      icon: calendarSVG,
      total: 1536,
      status: null,
      link: "/",
    },
    {
      title: "User creation requests",
      priority: false,
      quantity: 16,
      icon: null,
      total: 240,
      status: "GREEN",
      link: "/",
    },
    {
      title: "Expiring licenses",
      priority: false,
      quantity: 96,
      icon: null,
      total: 2048,
      status: "RED",
      link: "/",
    },
    {
      title: "Scans performed",
      priority: true,
      quantity: 24,
      icon: shiledSearchSVG,
      total: 1024,
      status: null,
      link: "/",
    },
    {
      title: "Threats detected",
      priority: true,
      quantity: 24,
      icon: flashCirleSVG,
      total: 1024,
      status: null,
      link: "/",
    },
    {
      title: "Online partners",
      priority: false,
      quantity: 20,
      icon: null,
      total: 30,
      status: "RED",
      link: "/",
    },
    {
      title: "Online SaaS clients",
      priority: false,
      quantity: 10,
      icon: calendarSVG,
      total: 50,
      status: null,
      link: "/",
    },
  ];

  const { displayNotification } = useNotification();

  React.useEffect(() => {
    displayNotification({
      message: "This notification displays when the app first renders!"
    });
  }, [displayNotification]);


  return (
    <>
      <HeaderComponent links={""}>Assets discovery / inventory</HeaderComponent>

      <section className="container-information">

      <Provider store={store}>
        <Notification />
      </Provider>
        
        <div className="container-general-overview">
          <div>
            <p>Mother Pinky general overview</p>
          </div>
          <Button
            type="discardOutline"
            size="large"
            position={"right"}
            icons={<img src={tickCircle} alt="calendar" />}
          >
            Status: GREEN
          </Button>
        </div>
        <ul>
          {Object.keys(serversStatus).map((key) => (
            <ServerStatus
              key={key}
              status={serversStatus[key].status}
              number={serversStatus[key].number}
              percentage={serversStatus[key].percentage}
              totalPercentage={serversStatus[key].totalPercentage}
            />
          ))}
          <li className="resources">
            <div>
              <p>Resources</p>
            </div>
            <p>{`${Object.keys(serversStatus).length} dedidated servers`}</p>
            <Link to={"/"}>View more details</Link>
          </li>
        </ul>
      </section>
      {/* <section className="section-style">
        <ul className="card-container">
          {cards.map((card, index) => (
            <>
              <li>
                <Card
                  key={index}
                  title={card.title}
                  priority={card.priority}
                  quantity={card.quantity}
                  icon={card.icon}
                  total={card.total}
                  status={card.status}
                  link={card.link}
                />
              </li>
            </>
          ))}
        </ul>
      </section> */}
    </>
  );
};

export default DashBoard;
