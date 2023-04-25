import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page-background">
      <div className="main-profile-div">
        <div className="profile-div-left">
          <div className="div-profile-left-avatat">
            <img className="left-profile-img-avatar" src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681625760/user_ynk5rx.png" alt="avavatar" />
          </div>
          <div className="button-upload-profile-div">
          <button className="button-upload-profile">Upload</button>
          </div>
          <div className="input-fields-profile-div-left">
            <div className="input-div-profile-page">
              <label className="left-profile-name-label">Name</label>
              <input type="text" className="left-profile-name-input" />
            </div>
            <div className="input-div-profile-page">
              <label className="left-profile-name-label">Phone Number</label>
              <input type="number" className="left-profile-name-input" />
            </div>
            <div className="input-div-profile-page">
              <label className="left-profile-name-label">Email</label>
              <input className="left-profile-name-input" type="email" />
            </div>

            <div className="input-div-profile-page">
              <label className="left-profile-name-label">Password</label>
              <input type="password" className="left-profile-name-input" />
            </div>
            <div className="button-left-div-profile input-div-profile-page">
            <button className="button-left-profile">Save</button>
          </div>
          </div>
          
        </div>
        <div className="profile-div-right">
          <div className="social-update-column">
            <div>
              <h1>Community</h1>
            </div>
            <div className="input-fields-profile-div-right-top">
              <div className="input-div-profile-page">
                <label className="left-profile-name-label">UserName</label>
                <input type="text" className="left-profile-name-input" />
              </div>
              <div className="input-div-profile-page">
                <label className="left-profile-name-label">Description</label>
                <input type="text" className="left-profile-name-input" />
              </div>
            </div>
            <div className="button-right-div-profile input-div-profile-page">
            <button className="button-left-profile">Save</button>
          </div>
            </div>
          <div className="address-update-column">
            <div className="input-fields-profile-div-right-top">
              <div>
                <h1>FitMart</h1>
              </div>
              <div>
                <p className="left-profile-name-label">
                  Shipping Address
                </p>
                <div className="left-profile-shipping-address-attributes">
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">Name</label>
                    <input type="text" className="left-profile-name-input" />
                  </div>
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">City</label>
                    <input type="text" className="left-profile-name-input" />
                  </div>
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">Pincode</label>
                    <input type="text" className="left-profile-name-input" />
                  </div>
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">state</label>
                    <input type="text" className="left-profile-name-input" />
                  </div>
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">Country</label>
                    <input type="text" className="left-profile-name-input" />
                  </div>
                  <div className="input-div-profile-page">
                    <label className="left-profile-name-label">Phone Number</label>
                    <input type="text" className="left-profile-name-input" />
                  </div>

                </div>
              </div>
            </div>
            <div className="button-right-div-profile input-div-profile-page">
            <button className="button-left-profile">Save</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
