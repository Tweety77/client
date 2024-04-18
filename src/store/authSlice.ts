import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

interface signUp{
    FirstName: string,
    LastName: string,
    Email: string,
    Password: string,
}

interface signIn{
    Email: string,
    Password: string
}

export const signup = createAsyncThunk<UserInfo, signUp, {rejectValue:string| unknown}>('auth/signup', async({FirstName, LastName, Email, Password}, {rejectWithValue}) =>{
    try{
        const res = await axios.post(`${process.env.REACT_APP_API}/signup`, {FirstName, LastName, Email, Password})
        return res.data
    }catch (err){
        return rejectWithValue('Server error')
    }
})

export const signin = createAsyncThunk<UserInfo, signIn, {rejectValue:string| unknown}>('auth/signin', async({Email, Password}, {rejectWithValue}) =>{
    try{
        const res = await axios.post(`${process.env.REACT_APP_API}/signin`, {Email, Password})
        return res.data
    }catch (err){
        return rejectWithValue('Server error')
    }
})



interface reducer {
    user: string;
    userId: string;
}

type UserInfo = {
    user: string,
    userId: string,
    isLoggedIn: boolean,
    loading: boolean,
}

const initialState: UserInfo = {
        user: '',
        userId: '',
        isLoggedIn: false,
        loading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout:(state) =>{
            state.user= ''
            state.isLoggedIn= false
            state.loading= false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.fulfilled, (state, action: PayloadAction<reducer>) => {
                state.user= action.payload.user
                state.userId = action.payload.userId
                state.isLoggedIn = true
                state.loading = false
            })
            .addCase(signup.pending, (state) => {
                state.loading = true
            })
            .addCase(signin.fulfilled, (state, action: PayloadAction<reducer>) => {
                state.user = action.payload.user
                state.userId = action.payload.userId
                state.isLoggedIn = true
                state.loading = false
            })
            .addCase(signin.pending, (state) => {
                state.loading = true
            })
    }
})

export const {logout} =authSlice.actions

export default authSlice.reducer