/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import HeaderComponent from "../../header/header.component";
import Button from "../../button/button.component";
import Card from "../../card/card.component";
import calendarSVG from "../../../assets/images/calendar.svg";
import flashCirleSVG from "../../../assets/images/flashCircle.svg";
import shiledSearchSVG from "../../../assets/images/shiledSearch.svg";
import tickCircle from "../../../assets/images/tickCircle.svg";
import inventoriList from "../../../assets/images/iList.svg";
import vulnerabilityScan from "../../../assets/images/VulnerabilitiScan.svg";
import mitigationPlan from "../../../assets/images/mPlan.svg";
import operationRisk from "../../../assets/images/opRisk.svg";
import reputationalRisk from "../../../assets/images/ReputationalRisk.svg";
import legalRisk from "../../../assets/images/lCrisk.svg";
import ServerStatus from "./serverStatus/serverStatus.component";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useNotification } from "../notification/useNotification";
// import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./home.styles.scss";
import { Notification } from "../notification/notification";
import { store } from "../notification/store";
import { Link } from "react-router-dom/dist";

const firstComponent = () => {
  return <div>First Component</div>
}
const secondComponent = () => {
  return <div>Second Component</div>
}
const thirdComponent = () => {
  return <div>Third Component</div>
}
const finalComponent = () => {
  return <div>Final Component</div>
}
const learnMore = () => {
  return <div>learnMore</div>
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#0FB5AE',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#0FB5AE',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[100] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));


const stepsLabel = ['', '', '','',''];

const Home = () => {
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
      total: 512,
      status: null,
      link: "/",
      img: inventoriList,
    },
    {
      title: "New trouble tickets",
      priority: false,
      quantity: 32,
      icon: calendarSVG,
      total: 1536,
      status: null,
      link: "/",
      img: vulnerabilityScan,
    },
    {
      title: "User creation requests",
      priority: false,
      quantity: 16,
      icon: null,
      total: 240,
      status: "GREEN",
      link: "/",
      img: mitigationPlan,
    },
    {
      title: "Expiring licenses",
      priority: false,
      quantity: 96,
      icon: null,
      total: 2048,
      status: "RED",
      link: "/",
      img: operationRisk,
    },
    {
      title: "Scans performed",
      priority: true,
      quantity: 24,
      icon: shiledSearchSVG,
      total: 1024,
      status: null,
      link: "/",
      img: reputationalRisk,
    },
    {
      title: "Threats detected",
      priority: true,
      quantity: 24,
      icon: flashCirleSVG,
      total: 1024,
      status: null,
      link: "/",
      img: legalRisk,
    },
  ];
  const [steps, setSteps] = useState([
    { key: 'firstStep', label: 'Proceed to know your enverioment', isDone: true, component: firstComponent, btn:"Scan", testNavigation: "/Schedule-Scan-Assets"},
    { key: 'secondStep', label: 'Classify your assets', isDone: false, component: secondComponent, btn:"Clasify", testNavigation: "/"},
    { key: 'thirdStep', label: 'Know your vulnerabilities', isDone: false, component: thirdComponent, btn:"Discover", testNavigation: "/"},
    { key: 'finalStep', label: 'Mitigrate your risks', isDone: false, component: finalComponent, btn:"Mitigate", testNavigation: "/"},
    { key: 'LearnMore', label: 'Learn more and improve', isDone: false, component: learnMore, btn:"Learn", testNavigation: "/"},
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      console.log('====================================');
      console.log("steps key ==== ",steps[steps.length - 1].key);
      console.log("activeStep key ==== ", activeStep.key);
      console.log('====================================');
      // setSteps(steps[3].isDone);
      return;
    }
    if (steps[steps.length - 1].key !== activeStep.key) {
      console.log('====================================');
      console.log("steps key ==== ",steps[steps.length - 1].key);
      console.log("activeStep key ==== ", activeStep.key);
      console.log('====================================');
      // setSteps(steps[3].isDone);
    }

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key || steps[steps.length - 1].key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveStep(steps[index + 1]);
  }

  const handleBack = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);
    if (index === 0) return;

    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = false;
      return x;
    }))
    setActiveStep(steps[index - 1]);
  }

  const handleNext1 = (test) => {
    console.log(test)
  }
  
  const { displayNotification } = useNotification();

  const [step, setStep] = React.useState(0);

  const changeToLink = (test) => {
    console.log(test);
  }

  let navigate = useNavigate();
  const routeChange= (i) => {
    let path = i;
    console.log(path);

  }

  React.useEffect(() => {
    displayNotification({
      message: "This notification displays when the app first renders!"
    });
  }, [displayNotification]);

  return (
    <>
      <HeaderComponent links={""}>Aggregated risk scores</HeaderComponent>

      <Stack sx={{ width: '100%' }} spacing={4}>
        <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
          {stepsLabel.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <section className="container-information">

      <Provider store={store}>
        <Notification />
      </Provider>
          <div className="resources">
            <div className="App">
              <div className="box">
                <div className="steps">
                  <ul className="nav">
                    {steps.map((step, i) => {
                      return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                        
                        <div onClick={step.isDone ? handleNext : ()=>{}} className="bg">
                          <div className="bgContent">
                            <div className="ctext">
                              <span>{step.label} </span>
                              <Button
                                onClick={routeChange(step.testNavigation)}
                                type={`${step.isDone ? 'danger' : 'dangerOutline'}`}
                                size="medium"
                                position={"left"}
                                icons={<img src={tickCircle} alt="calendar" />}
                              >
                                {step.btn}
                              </Button>
                            </div>
                            <div className="cstep">{i + 1}</div>
                          </div>
                        </div>
                      </li>
                    })}
                  </ul>
                </div>
                {/* <div className="step-component">
                  {activeStep.component()}
                </div>
                <div className="btn-component">
                  <input type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
                  <input type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
                </div> */}
              </div>
            </div>
          </div>
      </section>
      <section className="section-style">
        <ul className="card-container">
          {cards.map((card, index) => (
            <>
              <li>
                <Card
                  key={index}
                  imagen={card.img}
                />
              </li>
            </>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
