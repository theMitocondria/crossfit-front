import React, { useState } from 'react'
import "./dietplan.css"
import data from "./data.js"


const DietPlan = () => {
    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonClick = (buttonId) => {
        if (selectedButtons.includes(buttonId)) {
            setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
        } else {
            setSelectedButtons([...selectedButtons, buttonId]);
        }

        console.log(selectedButtons);
    };
    const buttonData = data;
    return (
        <div className='Dietplan'>
            <div className='DietPlan-top'>
                <h2 className='Dietplan-heading'>Diet Plan</h2>
                <p className='Dietplan-Description'>Our app is designed to make diet planning easy and personalized. With our innovative approach, users can create their own customized diet charts based on the items they choose. Simply select the foods you enjoy and want to incorporate into your diet, and our app generates a tailored meal plan that meets your specific nutritional requirements and goals. So why still waiting? Try it Out!!</p>
            </div>
            {/* <div className='dietplan-main'> */}
                <div className='Dietplan-main-div'>

                    <h3 className='heading-about'>About You</h3>
                        <div className='form-dietplan'>
                            <div className='Dietplan-left'>
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
                            <div className='Dietplan-right'>
                                <h3 className='heading-main-dietplan'>Food Items</h3>
                                <div >
                                    {buttonData.map((button) => (
                                        <button
                                            key={button.name}
                                            onClick={() => handleButtonClick(button.name)}
                                            id={selectedButtons.includes(button.name) ? 'btn-diet-food-active' : 'btn-diet-food'}
                                        >
                                            <img className='imgc' src={button.image} alt="ima" />
                                            <h5 className='img-name'>{button.name}</h5>
                                        </button>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className='form-button-div'>
                            <button className='form-button'>Submit</button>
                        </div>
                </div>
            {/* </div> */}

        </div>
    )
}

export default DietPlan