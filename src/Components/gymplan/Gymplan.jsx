import React from 'react'
import "./gymplan.css";
import "../DietPlan/dietplan.css"
import GymplanNavbar from "./gymplanNavbar"
const Gymplan = () => {
    return (
        <div>
            <GymplanNavbar  />
            <div className='gymplan-main'>

                <div className='upper-gymplan'>
                    <div className='gymplan-main-heading'>
                        <h1 className='gymplan-heading-para'>Exercise Plan</h1>
                    </div>
                    <div className='description-gymplan'>
                        <p className='gymplan-description-para'>Our app allows you to customize your gym plan based on your specific preferences, needs, and fitness goals. With a few simple steps our expert trainers will create a personalized workout chart that maximizes your potential and helps you achieve your desired results.</p>
                    </div>
                </div>
                <div className='gymplan-lower'>
                    <div className='gymplan-lower-left'>
                        <h3 className='gymplan-lower-left-heading'>About You ...</h3>
                        <div className='input-fields-dietplan'>
                            <select id="Gender" name="Gender" className='input-fields-dietplan-item'>
                                <option value="Gender">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className='input-fields-dietplan'>
                            <input type="number" placeholder='Age' className='input-fields-dietplan-item' />
                        </div>
                        <div className='input-fields-dietplan'>
                            <input type="number" className='input-fields-dietplan-item' placeholder='Height' />
                        </div>
                        <div className='input-fields-dietplan'>
                            <input type="number" placeholder='Weight' className='input-fields-dietplan-item' />
                        </div>
                    </div>
                    <div className='gymplan-lower-right'>
                        <h3 className='gymplan-lower-right-heading'>Customize it!</h3>
                        <div className='input-fields-dietplan'>
                            <select name="Your Goals" className='input-fields-dietplan-item'>
                                <option value="Your Goals">Your Goals</option>
                                <option value="Loose Weight">Loose Weight</option>
                                <option value="Maintain Weight">Maintain Weight</option>
                                <option value="Gain Weight">Gain Weight</option>
                            </select>
                        </div>
                        <div className='input-fields-dietplan'>
                            <select name="TainingSplit" className='input-fields-dietplan-item'>
                                <option value="Push-Pull-leg">Training Split</option>
                                <option value="Push-Pull-leg">Push-Pull-leg</option>
                                <option value="Lower-Upper-split">Lower-Upper-split</option>
                                <option value="Body-part-split">Body-part-split</option>
                            </select>
                        </div>
                        <div className='input-fields-dietplan'>
                            <select name="Duration" className='input-fields-dietplan-item'>
                                <option value="30min">Duration</option>
                                <option value="45 min">45 Minutes</option>
                                <option value="1hr+">1 hour+</option>
                                <option value="1.5hr+">1.5hourr+</option>
                            </select>
                        </div>
                        <div className='input-fields-dietplan'>
                            <select name="Workout" className='input-fields-dietplan-item'>
                                <option value="Gym Workout">Workout</option>
                                <option value="Gym Workout"> Gym Workout</option>
                                <option value="Home Workout"> Home Workout</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='gymplan-div-button'>
                    <button className='gymplan-ac-button'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Gymplan