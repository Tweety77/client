import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { AxiosError } from 'axios';

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

type KnownErr = {
    message: string | null;
}

export const signup = createAsyncThunk<UserInfo, signUp, {rejectValue:KnownErr}>('auth/signup', async({FirstName, LastName, Email, Password}, {rejectWithValue}) =>{
    try{
        const res = await axios.post(`${process.env.REACT_APP_API}/signup`, {FirstName, LastName, Email, Password})
        return res.data
    }catch (err){
        const error: AxiosError<KnownErr> = err as any;
        if (!error.response) {
          throw err;
        }
        return rejectWithValue(error.response.data);
      }
})

export const signin = createAsyncThunk<UserInfo, signIn, {rejectValue:KnownErr}>('auth/signin', async({Email, Password}, {rejectWithValue}) =>{
    try{
        const res = await axios.post(`${process.env.REACT_APP_API}/signin`, {Email, Password})
        return res.data
    }catch (err){
        const error: AxiosError<KnownErr> = err as any;
        if (!error.response) {
          throw err;
        }
        return rejectWithValue(error.response.data);
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
    error: string | null
}

const initialState: UserInfo = {
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
        logout:(state) =>{
            state.user= ''
            state.isLoggedIn= false
            state.loading= false
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.fulfilled, (state, action: PayloadAction<reducer>) => {
                state.user= action.payload.user
                state.userId = action.payload.userId
                state.isLoggedIn = true
                state.loading = false
                state.error= null
            })
            .addCase(signup.pending, (state) => {
                state.loading = true
                state.error= null
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                if (action.payload) {
                    state.error = action.payload.message
                  }
            })
            .addCase(signin.fulfilled, (state, action: PayloadAction<reducer>) => {
                state.user = action.payload.user
                state.userId = action.payload.userId
                state.isLoggedIn = true
                state.loading = false
                state.error= null
            })
            .addCase(signin.pending, (state) => {
                state.loading = true
                state.error= null
            })
            .addCase(signin.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                if (action.payload) {
                    state.error = action.payload.message
                  }
            })
    }
})

export const {logout} =authSlice.actions

export default authSlice.reducer