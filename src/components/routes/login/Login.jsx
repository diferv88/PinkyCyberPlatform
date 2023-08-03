import React from 'react'
import pinkyLoginLogo from '../../../assets/images/pinkycibersafelogo.svg'
import Modal from '../../modal/Modal'
import './Login.styles.scss'
import Footer from '../../footer/footer.component'

export const Login = () => {
  return <>
  <div className='container'>
    <img src={pinkyLoginLogo} className='pinky-logo'/>
    <Modal title='Sing in with your account'/>
    <Footer/>
  </div>
  
    </>
}
