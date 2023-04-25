import axios from "axios";
import baseURL from "../../utils/baseURL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    // ye wali loading or error jab use hoge jab user register krega 
    loading: false,
    error: null,
    inTempStorage: false,
    userLessAuth:{
        // ye wale loading or error jab user login kregea
        loading: false,
        error:null,
        userLessInfo: localStorage.getItem('userLessInfo') ? JSON.parse(localStorage.getItem('userLessInfo')) : null,
    },
    userAuth:{
        loading: false,
        error: null,
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    }
}

export const registerUserAction = createAsyncThunk('user/register', async(
    {name, email, password},
    {rejectWithValue, getState, dispatch}
) => {
    try{
        console.log(name, email, password)
        const {data} = await axios.post(`${baseURL}/users/register`, {
            name, email, password
        });

        console.log(data);

        //saving the user into localStorage
        // localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    }catch(error){
        console.log(error?.response?.data)
        return rejectWithValue(error?.response?.data);
    }
})

export const verifyUserOTPAction = createAsyncThunk('user/verifyOTP', async(
    {otp},
    {rejectWithValue, getState, dispatch}
) => {
    try{

        const token = getState()?.users?.userLessAuth?.user?.token;

        const config = {
            headers: {
                token: `${token}`
            }
        }
        const {data} = await axios.post(`${baseURL}/users/register/otp`, {
            otp
        },
        config);

        localStorage.setItem('userInfo', JSON.stringify(data));

        //saving the user into localStorage
        // localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    }catch(error){
        console.log(error?.response?.data)
        return rejectWithValue(error?.response?.data);
    }
})



export const signInAction = createAsyncThunk('user/signin', async(
    { email, password},
    {rejectWithValue, getState, dispatch}
) => {
    try{
        console.log(email,password);
        const {data} = await axios.post(`${baseURL}/users/login`, {
            email, password
        });
        console.log(email,password);
        localStorage.setItem('userInfo', JSON.stringify(data));

        console.log(data);

        //saving the user into localStorage
        // localStorage.setItem('userInfo', JSON.stringify(data));
        return data;
    }catch(error){
        console.log(error?.response?.data)
        return rejectWithValue(error?.response?.data);
    }
})



const userSlice = createSlice({
    name:"users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(registerUserAction.pending, (state, action) => {
            state.loading = true;  
        });
        builder.addCase(registerUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.inTempStorage = true;
            state.userLessAuth = action.payload;
        });
        builder.addCase(registerUserAction.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });


        builder.addCase(verifyUserOTPAction.pending, (state, action) => {
            state.loading = true;  
        });
        builder.addCase(verifyUserOTPAction.fulfilled, (state, action) => {
            state.loading = false;
            state.userAuth = action.payload;
            //userinfo ka data apne app localstorage se utha lega
        });
        builder.addCase(verifyUserOTPAction.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });


        builder.addCase(signInAction.pending, (state, action) => {
            state.loading = true;  
        });
        builder.addCase(signInAction.fulfilled, (state, action) => {
            state.loading = false;
            state.userAuth = action.payload;
            //userinfo ka data apne app localstorage se utha lega
        });
        builder.addCase(signInAction.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
})

const userReducer = userSlice.reducer;
export default userReducer;