import axios from "axios";
import baseURL from "../../utils/baseURL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    posts:[],
    post:{
        error:null,
        loading:false,
        post:null,
    },
    myPosts:{
        error: null,
        loading: false,
        myPosts: [],
    }
}

export const AllPostsReducers=createAsyncThunk("/all/posts",async({my},{getState,rejectWithValue})=>{
    try {
       
        const token=getState().users?.userAuth?.userInfo?.user?.token;
    
        const config={
           headers:{
             token:`${token}`
           }
        }

        const {data}=await axios.get(`${baseURL}/post/all`,config);
        return data;
    } catch (error) {
       
        return rejectWithValue(error?.message);
    }
})


export const MyPostsReducers=createAsyncThunk("/my/posts",async({my},{getState,rejectWithValue})=>{
    try {
        console.log(my);
        const token=getState().users?.userAuth?.userInfo?.user?.token;
        console.log(token);
        const config={
           headers:{
             token:`${token}`
           }
        }

        const {data}=await axios.get(`${baseURL}/post/my`,config);
        return data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error?.response?.data);
    }
})

const SocialSlice = createSlice({
    name: "Social",
    initialState,
    extraReducers: (builder) => {
    builder.addCase(AllPostsReducers.pending,(state)=>{
        state.loading=true;
    })
    builder.addCase(AllPostsReducers.fulfilled,(state,action)=>{
        state.loading=false;
        state.posts=action.payload;
    })
    builder.addCase(AllPostsReducers.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload
    })



    builder.addCase(MyPostsReducers.pending,(state)=>{
        state.loading=true;
    })
    builder.addCase(MyPostsReducers.fulfilled,(state,action)=>{
        state.loading=false;
        state.myPosts=action.payload;
    })
    builder.addCase(MyPostsReducers.rejected,(state,action)=>{
        state.loading=false;
        state.myPosts.error=action.payload
    })
    }
});


const SocialReducer = SocialSlice.reducer;
export default SocialReducer;
