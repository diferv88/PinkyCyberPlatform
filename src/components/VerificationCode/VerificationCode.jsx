/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './VrificationCode.styles.scss'
import FormGroup from '../pageUsers/formGroup/FormGroup'
import FormRow from '../pageUsers/formRow/FormRow'
const VerificationCode = ({method, onChange, inputClassName}) => {

  return <>

    <p className='verification-p'>We've sent you a 6-digit code via {method}.</p>
    <FormRow>
        <FormGroup
                label={`6-digit ${method} code`}
                placeholder='Enter verification code'
                type='text'
                login="login"
                onChange={onChange}
                inputClassName = {inputClassName}
              />
    </FormRow>
    <div className='p-verification'>Did not received the verification code? <p className='link-to-send'> Send again</p></div>
  </>
}

export default VerificationCode;