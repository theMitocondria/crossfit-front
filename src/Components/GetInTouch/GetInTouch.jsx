import React from 'react'
import './GetInTouch.css'
import { Link } from 'react-router-dom'


const GetInTouch = () => {

  return (
    <div className='get-in-touch-class'>
      <div className='get-in-touch-upper'>
        <p className='getintouchpara'>Get in <span>touch</span></p>
        <Link to="https://mitocondria-gules.vercel.app/">
          <button className='get-in-touch-aboutme-btn'>About me</button>
        </Link>
      </div>

      <div className='get-in-touch-upperline'>

      </div>

      <div className='get-in-touch-middle' >
        <img className='getintouch-user-photo' src="https://res.cloudinary.com/dejvlvhlp/image/upload/v1682406284/photo1680104402_y6gfyd.jpg" alt="" />
        <p className='getintouch-username'>Dhruv Mehta</p>
        <p className='getintouch-userdesc'>Full Stack Developer</p>
      </div>

      <div className='get-in-touch-lower' >
        <div className='social-media-logoname' >
          <Link to="https://api.whatsapp.com/send/?phone=%2B919319014580&text&type=phone_number&app_absent=0">
            <img className='social-media-logos' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681474383/whatsapp_ywppw7.png" alt="" />
            <p className='social-media-whats'>Whatsapp</p></Link>
        </div>

        <div className='social-media-logoname'>
          <img className='social-media-logos' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681474382/telegram_bkciah.png" alt="" />
          <p className='social-media-tele'>Telegram</p>
        </div>

        <div className='social-media-logoname'>
          <Link to="mailto:dhruvmehta382@gmail.com">
            <img className='social-media-logos' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681474382/gmail_kcwpqg.png" alt="" />
            <p className='social-media-gmail'>Gmail</p>
          </Link>
        </div>

        <div className='social-media-logoname'>
          <Link to="https://www.linkedin.com/in/dhruv-mehta-a6b20322a/">
            <img className='social-media-logos' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681474382/linkedin_sl7ith.png" alt="" />
            <p className='social-media-link'>Linkedin</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
