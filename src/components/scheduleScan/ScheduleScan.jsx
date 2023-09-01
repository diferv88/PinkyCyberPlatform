/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/
import * as React from "react";
import HeaderComponent from "../header/header.component";
import Button from "../button/button.component";
import CheckBox from "../checkBox/CheckBox";
import checkIcon from "../../assets/Icons/Check-Icon.svg";
import clouseIcon from "../../assets/Icons/Clouse-Icon.svg";
import { useNotification } from "../routes/notification/useNotification";
import { Link } from "react-router-dom";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import Modal from "@mui/material/Modal";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import "./ScheduleScan.styles.scss";
import "./Onboarding.styles.scss";
import { 
  FormControl,
  FormLabel, 
  InputLabel, 
  MenuItem, 
  OutlinedInput, 
  Stack,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Select from "@mui/material/Select";
import Textarea from '@mui/joy/Textarea';
import IconCheck from "../../assets/Icons/IconCheck.svg"


const myModal = {
  position: 'absolute',
  fontFamily: "Sora",
  width: "784px",
  height: "602px",
  backgroundColor: 'white',
  borderRadius: "16px",
  border: '1px solid #E1E4E7',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)!important',
};

const titleModal = {
  position: "absolute",
  fontFamily: "Sora",
  top: "48px",
  left: "136px",
}; 

const paragraphModal ={
  fontFamily: "Sora",
  width: "528px",
  height: "48px",
  position: "absolute",
  top: "121px",
  left: "136px",
  fontWeight: "400",
  color: "#3E4852",
  fontZize: "16px",
};

const textAreaContainer = {
  position: "absolute",
  width:"512px !important",
  height:"140px",
  top: "301px",
  left:"136px",
}

const textAreaInformation = {
  width:"512px",
  height:"112px",
  borderRadius: "8px",
  border: "1px solid #A4AEB8",
}

const discardButton = {
  position:"absolute",
  top: "506px",
  left:"285px",
  borderRadius: "8px",
}
const confirmButton = {
  position:"absolute",
  top: "506px",
  left:"136px",
  borderRadius: "8px",
}


