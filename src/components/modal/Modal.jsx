/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Modal.styles.scss'
import FormGroup from '../routes/partnerAccount/formGroup/FormGroup';
import FormRow from '../routes/partnerAccount/formRow/FormRow';
import { Link , useNavigate} from "react-router-dom";
import PasswordRequirements from '../passwordRequirements/PasswordRequirements';
import { InformationBox } from '../informationBox/InformationBox';
import UpdatePasswordButton from '../../assets/images/updatePasswordButton.svg';
import SingInButtonLogo from '../../assets/images/singInButtonLogo.svg';
import ContinueRecoveryPassword from '../../assets/images/continueRecoveryPassword.svg';
import Checkbox from '../checkBox/CheckBox';
import VerificationCode from '../VerificationCode/VerificationCode';
const Modal = ({ title , buttonText, secondInputLabel, secondInputTipe, secondInpuPlaceholder, linkToFlow}) => {

  // Hooks to logic trough flows in login
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([
    {
      email: 'oaortizt@pinkys.com',
      password: 'Memento1',
      verificationCode: '123456',
    },
  ]);  
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);
  const [doPasswordsMatchText, setDoPasswordsMatchText] = useState(true);
  const [attemptsLeft, setAttemptsLeft] = useState(2);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(false)
  const [formState, setFormState] = useState({
    title: title,
    emailLabel: 'Email address',
    emailPlaceholder: 'email@yourcompany.com',
    passwordLabel: secondInputLabel,
    passwordPlaceholder: secondInpuPlaceholder,
    type: 'text',
    secondInputType: secondInputTipe,
    buttonText: buttonText,
    buttonLink: '/',
    showForgotPasswordLink: true,
    showRequirements: false,
    showInformationBox: false,
    emailValue: '',
    passwordValue: '',
    verificationCodeValue: '',
    linkToFlow: linkToFlow,
    recoveryMethod: '',
    flow: '1',
  });

  const handleForgotPasswordClick = () => {

      setDoPasswordsMatch(true);
      setDoPasswordsMatchText(true);
      setAttemptsLeft(2);
    
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
        secondInputType: 'password',
        flow: '1',
        verificationCodeValue: '',
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
  }

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const hasEightCharacters = password.length >= 8;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumberOrSpecialCharacter = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
      password
    );
    setFormState({ ...formState, passwordValue: password });
    setDoPasswordsMatch(true);
    setIsPasswordValid(
      hasEightCharacters && hasLowerCase && hasUpperCase && hasNumberOrSpecialCharacter
    );
  };
  
  const handleButtonClick = (buttonLink) => {
    event.preventDefault();
  
    if (formState.buttonText === 'Continue') {
      if (checked || checked2) {
        setFormState({
          ...formState,
          recoveryMethod: checked ? 'SMS' : checked2 ? 'Email' : '',
          flow: '2',
          buttonText: 'Verify',
          emailValue: '',
          passwordValue: '',
        });
        setChecked(false);
        setChecked2(false);
      } else {
        handleContinueClick();
      }
    } else if ( formState.buttonText === 'Update password' && formState.passwordValue !== formState.emailValue){
      handleUpdatePasswordClick();
    } else {
      handleValidPassword(buttonLink);
    }
  };
  
  const handleContinueClick = () => {
    setFormState({
      ...formState,
      title: 'Help us verify it`s you',
      emailValue: '',
      passwordValue: '',
    });
  };
  
  const handleUpdatePasswordClick = () => {
    setDoPasswordsMatch(false);
    setDoPasswordsMatchText(false);
  };
  
  const handleValidPassword = (buttonLink) => {
    setDoPasswordsMatch(true);
    setDoPasswordsMatchText(true);
  
    const account2 = accounts.find(
      (account2) => account2.verificationCode === formState.verificationCodeValue
    );
    if (account2) {
      setIsPasswordValid(!isPasswordValid);
      handleForgotPasswordClick();
      setChecked(false);
      setChecked2(false);
      return;
    }
  
    if (buttonLink === '/') {
      const account = accounts.find(
        (account) =>
          account.email === formState.emailValue &&
          (account.password === formState.passwordValue ||
            account.verificationCode === formState.passwordValue)
      );
  
      if (account) {
        navigate(buttonLink);
      } else {
        handleInvalidAccount();
      }
    } else {
      handleResetClick();
    }
  };
  
  const handleInvalidAccount = () => {
    setAttemptsLeft(attemptsLeft - 1);
    setDoPasswordsMatch(false);
  
    if (attemptsLeft <= 0) {
      setFormState({
        ...formState,
        InformationBoxValue: formState.buttonText === 'Verify'
          ? (
            <>
              Your account has been locked due to too many failed attempts to sing in. Contact your partner using the following email:{' '}
              <Link className="link">partner@partner.com</Link>
            </>
          )
          : (
            <>
              Your account has been locked due to too many failed attempts to sing in. Click the{' '}
              <Link to="/recovery-password" className="link">
                account password recovery
              </Link>{' '}
              to start the recovery process.
            </>
          ),
      });
    } else {
      setFormState({
        ...formState,
        showInformationBox: true,
        InformationBoxValue: formState.buttonText === 'Verify'
          ? `Entered 6-digit code is incorrect. Please try again, ${attemptsLeft} attempt(s) left.`
          : `Entered email address or password is incorrect. Please try again, ${attemptsLeft} attempt(s) left.`,
        informationColour: 'red',
      });
    }
  };
  
  const isButtonDisabled =
    (!formState.emailValue ||
      !formState.passwordValue ||
      (formState.buttonText === 'Update password' && !isPasswordValid)) &&
    !checked &&
    !checked2 &&
    !formState.verificationCodeValue;
  

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h4>{formState.title}</h4>
          {formState.showInformationBox && (
            <InformationBox value={formState.InformationBoxValue} colour={formState.informationColour} />
          )}
          {formState.buttonText === 'Continue' && formState.title === 'Help us verify it`s you' && formState.flow !== '2' ?(
              <>
          <div className='check-box-selection'>
            <p className='check-box-selectio-label'>Select an account password recovery method:</p>
            <Checkbox
            label="Send code via SMS"
            secondLable='+373*****123'
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              setChecked2(false);
            }}
          />
          <Checkbox
            label="Send code via Email"
            secondLable='******izt@pinky.com'
            checked={checked2}
            onChange={() => {
              setChecked2(!checked2);
              setChecked(false);
            }}
          />
          
          </div>
          </>
          ) :null }
          <form>
            {formState.flow === '2'?(
              <VerificationCode method={formState.recoveryMethod} onChange={(event) => setFormState({ ...formState, verificationCodeValue: event.target.value })} inputClassName={!doPasswordsMatch ? 'input-error' : ''}/>
            ): null}
            
            {formState.buttonText === 'Sing in' || (formState.buttonText === 'Continue' && formState.title === 'Account password recovery') || formState.title === 'Change your password'?(
              <>
              <FormRow>
              <FormGroup
                label={formState.emailLabel}
                placeholder={formState.emailPlaceholder}
                type={formState.type}
                value={formState.emailValue}
                onChange={(event) => setFormState({ ...formState, emailValue: event.target.value })}
                login="login"
                inputClassName={!doPasswordsMatch ? 'input-error' : ''}
              />
            </FormRow>
            {!doPasswordsMatchText && formState.buttonText === 'Update password' && (
              <p className="error-message">The passwords entered must match.</p>
            )}
            <FormRow>
              <FormGroup
                label={formState.passwordLabel}
                placeholder={formState.passwordPlaceholder}
                type={formState.secondInputType}
                value={formState.passwordValue}
                onChange={handlePasswordChange}
                login="login"
                inputClassName={!doPasswordsMatch ? 'input-error' : ''}
              />
            </FormRow>
            </>
            ) :null }
            

            {!doPasswordsMatchText && formState.buttonText === 'Update password' && (
              <p className="error-message">The passwords entered must match.</p>
            )}
            
            {formState.showRequirements && <PasswordRequirements password={formState.passwordValue} />}

            <hr />
            <div className="links">
              <button
                className={`sing-in ${isButtonDisabled ? 'disabled' : ''}`}
                onClick={() => handleButtonClick(formState.buttonLink)}
                disabled={isButtonDisabled}
              >
                <img
                    src={formState.buttonText === 'Update password' ? UpdatePasswordButton : (formState.buttonText === 'Continue' || formState.buttonText === 'Verify') ? ContinueRecoveryPassword : SingInButtonLogo}
                    className="button-image"
                />
                {formState.buttonText}
              </button>
              <br />
              {formState.showForgotPasswordLink && (
                <Link to='/login' onClick={handleForgotPasswordClick}>{formState.linkToFlow}</Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;