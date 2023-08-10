/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import pinkyLoginLogo from '../../../assets/images/pinkycibersafelogo.svg'
import Modal from '../../modal/Modal'
import './Login.styles.scss'
import Footer from '../../footer/footer.component'
import LogoBack from '../../../assets/images/loginBackground.svg'

export const Login = () => {
  return <div className='container' style={{
          backgroundImage: `url(${LogoBack})`,
        }} >
      <img src={pinkyLoginLogo} className='pinky-logo'/>
      <Modal title='Sing in with your account' buttonText='Sing in' secondInputLabel='Password'  secondInputTipe='password' secondInpuPlaceholder='*********' linkToFlow='Forgot your password?'/>
      <Footer/>
    </div>
  
}
