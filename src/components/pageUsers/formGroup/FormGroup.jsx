import "./../userRoll.styles.scss";
import ShowPasswordIcon from '../../../assets/images/showPasswordIcon.svg'
import { useState } from 'react';
const FormGroup = ({ label, placeholder, width, type, value, onChange, login, inputClassName  }) => {
  const [inputType, setInputType] = useState(type);

  const handleButtonClick = (event) => {
    event.preventDefault();
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className={`form-group ${width}-width ${login}`}>
      <label>{label}:</label>
      {type === 'password' ? (
        <div className="input-password">
          <input type={inputType} placeholder={placeholder} value={value} onChange={onChange}  className={`${inputClassName}`}/>
          <button className="eye-button" onClick={handleButtonClick}>
            <img src={ShowPasswordIcon} alt="Eye icon" />
          </button>
        </div>
      ) : (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`${inputClassName}`} />
      )}
    </div>
  );
};

export default FormGroup;