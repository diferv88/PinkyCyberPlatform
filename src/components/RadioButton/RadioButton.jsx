/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Radio, FormControlLabel, Typography, Paper } from '@mui/material';

const RadioButton = ({ title, subtitle, active, id }) => {
    const [isActive, setIsActive] = useState(false);
    const [isActiveId, setIsActiveID] = useState(null);



    const handleButtonClick = (e, id) => {
      setIsActive(!isActive);
      setIsActiveID(id)
    };
  
    return (
      <div>
      <Paper
        elevation={isActive ? 3 : 0}
        style={{
          padding: '16px',
          marginTop: '1em',
          width: '33em',
          border: `1px solid ${isActiveId == "1" ? '#3892F3' : '#E1E4E7'}`,
          transition: 'border-color 0.3s, box-shadow 0.3s',
          cursor:'pointer'
        }}
        onClick={e => handleButtonClick(e, "1")} 
      >
        <FormControlLabel
          id="1"
          value="radio"
          disabled={isActiveId == "2" ? true : false}
          control={<Radio checked={isActiveId == "2" ? false : isActive}/>}
          label={
            <div>
              <Typography style={{fontFamily:"Sora", fontWeight: 400, fontSize:"16px", color:"#3E4852"}} variant="p">{title}</Typography>
              <Typography style={{fontFamily:"Sora", fontWeight: 700, fontSize:"16px", color:"#3E4852"}} variant="subtitle1">{subtitle}</Typography>
            </div>
          }
        />
      </Paper>
      <Paper
        elevation={isActive ? 3 : 0}
        style={{
          padding: '16px',
          marginTop: '1em',
          width: '33em',
          border: `1px solid ${isActiveId == "2" ? '#3892F3' : '#E1E4E7'}`,
          transition: 'border-color 0.3s, box-shadow 0.3s',
          cursor:'pointer'
        }}
        onClick={e => handleButtonClick(e, "2")} 
      >
        <FormControlLabel
          id="2"
          value="radio"
          disabled={isActiveId == "1" ? true : false}
          control={<Radio checked={isActiveId == "1" ? false : isActive}/>}
          label={
            <div>
              <Typography style={{fontFamily:"Sora", fontWeight: 400, fontSize:"16px", color:"#3E4852"}} variant="p">Send password via Email</Typography>
              <Typography style={{fontFamily:"Sora", fontWeight: 700, fontSize:"16px", color:"#3E4852"}} variant="subtitle1">john.doe@pinky.com</Typography>
            </div>
          }
        />
      </Paper>
      </div>
    );
  };

export default RadioButton;





