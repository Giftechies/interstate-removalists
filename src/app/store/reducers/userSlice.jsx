

import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";
import {fetchUserlogin,fetchuserProfile} from "../../../data/formdata"



export const Userlogin = createAsyncThunk("userlogin/get",
    async(data,{rejectWithValue}) =>{
      try {
          const res = await fetchUserlogin(data)
          console.log(res.data);
          
        return res.data
        
      } catch (error) {
        return rejectWithValue(res?.data?.message || "Loging failed")
      }

    }
)

export const UserProfile = createAsyncThunk("userProfile/fetch",
    async(_,{rejectWithValue} )=>{
        try {
            const token = typeof window !== "undefined"? localStorage.getItem("authtoken"):null
            
      if (!token) {
        return rejectWithValue("No authentication token found");
      }

const res = await fetchuserProfile(token)


return res.data;

        } catch (error) {
            return rejectWithValue("failed to fetch user data")
        }
    }
)



const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        token:null,
        loading:false,
        error:null,
    },
    reducers:{
      logOutUser:(state)=>{
        state.user= null;
          state.token = null;
        localStorage.removeItem("authtoken")
        
      },
       setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    },
    extraReducers:(builder)=>{
      builder
      .addCase(Userlogin.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload
      })
      .addCase(Userlogin.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(Userlogin.pending,(state,action)=>{
        state.loading= true;
        state.error=null;
      })

    // fetch profile
    .addCase(UserProfile.pending,(state,action)=>{
      state.loading= true;
      state.error = null;
    })
    .addCase(UserProfile.fulfilled,(state,action)=>{
      state.loading=false;
      state.user=action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(UserProfile.rejected,(state,action)=>{
      state.loading=false;
      state.error = action.payload
    })
    }

})

export  const {setUser,logOutUser} = userSlice.actions
export default userSlice.reducer
