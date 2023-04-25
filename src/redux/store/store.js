import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import DietPlanReducer from "../slices/dietPlanSlice";
import gymPlanReducer from "../slices/gymPlanSlice";

const store = configureStore({
    reducer:{
        users: userReducer,
        dietPlan : DietPlanReducer,
        gymPlan: gymPlanReducer,
    }
})

export default store;