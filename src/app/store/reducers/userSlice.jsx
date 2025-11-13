

import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { fetchUserlogin, fetchuserProfile,Logout } from "../../../data/formdata"
import Cookies from 'js-cookie'


export const Userlogin = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    const res = await fetchUserlogin(credentials);
    if (!res.success) return rejectWithValue(res.message || "Login failed");
    return res;
  }
);

export const UserProfile = createAsyncThunk("userProfile/fetch",
  async (token, { rejectWithValue }) => {
    try {
  console.log(token,"in slice");
      const res = await fetchuserProfile(token)
      return res.data;

    } catch (error) {
      return rejectWithValue("failed to fetch user data")
    }
  }
)

export const UserlogOut = createAsyncThunk(
  "user/logout",
  async(token,{rejectWithValue})=>{
    try {
      const res = await Logout(token)
      return res;
      
      
    } catch (error) {
     return rejectWithValue(error.message || 'logout failed');
      
    }
  }
)


const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
     isAuthenticated: false
  },
  reducers: {


  },
  extraReducers: (builder) => {
    builder
      .addCase(Userlogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated =false
      })
      .addCase(Userlogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
          state.isAuthenticated =true
      })
      .addCase(Userlogin.pending, (state, action) => {
        state.loading = true;
        state.error = null;
          state.isAuthenticated =false
      })

      // fetch profile
      .addCase(UserProfile.pending, (state, action) => {
        state.loading = true;
        state.error = null;
          state.isAuthenticated =false
      })
      .addCase(UserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data || null;
          state.isAuthenticated =true
      })
      .addCase(UserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
           state.isAuthenticated =false
      })
      // ---- LOGOUT ----
      .addCase(UserlogOut.pending, (state) => {
        state.loading = true;
        state.error =null
      })
      .addCase(UserlogOut.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
          state.isAuthenticated =false
          Cookies.remove('authToken',{path:'/'})
      })
      .addCase(UserlogOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
            state.isAuthenticated =false
      });
  }

})

export default userSlice.reducer
