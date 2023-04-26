import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import DietPlanReducer from "../slices/dietPlanSlice";
import gymPlanReducer from "../slices/gymPlanSlice";
import chatReducer from "../slices/fitbotSlice";
import feedbackReducer from "../slices/feedbackSlice";

const store = configureStore({
    reducer:{
        users: userReducer,
        dietPlan : DietPlanReducer,
        gymPlan: gymPlanReducer,
        fitbotChat: chatReducer,
        feedback: feedbackReducer,
    }
})

export default store;