

import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { fetchUserlogin, fetchuserProfile } from "../../../data/formdata"



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



const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: "test",
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logOutUser: (state) => {
      state.user = null;
      state.token = null;
      if(typeof window !== "undefined"){
      localStorage.removeItem("authToken")
      };

    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(Userlogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(Userlogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;    
      })
      .addCase(Userlogin.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      // fetch profile
      .addCase(UserProfile.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(UserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
  }

})

export const { setUser, logOutUser } = userSlice.actions
export default userSlice.reducer
