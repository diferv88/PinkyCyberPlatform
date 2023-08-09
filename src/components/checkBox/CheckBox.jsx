/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './CheckBox.styles.scss';

const Checkbox = ({ label, secondLable, checked, onChange }) => {
  return (
    <div className={`checkbox-container ${checked}`}>
        <label >
        <p className='checkbox-placeholder-info'>{label}</p>
        <p className='checkbox-placeholder-data'>{secondLable}</p>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
        </label>
    </div>
  );
};

export default Checkbox
