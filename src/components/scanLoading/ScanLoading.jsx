/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import HeaderComponent from "../header/header.component";
import scanFinal from "../../assets/images/ScanLoadingFinal.svg";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./ScanLoading.styles.scss";
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


const ScanLoading = ({title, titleScan, bodyText, styleText,redirectNavigate}) => {
  const [progress, setProgress] = React.useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  if (progress >= 100) {
    return <Navigate to={redirectNavigate} />
  }

  return (
    <>
      <HeaderComponent links={""}>{title}</HeaderComponent>
      <section className="container-information-assets">
        <div id="imageRotate">
          <img src={scanFinal} alt=""  />
          {/* <img src={scanFinal} alt="" className="imgr" id="imgr2" /> */}
        </div>
        {/* <Provider store={store}>
          <Notification />
        </Provider> */}
        <div style={{textAlign: "center"}} className="container-general-overview">
          <div style={{display:"inline-block"}}>
            <p><h2>{titleScan}</h2></p>
            <CircularProgressWithLabel value={progress} />
            <div style={{borderColor: "black solid", borderRadius: "16px", width:"360px", height:`${styleText == 1 ? "80px" : "128px"}`, textAlign:"center", display:"flex", alignItems:"center",position:"relative", zIndex:10}} className="box-text-help">
              <p style={{fontWeight: 400, fontSize: "16px",}}>{bodyText}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ScanLoading;
