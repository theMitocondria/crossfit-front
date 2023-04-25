import React from 'react'
import './SignIn.css'
import { Link,BrowserRouter } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='sign-in-page'>
        <img className='sign-in-page-img' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png" alt="" />

        <div className='sign-in-main' >
            
            <div className='sign-in-main-left'>
                <p className='sign-in-left-welcome'>Welcome!</p>
                <p className='sign-in-left-para'>Missed you a lot. hoping for a better session with you this time. Stay Consistent, achieve your goal.</p>
            </div>

            <div className='sign-up-main-right' >
                <p className='sign-up-right-signin'>Sign in</p>
                
                <div className='sign-up-right-input-parent-div'>

                      

                        <p className='sign-up-page-input-fields-desc'>Email</p>
                        <input className='sign-up-page-input-fields' type="text" />
                  

                    
                        <p className='sign-up-page-input-fields-desc'>Password</p>
                        <input className='sign-up-page-input-fields' type="text" />
                   

                   <div className='sign-up-page-submit-btn-div'>
                   <button className='sign-up-button'>Submit</button>
                   </div>
                </div>

               <div  className='sign-in-page-link-div'>
                <Link className='sign-up-page-link' to='/forget/password'>Forgot password?</Link>
                <Link className='sign-up-page-link' to='/signup'>New User? Create an Account.</Link>

               </div>

            </div>

        </div>

    </div>
  )
}

export default SignIn