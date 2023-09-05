/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Radio, FormControlLabel, Typography, Paper } from '@mui/material';

const RadioButton = ({ title, subtitle }) => {
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
      setIsActive(!isActive);
    };
  
    return (
      <Paper
        elevation={isActive ? 3 : 0}
        style={{
          padding: '16px',
          marginTop: '1em',
          width: '33em',
          border: `1px solid ${isActive ? '#3892F3' : '#E1E4E7'}`,
          transition: 'border-color 0.3s, box-shadow 0.3s',
          cursor:'pointer'
        }}
        onClick={handleButtonClick} 
      >
        <FormControlLabel
          value="radio"
          control={<Radio checked={isActive}/>}
          label={
            <div>
              <Typography style={{fontFamily:"Sora", fontWeight: 400, fontSize:"16px", color:"#3E4852"}} variant="p">{title}</Typography>
              <Typography style={{fontFamily:"Sora", fontWeight: 700, fontSize:"16px", color:"#3E4852"}} variant="subtitle1">{subtitle}</Typography>
            </div>
          }
        />
      </Paper>
    );
  };

export default RadioButton;





