import React from 'react'
import './SignIn.css'
import { Link,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from '../../redux/slices/userSlice'
import WhiteLoadingComponent from '../LoadingComponent/whiteLoading'

const SignIn = () => {
  
  const dispatch = useDispatch();
  let navigate = useNavigate();


  const [email, setEmail] = useState("buddhgautam777@gmail.com")
  const [password, setPassword] = useState("gautam")

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  // const userInfo = useSelector((state) => state.users?.userAuth?.userInfo)
  const {loading, error} = useSelector((state) => state.users)

  const onSubmitHanlder = async(e) => {
    // e.preventDefault();
    console.log( email, password);
   await dispatch(signInAction({ email, password}))

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;


   
    if(userInfo){
      // <Link to='/otp' element={<Otp />} />
      navigate(`/`)
    }
  }
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
                        <input onChange={emailChangeHandler} className='sign-up-page-input-fields' type="text" />
                  

                    
                        <p className='sign-up-page-input-fields-desc'>Password</p>
                        <input onChange={passwordChangeHandler} className='sign-up-page-input-fields' type="text" />
                   

                   <div className='sign-up-page-submit-btn-div'>
                    {
                      loading ? <WhiteLoadingComponent /> : <button onClick={onSubmitHanlder} className='sign-up-button'>Submit</button>
                    }
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