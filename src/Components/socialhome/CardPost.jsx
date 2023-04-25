import React from 'react'
import "./cardpost.css"
import {AiOutlineHeart} from "react-icons/ai"
import {MdOutlineModeComment} from "react-icons/md"
const CardPost = () => {
  return (
    <div className='post-social'>
        <img className='post-social-image' src="https://imgs.search.brave.com/X-2bUap6906cn3cgRR7_YfzIRvt8xt_nfqWnf5ovksA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9waG90/b2dyYXBoeWxpZmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzAxL0xhbmRz/Y2FwZS1waG90b2dy/YXBoeS1leGFtcGxl/LmpwZw" alt="image-post"/>
        <div className='post-bottom'>
            <div className='post-bottom-left'>
            <img className='social-post-user-avatar' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar"/>
            </div>
            <div className='post-bottom-center'>
                <p className='username-post'>Dhruv Mehta</p>
                <p className='caption-post'>This is my first beautiful post</p>
            </div>
            <div className='post-bottom-right'>
                <AiOutlineHeart style={{color:"red",fontSize:"4vh",marginRight:"1.5vw"}}/>
                <MdOutlineModeComment style={{fontSize:"4vh"}}/>
            </div>
        </div>
    </div>
  )
}

export default CardPost