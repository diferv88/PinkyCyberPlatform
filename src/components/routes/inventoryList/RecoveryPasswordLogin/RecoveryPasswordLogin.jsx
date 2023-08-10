import React from 'react';
import Modal from '../../modal/Modal';
import LogoBack from '../../../assets/images/loginBackground.svg';
import pinkyLoginLogo from '../../../assets/images/pinkycibersafelogo.svg';
import Footer from '../../footer/footer.component';

export const RecoveryPasswordLogin = () => {
  return <div className='container' style={{
            backgroundImage: `url(${LogoBack})`,
            }} >
            <img src={pinkyLoginLogo} className='pinky-logo'/>
            <Modal title='Account password recovery' buttonText='Continue' secondInputLabel='Company IDNO' secondInputTipe='text' secondInpuPlaceholder='IDNO' linkToFlow='Back to sing in'/>
            <Footer/>
        </div>
}
