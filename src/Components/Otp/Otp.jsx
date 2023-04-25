import React from "react";
import "./otp.css";
import {Link} from "react-router-dom"
const Otp = () => {
  return (
    <div className="otp-main-div">
      <div className="otp-head-div">
        <img
          className="sign-up-page-img"
          src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png"
          alt=""
        />
      </div>
      <div className="sign-up-main">
      <div className='sign-up-main-left'>
                <p className='sign-up-left-welcome'>Auth Yourself</p>
                <p className='sign-up-left-para'>How does Otp Communicate? Through encrypted messages!!!</p>
            </div>
      <div className='sign-up-main-right' >
                <p className='sign-up-right-signin'>OTP</p>
                
                <div className='sign-up-right-input-parent-div'> 

                    
                        <p className='sign-up-page-input-fields-desc'>One Time Password</p>
                        <input className='sign-up-page-input-fields' type="Number" />
                   

                   <div className='sign-up-page-submit-btn-div'>
                   <button className='sign-up-button'>Submit</button>
                   </div>
                </div>

               <div  className='sign-up-page-link-div'>
                <Link className='sign-up-page-link' to='/signup'>Resend Mail</Link>

               </div>

            </div>

      </div>
    </div>
  );
};

export default Otp;