const ScheduleScan = ({
    title, 
    imagen,
    disclaimer, 
    condiocionalChecked1, 
    condiocionalChecked2, 
    onboarding, 
    onboardingContact,
    onboardingComplete
  }) => {

    
    const { displayNotification } = useNotification();
    const [optionChecked1, setOptionChecked1] = React.useState(false)
    const [optionChecked2, setOptionChecked2] = React.useState(false)
    const [optionChecked3, setOptionChecked3] = React.useState(false)
    const [selectedIssu, setSelectedIssu] = React.useState("Incomplete information")
    const [open, setOpen] = React.useState(false);

    
    React.useEffect(() => {
      displayNotification({
        message: "This notification displays when the app first renders!"
      });
    }, [displayNotification]);
    
    
    const checkedOptions1 = () => {
      setOptionChecked1(!optionChecked1);
    }
    const checkedOptions2 = () => {
      setOptionChecked2(!optionChecked2);
    }
    const checkedOptions3 = () => {
      setOptionChecked3(!optionChecked3);
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (e) => {
      setSelectedIssu(e.target.value)
    }

  const bodyModal = (
    <Box sx={myModal}>
    <h2 style={titleModal}>Report an issue</h2>
    <p style={paragraphModal}>Help us maintain your information up-to-date. If you spot any error or typo please let us know and we’ll fix it for you. </p>
    <br />
    <Select

      value={selectedIssu ?? " "}
      defaultValue={selectedIssu}
      onChange={e => handleChange(e)}
      label="Type of issue"
      autoWidth
      inputProps={{
        name: 'selectedIssue',            
      }}
      style={{backgroundColor: "rgba(240, 242, 243, 1)", fontWeight: 400, fontSize: "16px", fontFamily: "Sora", width: "512px", height: "56px", top:"193px", left:"136px"}}
    >
      <MenuItem value="Incomplete information">
        Incomplete information
      </MenuItem>
      <MenuItem value="Wrong information">
        Wrong information
      </MenuItem>
      <MenuItem value="Needs clarification">
        Needs clarification
      </MenuItem>
    </Select>
    <div style={textAreaContainer}>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <FormLabel>Provide more information</FormLabel>
        <Textarea 
          placeholder="Provide more information" 
          minRows={8}
          sx={textAreaInformation}
        />
      </FormControl>
    </div>
    <div>
    <>
      {/* <Link to={title === "Assets discovery / inventory" ? "/Assets-Discovery" : "/Vulnerability-Assessment"}> */}
        <Button 
          type={"succes"}
          size="medium"
          position={"left"}
          onClick={handleClose}
          style={confirmButton}
          icons={<img style={{marginRight:"5px"}} src={checkIcon} alt="check" />}
        >
          Submit
        </Button>
      {/* </Link> */}
      <Button 
        onClick={handleClose}
        type={"discard"}
        size="medium"
        position={"left"}
        style={discardButton}
        icons={<img style={{marginRight:"5px"}} src={clouseIcon} alt="clouse" />}
      >
        Discard
      </Button>
    </>
    </div>

  </Box>
  )

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    marginBottom: '50px',
    fontFamily: "'Sora', sans-serif",
    borderRadius: '5px',
  }));
  
  const AccordionSummary = styled((props) => (
      <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
      />
    ))(({ theme }) => ({
      backgroundColor: '#e1e5e8',
      flexDirection: 'row-reverse',
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
      },
      '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
      },
    }));
  
    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
      padding: theme.spacing(2),
      borderTop: '1px solid rgba(0, 0, 0, .125)',
      backgroundColor: '#eef1f4',
    }));
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange1 = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const DataListOnboardingContact = (
    <>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange1('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className='span-acordeon'>First site location</div>
          <div className='htitle'>Str. 31 August 24, Chișinău</div>
        </AccordionSummary>
        <AccordionDetails>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText 
              className="text-item1"
              primary="Physical site location" 
              secondary="Str. 31 August 24, Chișinău, Moldova, Republic of, MD-2001"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText
              className="text-item1"
              primary="Associated external IPs" 
              secondary="255.255.255.0;  255.255.255.1;  255.255.255.2"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText
            className="text-item1"
            primary="Website domain" 
            secondary="https://www.websitedomain.com"
            />
          </ListItemButton>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange1('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className='span-acordeon'>Second site location</div>
          <div className='htitle'>Bvd. Ștefan cel Mare 32, Chișinău</div>
        </AccordionSummary>
        <AccordionDetails>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText 
              className="text-item1"
              primary="Physical site location" 
              secondary="Bvd. Ștefan cel Mare 32, Chișinău, Republic of, MD-2001"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText
              className="text-item1"
              primary="Associated external IPs" 
              secondary="255.255.255.0;  255.255.255.1;  255.255.255.2"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText
            className="text-item1"
            primary="Website domain" 
            secondary="https://www.websitedomain.com"
            />
          </ListItemButton>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange1('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className='span-acordeon'>Third site location</div>
          <div className='htitle'>Bvd. Dacia 40, Chișinău</div>
        </AccordionSummary>
        <AccordionDetails>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText 
              className="text-item1"
              primary="Physical site location" 
              secondary="Bvd. Dacia 40, Chișinău, Republic of, MD-2001"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText
              className="text-item1"
              primary="Associated external IPs" 
              secondary="255.255.255.0;  255.255.255.1;  255.255.255.2"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemText
            className="text-item1"
            primary="Website domain" 
            secondary="https://www.websitedomain.com"
            />
          </ListItemButton>
        </AccordionDetails>
      </Accordion>
    </>
  )

  return (
    <>
      <HeaderComponent links={{"":"Pinky.ai", "./Schedule-Scan-Assets":"Scheduled Scans"}}>{onboarding || onboardingContact || onboardingComplete ? "Onboarding" : "Schedule Scan"}</HeaderComponent>
      <div className="FormContent">
      <section className={onboarding || onboardingContact || onboardingComplete ? "container-onboarding" : "container-schedule"}>

      {/* <Provider store={store}>
        <Notification />
      </Provider> */}
        
        <div>
          <div style={onboardingComplete ? {display: "flex", alignItems:"center", marginTop: "3rem", flexDirection:"column"} : {display: "flex", justifyContent:"center",}}>
            {onboardingComplete ? (
                <img src={IconCheck} style={{width:"40px"}} alt="IconCheck" />
            ) : ""}
            <h3 className="schedule-title">{onboarding ? "Review company details" : title}</h3>
          </div>
            {onboardingComplete ? (
              <div className="textOnboardingComplete">
                <p className="textTitle">
                  You’ve completed the onboarding process.
                </p>
                <p className="textBody">
                  Your account has been updated. You can always review and update your contact details on Manage My Account Page or by requesting assistance from our support team at <a style={{textDecoration: "revert", color: "#3892F3",}} href="#">security@mgrinder.com</a>
                </p>
                <Link to={"/"}>
                  <Button 
                    type={"succes"}
                    size="medium"
                    position={"left"}
                    icons={<img style={{marginRight:"5px"}} src={checkIcon} alt="check" />}
                  >
                    Continue to dashboard
                  </Button>
                </Link>
              </div>
            ) : (<>
            </>)}
            {onboarding ? (
              <>
                <h4 className="schedule-title">Company details</h4>
                <div className="containerTextField">
                  <TextField
                    disabled
                    // id="outlined-disabled"
                    className="divTextFieldPrimary"
                    style={{width: "auto",}}
                    label="Company name"
                    defaultValue="Pinky Cyber Security LTD"
                  />
                  <TextField 
                    disabled
                    className="divTextFieldSecundary"
                    style={{width: "auto",}}
                    // id="outlined-disabled"
                    label="Review company details"
                    defaultValue="1002003004005"
                    />
                </div>
                <div className="containerTextField">
                  <TextField
                    disabled
                    className="divTextFieldPrimary"
                    id="outlined-disabled"
                    label="Bussiness email"
                    defaultValue="hello@pinky.com"
                  />
                  <TextField
                    disabled
                    className="divTextFieldSecundary"
                    id="outlined-disabled"
                    label="Bussiness phone humber"
                    defaultValue="--"
                  />
                </div>

              </>
            ) : onboardingContact ? (
              <>
                <h4 className="schedule-title nobottonline" style={{marginBottom: "0px",}}>Company primary contact</h4>
                <FormLabel disabled component="legend" sx={{marginBottom: 2}}>Responsible for payment, legal and other questions</FormLabel>
                <div className="containerTextField">
                  <FormControl>
                    <InputLabel htmlFor="component-outlined">First name</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      disabled
                      value="John"
                      defaultValue="John"
                      label="First name"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="component-outlined">Middle name</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      disabled
                      startAdornment
                      value="--"
                      label="Middle name"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="component-outlined">Last name</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      disabled
                      defaultValue="Doe"
                      value="Doe"
                      label="Last name"
                    />
                  </FormControl>
                </div>
                <div className="containerTextField">
                  <FormControl>
                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput
                      className="divTextFieldPrimary"
                      id="component-outlined"
                      disabled
                      defaultValue="john.doe@pinky.com"
                      value="john.doe@pinky.com"
                      label="Email"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="component-outlined">Phone number</InputLabel>
                    <OutlinedInput
                      className="divTextFieldSecundary"
                      id="component-outlined"
                      disabled
                      defaultValue="+373 23 456 789"
                      value="+373 23 456 789"
                      label="Phone number"
                    />
                  </FormControl>
                </div>
                <h4 className="schedule-title nobottonline" style={{marginBottom: "0px",}}>Company secondary contact</h4>
                <FormLabel disabled component="legend" sx={{marginBottom: 2}}>Responsible for cybersecurity</FormLabel>
                <div className="containerTextField">
                  <FormControl>
                    <InputLabel htmlFor="component-outlined">First name</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      disabled
                      value="Margarethe"
                      defaultValue="Margarethe"
                      label="First name"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="component-outlined">Middle name</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      disabled
                      startAdornment
                      value="--"
                      label="Middle name"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="component-outlined">Last name</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      disabled
                      defaultValue="Holmes"
                      value="Holmes"
                      label="Last name"
                    />
                  </FormControl>
                </div>
                <div className="containerTextField">
                  <FormControl>
                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput
                      className="divTextFieldPrimary"
                      id="component-outlined"
                      disabled
                      defaultValue="margarethe.holmes@pinky.com"
                      value="margarethe.holmes@pinky.com"
                      label="Email"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="component-outlined">Phone number</InputLabel>
                    <OutlinedInput
                      className="divTextFieldSecundary"
                      id="component-outlined"
                      disabled
                      defaultValue="+373 23 456 789"
                      value="+373 23 456 789"
                      label="Phone number"
                    />
                  </FormControl>
                </div>
                <h4 className="schedule-title">Name and locations of company sites</h4>
                <div>
                  {DataListOnboardingContact}
                </div>

              </>
            ) : onboardingComplete ? (<></>) : (
              <div style={{marginTop: "3rem", marginBottom:"3rem"}}>
                <h4 className="schedule-title">Schedule scan</h4>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker','DatePicker','DatePicker','TimePicker']}>
                    <Stack direction="row">
                      <DemoItem label="Year">
                        <DatePicker label="" views={['year']}/>
                      </DemoItem>
                      <DemoItem label="Month">
                        <DatePicker label="" views={['month']} />
                      </DemoItem>
                      <DemoItem label="Day">
                        <DatePicker  label="" views={['day']} />
                      </DemoItem>
                      <DemoItem label="Time">
                        <TimePicker label="" />
                      </DemoItem>
                    </Stack>
                  </DemoContainer>
                </LocalizationProvider>
                </div>
            )}
            {/* </div> */}
          {onboarding ? (
            <>
              <h4 className="schedule-title">Company address</h4>
              <div className="containerTextFieldCampanyA">
                <TextField
                  disabled
                  className="divTextFieldPrimaryCampanyA"
                  id="outlined-disabled"
                  label="Country"
                  defaultValue="Moldova, Republic of"
                />
                <TextField 
                  disabled
                  className="divTextFieldSecundaryCampanyA"
                  id="outlined-disabled"
                  label="Region"
                  defaultValue="Mun. Chișinău"
                />
              </div>
              <div className="containerTextFieldCampanyA">
                <TextField
                  disabled
                  className="divTextFieldPrimaryCampanyA"
                  id="outlined-disabled"
                  label="City"
                  defaultValue="Chișinău"
                />
                <TextField
                  disabled
                  className="divTextFieldSecundaryCampanyA"
                  id="outlined-disabled"
                  label="Postal code "
                  defaultValue="MD-0001"
                />
              </div>
              <div className="containerTextFieldCampanyA">
                <TextField
                  disabled
                  className="divTextFieldPrimaryCampanyA"
                  id="outlined-disabled"
                  label="Address line #1"
                  defaultValue="Bvd. Stefan cel Mare și Sfânt"
                />
                <TextField
                  disabled
                  className="divTextFieldSecundaryCampanyA"
                  id="outlined-disabled"
                  label="Address line #2"
                  defaultValue="--"
                />
              </div>
              <div style={{marginTop: "3rem", marginBottom:"3rem"}}>       
                <h4 className="schedule-title">Billing address</h4>
                <br />
                <CheckBox label="Billing address is the same as company address." onChange={checkedOptions3} checked={optionChecked3}/>
              </div>
            </>
          ) : (
            <>
              <div style={disclaimer ? {marginTop: "3rem", marginBottom:"3rem", paddingRight:"1rem"}: {display:"none"}}>
                <h4 className="schedule-title">Disclaimer</h4>
                {/* <p style={{fontWeight:"400", textAlign: "justify"}}>Please accept permission request to map the network and make sure all your devices are working and are connected to the network. It will take up 24h to complete the scan. Meanwhile, please read more on <Link1 >Assets Inventory</Link1>. Thank you for patience!</p> */}
                <p style={{fontWeight:"400", textAlign: "justify"}}>{disclaimer}</p>
              </div>
            </>
          )}
          {onboardingComplete ? (<></>) : (
            <>
            <div style={{marginTop: "3rem", marginBottom:"3rem"}}>       
              <h4 className="schedule-title">Consent</h4>
              <br />
              <CheckBox label={onboarding ?
                "I have read and agreed that all data entered, including my personal data will be processed and stored on Pinky CyberSafe® Platform in conformity with the GDPR Policy." 
                : 
                onboardingContact ?
                "I confirm that all data is correct, up to date and that I have legal authority to share it with Pinky CyberSafe® Platform."
                :
                condiocionalChecked1} onChange={checkedOptions1} checked={optionChecked1}/>
              {onboardingContact ? "" : (
                <CheckBox label={ onboarding ? 
                "I have read and agreed to Pinky CyberSafe® Platform End User License Agreement (EULA)."
                :
                condiocionalChecked2} onChange={checkedOptions2} checked={optionChecked2}/>
              )}
            </div>
            <div style={{display: "flex", alignItems:"center", marginTop: "3rem", marginBottom: "2rem", gap: "1rem"}}>
              <div className="button-grup-OnboardingContact">
                <Link to={title === "Assets discovery / inventory" ? "/Assets-Discovery" : title === "Vulnerability assessment" ? "/Vulnerability-Assessment" : onboarding ? "/onboarding-contact" : title === "Review contact and site location details" ? "/onboarding-complete" : "/"}>
                  <Button 
                    type={(onboarding ? optionChecked1 && optionChecked2 && optionChecked3 : onboardingContact ? optionChecked1  : optionChecked1 && optionChecked2) ? "succes" : "sucessOutline"}
                    size="medium"
                    position={"left"}
                    disabled={(onboarding ? optionChecked1 && optionChecked2 && optionChecked3 : onboardingContact ? optionChecked1  : optionChecked1 && optionChecked2) ? false : true}
                    icons={<img style={{marginRight:"5px"}} src={checkIcon} alt="check" />}
                  >
                    {onboarding || onboardingContact ? "Confirm and continue" : "Schedule and continue"}
                  </Button>
                </Link>
                {onboardingContact ? (<>    
                  <a className="link-previus-modal" href="/Onboarding">Previous step</a>
                </>) : (<></>)}
            </div>
              <Link to={""}>
                {onboarding || onboardingContact ? (
                  <>
                    <a className="link-previus-modal" onClick={handleOpen} href="">Report an issue</a>
                    <Modal  open={open} onClose={handleClose}>
                      {bodyModal}
                    </Modal>              
                  </>
                ) : (
                  <>
                    <Button 
                      // onClick={routeChange(step.testNavigation)}
                      type={"discard"}
                      size="medium"
                      position={"left"}
                      icons={<img style={{marginRight:"5px"}} src={clouseIcon} alt="clouse" />}
                    >
                      Discard
                    </Button>
                  </>
                )}
              </Link>
            </div>
            </>
          )}

        </div>
      </section>
      <section className="ImgContent">
        {imagen}
      </section>
      </div>
    </>
  );
};

export default ScheduleScan;
