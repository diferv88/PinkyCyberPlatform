import React, { useState, useEffect } from 'react';
import CheckVector from '../../assets/images/checkVector.svg'
import './PasswordRequirementes.styles.scss'
const PasswordRequirements = ({ password }) => {
  const [hasEightCharacters, setHasEightCharacters] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasNumberOrSpecialCharacter, setHasNumberOrSpecialCharacter] = useState(false);

  useEffect(() => {
    setHasEightCharacters(password.length >= 8);
    setHasLowerCase(/[a-z]/.test(password));
    setHasUpperCase(/[A-Z]/.test(password));
    setHasNumberOrSpecialCharacter(/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password));
  }, [password]);

  return (
    <>
      <label className="label-password-requirements">New password must contain: </label>
      <ul>
        <li className={`password-list ${!hasEightCharacters ? 'invalid' : ''}`}>
          <img src={CheckVector} className='checkVector'/> At least 8 characters
        </li>
        <li className={`password-list ${!hasLowerCase ? 'invalid' : ''}`}>
          <img src={CheckVector} className='checkVector'/> At least 1 lowercase character
        </li>
        <li className={`password-list ${!hasUpperCase ? 'invalid' : ''}`}>
          <img src={CheckVector} className='checkVector'/> At least 1 uppercase character
        </li>
        <li className={`password-list ${!hasNumberOrSpecialCharacter ? 'invalid' : ''}`}>
          <img src={CheckVector} className='checkVector'/> At least 1 number or special character
        </li>
      </ul>
    </>
  );
};

export default PasswordRequirements;