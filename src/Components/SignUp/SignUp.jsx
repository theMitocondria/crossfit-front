import React from 'react'
import './SignUp.css'
import { Link,BrowserRouter } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='sign-up-page'>
        <img className='sign-up-page-img' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png" alt="" />

        <div className='sign-up-main' >
            
            <div className='sign-up-main-left'>
                <p className='sign-up-left-welcome'>Stay Consistent!</p>
                <p className='sign-up-left-para'>Healthier, Happier, Bettter: Our app does it all...</p>
            </div>

            <div className='sign-up-main-right' >
                <p className='sign-up-right-signin'>Sign up</p>
                
                <div className='sign-up-right-input-parent-div'>

                        <p className='sign-up-page-input-fields-desc'>Name</p>
                        <input className='sign-up-page-input-fields' type="text" />

                        <p className='sign-up-page-input-fields-desc'>Email</p>
                        <input className='sign-up-page-input-fields' type="text" />
                  

                    
                        <p className='sign-up-page-input-fields-desc'>Password</p>
                        <input className='sign-up-page-input-fields' type="text" />
                   

                   <div className='sign-up-page-submit-btn-div'>
                   <button className='sign-up-button'>Submit</button>
                   </div>
                </div>

               <div  className='sign-up-page-link-div'>
                <Link className='sign-up-page-link' to='/signin'>Already have account? Sign in.</Link>

               </div>

            </div>

        </div>

    </div>
  )
}

export default SignUp