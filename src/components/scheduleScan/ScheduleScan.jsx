/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
// import { Provider } from "react-redux";
import HeaderComponent from "../header/header.component";
import Button from "../button/button.component";
import CheckBox from "../checkBox/CheckBox";
import tickCircle from "../../assets/images/tickCircle.svg";
import { useNotification } from "../routes/notification/useNotification";
import { Link } from "react-router-dom";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import Link1 from '@mui/material/Link';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import "./ScheduleScan.styles.scss";
import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const ScheduleScan = ({title, disclaimer, condiocionalChecked1, condiocionalChecked2}) => {


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

      {/* <Provider store={store}>
        <Notification />
      </Provider> */}
        
        <div>
          <div style={{display: "flex", justifyContent:"center", marginTop: "3rem"}}>
            <p>{title}</p>
          </div>
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
            {/* </div> */}
          </div>
          <div style={{marginTop: "3rem", marginBottom:"3rem", paddingRight:"1rem"}}>
            <p>Disclaimer</p>
            {/* <p style={{fontWeight:"400", textAlign: "justify"}}>Please accept permission request to map the network and make sure all your devices are working and are connected to the network. It will take up 24h to complete the scan. Meanwhile, please read more on <Link1 >Assets Inventory</Link1>. Thank you for patience!</p> */}
            <p style={{fontWeight:"400", textAlign: "justify"}}>{disclaimer}</p>
          </div>
          <div style={{marginTop: "3rem", marginBottom:"3rem"}}>
            
            <p>Consent</p>
            <br />
            <CheckBox label={condiocionalChecked1} onChange={checkedOptions1} checked={optionChecked1}/>
            <CheckBox label={condiocionalChecked2} onChange={checkedOptions2} checked={optionChecked2}/>
          </div>
          <div style={{display: "flex", justifyContent: "space-around", marginTop: "3rem"}}>
            <Link to={title === "Assets discovery / inventory" ? "/Assets-Discovery" : "/Vulnerability-Assessment"}>
              <Button 
                type={(optionChecked1 && optionChecked2) ? "succes" : "sucessOutline"}
                size="medium"
                position={"left"}
                icons={<img src={tickCircle} alt="calendar" />}
              >
                Schedule and continue
              </Button>
            </Link>
            <Link to={"/"}>
              <Button 
                // onClick={routeChange(step.testNavigation)}
                type={"discard"}
                size="medium"
                position={"left"}
                icons={<img src={tickCircle} alt="calendar" />}
              >
                Discard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleScan;

