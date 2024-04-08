import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const signup = createAsyncThunk('auth/signup', async({FirstName, LastName, Email, Password}, thunkAPI) =>{
    try{
        const res = await axios.post(`${process.env.REACT_APP_API}/signup`, {FirstName, LastName, Email, Password})
        return res.data
    }catch (err){
        console.log(err)
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const signin = createAsyncThunk('auth/signin', async({Email, Password}, thunkAPI) =>{
    try{
        const res = await axios.post(`${process.env.REACT_APP_API}/signin`, {Email, Password})
        return res.data
    }catch (err){
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

const initialState = {
    user: '',
    userId: '',
    isLoggedIn: false,
    loading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout:(state, action) =>{
            state.user= ''
            state.isLoggedIn= false
            state.loading= false
            state.error= null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.userId = action.payload.userId
                state.isLoggedIn = true
                state.loading = false
                state.error = null
            })
            .addCase(signup.pending, (state, action) => {
                state.loading = true
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.userId = action.payload.userId
                state.isLoggedIn = true
                state.loading = false
                state.error = null
            })
            .addCase(signin.pending, (state, action) => {
                state.loading = true
            })
            .addCase(signin.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })
    }
})

export const {logout} =authSlice.actions

export default authSlice.reducer