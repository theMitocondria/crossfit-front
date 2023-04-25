import React from "react";
import { Link } from 'react-router-dom'

const ResetPassword = () => {
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
        <div className="sign-up-main-left">
          <p className="sign-up-left-welcome">Get Set Go!!!</p>
          <p className="sign-up-left-para">
            Recover Your Account, Reset your password
          </p>
        </div>
        <div className="sign-up-main-right">
          <p className="sign-up-right-signin">Reset Password</p>

          <div className="sign-up-right-input-parent-div">
            <p className="sign-up-page-input-fields-desc">New Password</p>
            <input className="sign-up-page-input-fields" type="text" />

            <div className="sign-up-page-submit-btn-div">
              <button className="sign-up-button">Reset Password</button>
            </div>
          </div>
          <div  className='sign-in-page-link-div'>
                <Link className='sign-up-page-link' style={{paddingRight:"3vw",paddingTop:"8vh"}} to='/signin'>SignIn</Link>
                <Link className='sign-up-page-link'  style={{paddingRight:"3vw"}} to='/signup'>SignUp</Link>

            </div>
        </div>
        
      </div>
    </div>
  );
};

export default ResetPassword;
