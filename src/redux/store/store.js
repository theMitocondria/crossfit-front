import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import PlanReducer from '../slices/dietPlanSlice'

const store = configureStore({
    reducer:{
        users: userReducer,
        plan : PlanReducer,
    }
})

export default store;