import React from 'react'
import "./Improve.css"
const Improve = () => {
    return (
        <div className='improve-main'>
            <div className='improve-main-box'>
                <div className='improve-left'>
                    <div className='improve-main-heading'>
                        <h3 className='improve-main-heading-para'>Help Us Improve</h3>
                    </div>
                    <div className='improve-main-form'>
                        <form>
                            <input className="improve-main-form-imput-tags"type='text' placeholder='Name'/>
                            <hr/>
                            <input className="improve-main-form-imput-tags" type='email' placeholder='Email Id'/>
                            <hr/>
                            <input type='number' className="improve-main-form-imput-tags"placeholder='Phone Number'/>
                            <hr/>
                            <input type='text'className="improve-main-form-imput-tags" placeholder='Write your feedback'/>
                            <hr/>
                            <div className='improve-main-form-imput-button-div'>
                            <button type='submit' className="improve-main-form-imput-button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='improve-right'>
                   <img className="improve-main-form-image"src='https://res.cloudinary.com/dycitvrpg/image/upload/v1681535035/helpupimprove_efsbkr.png' alt="imag"/>
                </div>
            </div>
        </div>
    )
}

export default Improve