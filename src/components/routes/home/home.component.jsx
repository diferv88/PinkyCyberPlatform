/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
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
import { useNavigate } from "react-router-dom";
import "./home.styles.scss";
import { Notification } from "../notification/notification";
import { store } from "../notification/store";
import { Link } from "react-router-dom";
import { Grid } from "@mui/joy";

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


const stepsLabel = ['Let’s get started', 'Environment Mapping', 'Assets risk classified','', 'Penetration tests', '', 'Mitigation plan in progress', '', 'Continuous learning', ''];

const Home = () => {

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

  let iconScan = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 9.5V14.5C17 16.5 16 17.5 14 17.5H10C8 17.5 7 16.5 7 14.5V9.5C7 7.5 8 6.5 10 6.5H14C16 6.5 17 7.5 17 9.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  let iconClasify = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="white" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="white" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" stroke="white" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="white" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  let iconDiscover = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  let iconMitigate = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5902 10.5501V7.12006C20.5902 5.89006 19.6502 4.53006 18.5002 4.10006L13.5102 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.1402 21.7401 11.0702 22.0001 12.0002 22.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.9955 21H21.0045" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  let iconLearn = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9099 11.1198C20.9099 16.0098 17.3599 20.5898 12.5099 21.9298C12.1799 22.0198 11.8198 22.0198 11.4898 21.9298C6.63984 20.5898 3.08984 16.0098 3.08984 11.1198V6.72979C3.08984 5.90979 3.70986 4.97979 4.47986 4.66979L10.0498 2.38982C11.2998 1.87982 12.7098 1.87982 13.9598 2.38982L19.5298 4.66979C20.2898 4.97979 20.9199 5.90979 20.9199 6.72979L20.9099 11.1198Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z" stroke="white" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12.5V15.5" stroke="white" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  
  const [activeStepPKE, setActiveStepPKE] = useState(() => {
      const activePKE = window.localStorage.getItem("MEmailScan");
      if (activePKE) {
        return JSON.parse(activePKE);
      } else {
        return false;
      }
    }
  )
  const [activeStepCYA, setActiveStepCYA] = useState(() => {
      const activePKE = window.localStorage.getItem("ClassifyYAssest");
      if (activePKE) {
        return JSON.parse(activePKE);
      } else {
        return false;
      }
    }
  )
  const [activeStepKYV, setActiveStepKYV] = useState(() => {
      const activePKE = window.localStorage.getItem("KnowYourVulnerabilities");
      if (activePKE) {
        return JSON.parse(activePKE);
      } else {
        return false;
      }
    }
  )
  const [activeStepMYR, setActiveStepMYR] = useState(() => {
      const activePKE = window.localStorage.getItem("MitigateYourRisk");
      if (activePKE) {
        return JSON.parse(activePKE);
      } else {
        return false;
      }
    }
  )
  const [activeStepLMI, setActiveStepLMI] = useState(() => {
      const activePKE = window.localStorage.getItem("LearnMore");
      if (activePKE) {
        return JSON.parse(activePKE);
      } else {
        return false;
      }
    }
  )
  const [isActiveStep, setIsActiveStep] = useState(() => {
      const activePKE = window.localStorage.getItem("activeStep");
      if (activePKE) {
        return JSON.parse(activePKE);
      } else {
        return "firstStep";
      }
    }
  )

  const [steps, setSteps] = useState([
    { key: 'firstStep', isActive: isActiveStep, label: 'Proceed to know your enverioment', isDone: activeStepPKE, component: firstComponent, btn:"Scan", testNavigation: "/Schedule-Scan-Assets", icon: iconScan,},
    { key: 'secondStep', isActive: isActiveStep, label: 'Classify your assets', isDone: activeStepCYA, component: secondComponent, btn:"Clasify", testNavigation: "/Inventory", icon: iconClasify, },
    { key: 'thirdStep', isActive: isActiveStep, label: 'Know your vulnerabilities', isDone: activeStepKYV, component: thirdComponent, btn:"Discover", testNavigation: "/Schedule-Scan-Vulnerability", icon:iconDiscover, },
    { key: 'finalStep', isActive: isActiveStep, label: 'Mitigrate your risks', isDone: activeStepMYR, component: finalComponent, btn:"Mitigate", testNavigation: "/DetailedScanReport", icon: iconMitigate, },
    { key: 'LearnMore', isActive: isActiveStep, label: 'Learn more and improve', isDone: activeStepLMI, component: learnMore, btn:"Learn", testNavigation: "/Scheduled-Scans", icon:iconLearn, },
  ]);
  const [activeStep, setActiveStep] = useState(steps[0]);
  const { displayNotification } = useNotification();

  React.useEffect(() => {
    displayNotification({
      title: "Important! Our aggregated risk score is calculated based on 3 types of risks.",
      message: "Don’t panic, yet! Our cybersecurity experts treat every system as vulnerable unless proven otherwise. At first login you will see a high aggregated risk score. It is calculated based on 3 types of risks: Operational, Legal & Compliance, Reputational. Code red is for 100-70% risk, yellow for 69-50% and green for 49-0%. Score will improve as you go through development of your cybersecurity program.",
      type: 'error',
      timeout: null
    });
  }, [displayNotification]);

  const handleNext = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key || steps[steps.length - 1].key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveStep(steps[index + 1]);
  }

  return (
    <>
      <HeaderComponent links={""} percent="100">Aggregated risk scores</HeaderComponent>
      <section className="notification">
        <Provider store={store}>
          <Notification />
        </Provider>
      </section>
      <section className="steps1">
        <Stack sx={{ width: '100%' }} spacing={4}>
          <Stepper alternativeLabel activeStep={4} connector={<QontoConnector />}>
            {stepsLabel.map((label, index) => {
              
              return (
                <Step key={label}>
                  <StepLabel className={`por-${(index == 0?0:index + 1) * 10}`}>{label}</StepLabel>
                </Step>
              )
            }
            )}
          </Stepper>
        </Stack>
      </section>
      <section className="container-information">
          <div className="resources">
            <div className="App">
              <div className="box">
                <div className="steps">
                  <ul className="nav">
                    {steps.map((step, i) => {
                      return <li key={i} className={`${isActiveStep === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>                      
                        <div className="bg">
                          <div className="bgContent">
                            <div className="ctext">
                              <span>{step.label} </span>
                              <Link to={step.testNavigation} style={{ textDecoration: 'none', color: 'white',  }}>
                                <Button
                                  onClick={handleNext}
                                  type={`${step.isDone ? 'danger' : 'dangerOutline'}`}
                                  size="medium"
                                  position={"left"}
                                  icons={step.icon}
                                >
                                  {step.btn}
                                </Button>
                              </Link>
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
      <section className="section-style-home">
        <Grid container spacing={1}>
          {cards.map((card, index) => (
            <>
              <Grid item xs={12} md={6} lg={4}>
                <Card
                  key={index}
                  imagen={card.img}
                />
              </Grid>
            </>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Home;
