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
          <svg className="img3" viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M184.356 812.313C73.8884 715.994 -20.451 589.409 3.85191 487.125C27.9339 384.62 170.879 306.637 281.347 215.619C391.815 124.823 469.805 20.9923 565.912 2.87716C662.019 -15.0171 776.021 52.8042 853.128 143.822C930.014 234.839 970.003 348.831 957.851 450.895C945.921 552.958 882.07 643.091 805.185 739.411C728.299 835.951 638.158 938.677 529.899 957.013C421.42 975.128 294.824 908.853 184.356 812.313Z" fill="url(#paint0_linear_2150_33268)"/>
            <defs>
            <linearGradient id="paint0_linear_2150_33268" x1="480" y1="960" x2="480" y2="-4.19629e-05" gradientUnits="userSpaceOnUse">
            <stop stop-color="#3892F3" stop-opacity="0.2"/>
            <stop offset="1" stop-color="#3892F3" stop-opacity="0.4"/>
            </linearGradient>
            </defs>
          </svg> 
          <svg className="img2" viewBox="0 0 770 880" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M110.561 745.185C22.586 648.057 -21.5918 514.021 10.399 412.62C42.5803 311.024 151.121 242.452 238.905 165.139C326.88 87.6307 394.099 1.57559 463.031 0.0215796C531.964 -1.53243 602.42 81.2203 661.831 158.728C721.053 236.042 769.42 307.916 769.991 380.568C770.753 453.025 723.909 526.259 664.497 623.387C605.086 720.514 533.297 841.535 431.612 872.033C329.926 902.531 198.536 842.312 110.561 745.185Z" fill="url(#paint0_linear_2150_33269)"/>
            <defs>
              <linearGradient id="paint0_linear_2150_33269" x1="385" y1="880" x2="385" y2="-3.36578e-05" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3892F3" stop-opacity="0.4"/>
                <stop offset="1" stop-color="#3892F3" stop-opacity="0.2"/>
              </linearGradient>
            </defs>
          </svg>
          <img className="img1" src={scanFinal} alt=""  />
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
