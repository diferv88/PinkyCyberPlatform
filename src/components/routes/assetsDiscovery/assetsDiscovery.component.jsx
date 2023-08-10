/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import HeaderComponent from "../../header/header.component";
import scanFinal from "../../../assets/images/ScanLoadingFinal.svg";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./assetsDiscovery.styles.scss";
import { Navigate } from "react-router-dom/dist";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', backgroundColor: "#fff", borderRadius:"100px"}}>
      <CircularProgress variant="determinate" {...props} 
        size={100}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography style={{fontWeight: 700}} variant="body1" component="div" color="text.secondary"
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}


const DashBoard = () => {
  const [progress, setProgress] = React.useState(5);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 5));
    }, 900);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  if (progress >= 100) {
    return <Navigate to="/Email-Scan" />
  }

  return (
    <>
      <HeaderComponent links={""}>Assets discovery / inventory</HeaderComponent>
      <section style={{backgroundImage: `url(${scanFinal})`}} className="container-information-assets">
        {/* <Provider store={store}>
          <Notification />
        </Provider> */}
        <div style={{textAlign: "center"}} className="container-general-overview">
          <div style={{display:"inline-block"}}>
            <p><h2>Scanning...</h2></p>
            <CircularProgressWithLabel value={progress} />
            <div style={{borderColor: "black solid", borderRadius: "16px", width:"360px", height:"128px", textAlign:"justify"}}>
              <p style={{fontWeight: 400, fontSize: "16px",}}>We are now scanning all connected devices to help you map your network, please make sure all your devices are online and connected.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default DashBoard;
