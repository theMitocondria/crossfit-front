import React from 'react'
import "./Review.css"
const Review = () => {
    return (
        <div className='Review-main'>
            <div className='Review-main-box'>
                <div className='Review-left'>
                    <div className='Review-main-heading'>
                        <h3 className='Review-main-heading-para'>Share Your Experience</h3>
                    </div>
                    <div className='Review-main-form'>
                        <form>
                            <input className="Review-main-form-imput-tags"type='text' placeholder='Name'/>
                            <hr/>
                            <input className="Review-main-form-imput-tags" type='email' placeholder='Email Id'/>
                            <hr/>
                            <input type='number' className="Review-main-form-imput-tags"placeholder='Phone Number'/>
                            <hr/>
                            <input type='text'className="Review-main-form-imput-tags" placeholder='Write your feedback'/>
                            <hr/>
                            <div className='Review-main-form-imput-button-div'>
                            <button type='submit' className="Review-main-form-imput-button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='Review-right'>
                   <img className="Review-main-form-image"src='https://res.cloudinary.com/dycitvrpg/image/upload/v1681535035/helpupimprove_efsbkr.png' alt="imag"/>
                </div>
            </div>
        </div>
    )
}

export default Review