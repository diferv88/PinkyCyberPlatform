import React, { useState } from 'react';
import './Modal.styles.scss'
import FormGroup from '../routes/partnerAccount/formGroup/FormGroup';
import FormRow from '../routes/partnerAccount/formRow/FormRow';
import { Link , useNavigate} from "react-router-dom";
import PasswordRequirements from '../passwordRequirements/PasswordRequirements';
import { InformationBox } from '../informationBox/InformationBox';

const Modal = ({ title }) => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([
    {
      email: 'oaortizt@pinkys.com',
      password: 'memento1',
    },
  ]);

  const [formState, setFormState] = useState({
    title: title,
    emailLabel: 'Email address',
    emailPlaceholder: 'email@yourcompany.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '*********',
    type: 'text',
    buttonText: 'Sing in',
    buttonLink: '/',
    showForgotPasswordLink: true,
    showRequirements: false,
    showInformationBox: false,
    emailValue: '',
    passwordValue: '',
  });

  const handleForgotPasswordClick = () => {
    setFormState({
      ...formState,
      title: 'Change your password',
      emailLabel: 'New password',
      emailPlaceholder: '*********',
      passwordLabel: 'Retype new password',
      passwordPlaceholder: '*********',
      type: 'password',
      buttonText: 'Update password',
      buttonLink: '/login',
      showForgotPasswordLink: false,
      showRequirements: true,
      showInformationBox: false,
      emailValue: '',
      passwordValue: '',

    });
  }

  const handleResetClick = () => {
   
    setFormState({
      ...formState,
      title: title,
      emailLabel: 'Email address',
      emailPlaceholder: 'email@yourcompany.com',
      passwordLabel: 'Password',
      passwordPlaceholder: '*********',
      type: 'text',
      buttonText: 'Sing in',
      buttonLink: '/',
      showForgotPasswordLink: true,
      showRequirements: false,
      showInformationBox: true,
      emailValue: '',
      passwordValue: '',
      InformationBoxValue: 'Your account is ready to be used, please login with your updated password',
      informationColour: 'green',
    });
    event.preventDefault();
    formState.InformationBoxValue
 
  }

  const handleButtonClick = (buttonLink) => {
    event.preventDefault();
    if (buttonLink === '/') {
      const account = accounts.find(account => account.email === formState.emailValue && account.password === formState.passwordValue);
      if (account) {
        navigate(buttonLink);
      } else {
        
        setFormState({
            ...formState,
            showInformationBox: true,
            InformationBoxValue: 'Entered email address or password is incorrect. Please try again',
            informationColour: 'red',
            
        });
        console.log(formState.InformationBoxValue);
      }
    } else {
      handleResetClick();
    }
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h3>{formState.title}</h3>
          {formState.showInformationBox && (
            <InformationBox value={formState.InformationBoxValue} colour={formState.informationColour}/>
          )}
          <form>
          <FormRow>
            <FormGroup
                label={formState.emailLabel}
                placeholder={formState.emailPlaceholder}
                type={formState.type}
                value={formState.emailValue}
                onChange={(event) => setFormState({ ...formState, emailValue: event.target.value })}
            />
            </FormRow>
            <FormRow>
            <FormGroup
                label={formState.passwordLabel}
                placeholder={formState.passwordPlaceholder}
                type='password'
                value={formState.passwordValue}
                onChange={(event) => setFormState({ ...formState, passwordValue: event.target.value })}
            />
            </FormRow>
            <hr />
            {formState.showRequirements && (
              <PasswordRequirements />
            )}
            <div className='links'>
              <button className='sing-in' onClick={() => handleButtonClick(formState.buttonLink)}>{formState.buttonText}</button><br />
              {formState.showForgotPasswordLink && (
                <Link onClick={handleForgotPasswordClick}>Forgot your password?</Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Modal;