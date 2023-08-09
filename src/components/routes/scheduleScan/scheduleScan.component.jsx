/* eslint-disable no-unused-vars */
import * as React from "react";
import { Provider } from "react-redux";
import HeaderComponent from "../../header/header.component";
import Button from "../../button/button.component";
import CheckBox from "../../checkBox/CheckBox";
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
import "./scheduleScan.styles.scss";
import { Notification } from "../notification/notification";
import { store } from "../notification/store";

const ScheduleScan = () => {
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

  const [optionChecked1, setOptionChecked1] = React.useState(false)
  const [optionChecked2, setOptionChecked2] = React.useState(false)

  const checkedOptions1 = () => {
  setOptionChecked1(!optionChecked1);
  }
  const checkedOptions2 = () => {
    setOptionChecked2(!optionChecked2);
  }


  return (
    <>
    {console.log(optionChecked1)}
      <HeaderComponent links={""}>Schedule Scan</HeaderComponent>

      <section className="container-schedule">

      <Provider store={store}>
        <Notification />
      </Provider>
        
        <div>
          <div style={{display: "flex", justifyContent:"center", marginTop: "3rem"}}>
            <p>Assets discovery / inventory</p>
          </div>
          <div style={{marginTop: "3rem", marginBottom:"3rem"}}>
            <p>Schedule scan</p>
            <p style={{color:"#3E4852", fontWeight: "300"}}>Component Calendar</p>
          </div>
          <div style={{marginTop: "3rem", marginBottom:"3rem", paddingRight:"1rem"}}>
            <p>Disclaimer</p>
            <p style={{fontWeight:"400", textAlign: "justify"}}>Please accept permission request to map the network and make sure all your devices are working and are connected to the network. It will take up 24h to complete the scan. Meanwhile, please read more on Assets Inventory. Thank you for patience!</p>
          </div>
          <div style={{marginTop: "3rem", marginBottom:"3rem"}}>
            
            <p>Consent</p>
            <br />
            <CheckBox label={"I accept the request to map the network."} onChange={checkedOptions1} />
            <CheckBox label={"I confirm that all devices are working and connected to the network."} onChange={checkedOptions2} />
          </div>
          <div style={{display: "flex", justifyContent: "space-around", marginTop: "3rem"}}>
            <Button 
              // onClick={routeChange(step.testNavigation)}
              type={(optionChecked1 && optionChecked2) ? "succes" : "sucessOutline"}
              size="medium"
              position={"left"}
              icons={<img src={tickCircle} alt="calendar" />}
            >
              Schedule and continue
            </Button>
            <Button 
              // onClick={routeChange(step.testNavigation)}
              type={"discard"}
              size="medium"
              position={"left"}
              icons={<img src={tickCircle} alt="calendar" />}
            >
              Discard
            </Button>
          </div>
        </div>

        {/* <div className="container-general-overview">
          <div>
            <p>Mother Pinky general overview</p>
          </div>
        </div> */}
        {/* <ul>
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
        </ul> */}
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

export default ScheduleScan;
