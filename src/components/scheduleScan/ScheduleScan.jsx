/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
// import { Provider } from "react-redux";
import HeaderComponent from "../header/header.component";
import Button from "../button/button.component";
import CheckBox from "../checkBox/CheckBox";
import tickCircle from "../../assets/images/tickCircle.svg";
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
import "./ScheduleScan.styles.scss";
import { MenuItem, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
// import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import Select from "@mui/material/Select";

// const useStyles = makeStyles((theme)=> ({
//   modal:
//     {
//       position: 'absolute',
//       width: 400,
//       backgroundColor: 'white',
//       border: '1px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2,4,3),
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%,50%)',
//     }
    
// }))



const ScheduleScan = ({titlePage,title, disclaimer, condiocionalChecked1, condiocionalChecked2, onboarding}) => {
  // const styles= useStyles();



  const bodyModal = (
    <div style={{
      position: 'absolute',
      width: 400,
      backgroundColor: 'white',
      border: '1px solid #000',
      // boxShadow: theme.shadows[5],
      // padding: theme.spacing(2,4,3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,50%)',
    }}>
      <h2>Report an issue</h2>
      <p >Help us maintain your information up-to-date. If you spot any error or typo please let us know and we’ll fix it for you. </p>
      <br />
      <Select
        value="Test"
        // onChange={handleChangeRL}
        autoWidth
        style={{backgroundColor: "rgba(240, 242, 243, 1)", fontWeight: 700, fontSize: "14px", fontFamily: "Sora"}}
      >
        <MenuItem value="Incomplete information">
          Incomplete information
        </MenuItem>
        <MenuItem value="Incomplete information">
          Wrong information
        </MenuItem>
        <MenuItem value="Incomplete information">
        Needs clarification
        </MenuItem>
      </Select>
    </div>
  )

  const { displayNotification } = useNotification();

  React.useEffect(() => {
    displayNotification({
      message: "This notification displays when the app first renders!"
    });
  }, [displayNotification]);

  const [optionChecked1, setOptionChecked1] = React.useState(false)
  const [optionChecked2, setOptionChecked2] = React.useState(false)
  const [optionChecked3, setOptionChecked3] = React.useState(false)

  const checkedOptions1 = () => {
  setOptionChecked1(!optionChecked1);
  }
  const checkedOptions2 = () => {
    setOptionChecked2(!optionChecked2);
  }
  const checkedOptions3 = () => {
    setOptionChecked3(!optionChecked3);
  }

  const [open, setOpen] = React.useState(false);

  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
    {console.log(optionChecked1)}
      <HeaderComponent links={""}>{onboarding ? "Onboarding" : "Schedule Scan"}</HeaderComponent>

      <section className={onboarding ? "container-onboarding" : "container-schedule"}>

      {/* <Provider store={store}>
        <Notification />
      </Provider> */}
        
        <div>
          <div style={{display: "flex", justifyContent:"center"}}>
            <p>{onboarding ? "Review company details" : title}</p>
          </div>
            {onboarding ? (
              <>
                <p>Company details</p>
                  <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={6} md={6}>
                        <TextField
                          onClick={handleOpen}
                          // id="outlined-disabled"
                          label="Company name"
                          defaultValue="Pinky Cyber Security LTD"
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6}>
                          <TextField 
                            disabled
                            // id="outlined-disabled"
                            label="Review company details"
                            defaultValue="1002003004005"
                          />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6}>
                        <TextField
                        disabled
                        id="outlined-disabled"
                        label="Bussiness email"
                        defaultValue="hello@pinky.com"
                      />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6}>
                        <TextField
                          disabled
                          id="outlined-disabled"
                          label="Bussiness phone humber"
                          defaultValue="--"
                        />
                      </Grid>
                    </Grid>
                  </Box>
              </>
            ) : (
              <div style={{marginTop: "3rem", marginBottom:"3rem"}}>
                <p>Schedule scan</p>
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
              <p>Company address</p>
              <Box
                  // style={{display: "flex", justifyContent:"space-between"}}
                  component="form"
                  sx={{
                    flexGrow: 1,
                  }}
                  noValidate
                  autoComplete="off"
                >
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={6}>
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="Country"
                      defaultValue="Moldova, Republic of"
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <TextField 
                      disabled
                      id="outlined-disabled"
                      label="Region"
                      defaultValue="Mun. Chișinău"
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="City"
                      defaultValue="Chișinău"
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="Postal code "
                      defaultValue="MD-0001"
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="Address line #1"
                      defaultValue="Bvd. Stefan cel Mare și Sfânt"
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="Address line #2"
                      defaultValue="--"
                    />
                  </Grid>
                </Grid>
              </ Box>
              <br />
              <div style={{marginTop: "3rem", marginBottom:"3rem"}}>       
                <p>Consent</p>
                <br />
                <CheckBox label="Billing address is the same as company address." onChange={checkedOptions3} checked={optionChecked3}/>
              </div>
            </>
          ) : (
            <>
              <div style={{marginTop: "3rem", marginBottom:"3rem", paddingRight:"1rem"}}>
                <p>Disclaimer</p>
                {/* <p style={{fontWeight:"400", textAlign: "justify"}}>Please accept permission request to map the network and make sure all your devices are working and are connected to the network. It will take up 24h to complete the scan. Meanwhile, please read more on <Link1 >Assets Inventory</Link1>. Thank you for patience!</p> */}
                <p style={{fontWeight:"400", textAlign: "justify"}}>{disclaimer}</p>
              </div>
            </>
          )}
          <div style={{marginTop: "3rem", marginBottom:"3rem"}}>       
            <p>Consent</p>
            <br />
            <CheckBox label={onboarding ?
               "I have read and agreed that all data entered, including my personal data will be processed and stored on Pinky CyberSafe® Platform in conformity with the GDPR Policy." 
               : 
               condiocionalChecked1} onChange={checkedOptions1} checked={optionChecked1}/>
            <CheckBox label={ onboarding ? 
            "I have read and agreed to Pinky CyberSafe® Platform End User License Agreement (EULA)."
            :
            condiocionalChecked2} onChange={checkedOptions2} checked={optionChecked2}/>
          </div>
          <div style={{display: "flex", justifyContent: "space-around", marginTop: "3rem"}}>
            <Link to={title === "Assets discovery / inventory" ? "/Assets-Discovery" : "/Vulnerability-Assessment"}>
              <Button 
                type={(onboarding ? optionChecked1 && optionChecked2 && optionChecked3  : optionChecked1 && optionChecked2) ? "succes" : "sucessOutline"}
                size="medium"
                position={"left"}
                icons={<img style={{marginRight:"5px"}} src={checkIcon} alt="check" />}
              >
                {onboarding ? "Confirm and continue" : "Schedule and continue"}
              </Button>
            </Link>
            <Link to={""}>
              {onboarding ? (
                <>
                <Button 
                  onClick={handleOpen}
                  type={"discard"}
                  size="medium"
                  position={"left"}
                  icons={<img style={{marginRight:"5px"}} src={clouseIcon} alt="clouse" />}
                >
                  Report an issue
                </Button>
                <Modal open={open} onClose={handleClose}>
                <div className="modal">
                  <h2 id="simple-modal-titile">Text in a modal </h2>
                  <p id="simple-modal-description">test of a modal </p>
                </div>
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

        </div>
      </section>
    </>
  );
};

export default ScheduleScan;

