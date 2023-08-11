/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './CheckBox.styles.scss';
import Checkbox from '@mui/material/Checkbox';

const CheckboxM = ({ label, secondLable, checked, onChange }) => {
  return (
    <div className={`checkbox-container ${checked}`} style={checked ? {backgroundColor:'#EBF4FE', display:"flex", alignItems:"center" } : {backgroundColor:"#F0F2F3", display:"flex", alignItems:"center"}}>
        <label >
        <p className='checkbox-placeholder-info'>{label}</p>
        <p className='checkbox-placeholder-data'>{secondLable}</p>
        <input type="checkbox" checked={checked} onChange={onChange} />
        </label>
    </div>
  );
};

export default CheckboxM
