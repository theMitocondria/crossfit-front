import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import DietPlanReducer from "../slices/dietPlanSlice";
import gymPlanReducer from "../slices/gymPlanSlice";
import chatReducer from "../slices/fitbotSlice";
import testimonialReducer from "../slices/testimonialSlices";

const store = configureStore({
    reducer:{
        users: userReducer,
        dietPlan : DietPlanReducer,
        gymPlan: gymPlanReducer,
        fitbotChat: chatReducer,
        testimonial:testimonialReducer,
    }
})

export default store;