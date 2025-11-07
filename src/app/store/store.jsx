import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/formSlice";
import UserReducer from './reducers/userSlice'


export const store = configureStore({
  reducer: {
    form: formReducer,
    user:UserReducer
  
  },
});
