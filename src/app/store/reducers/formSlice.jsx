import { createSlice } from "@reduxjs/toolkit";
import { set } from "react-hook-form";

const initialState = {
  pickup_address: '',
  pickup_address_discreetly: false,
  property_type: '',
  bed_room: '',
  place_type: [],
  pick_flights:"",
  pick_variation:[],
  pick_variation_meter:"",
  drop_address:"",

  drop_flights:"",
  drop_variation:[],
  drop_variation_meter:"",
  drop_place_type: [],
  calendar: {
    mode: "On",
    dates: [],
    range: "Exact date",
  },
  Inventory: [],
  ElectricityFitting:'',
  name:"",
  email:"",
  phone:"",
  additional_note:""
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setAddress(state, action) {
      state.pickup_address = action.payload;
    },
    setDiscreetly(state,action){
      state.pickup_address_discreetly = action.payload
    },
    setProperty(state, action) {
      state.property_type = action.payload;
    },
    setAboutPlace(state, action) {
      state.bed_room = action.payload;
    },
    setplaceDescription(state, action) {
      state.place_type = action.payload;
    },
    setpick_flights(state, action) {
      state.pick_flights = action.payload;
    },
    setpick_variation(state, action) {
      state.pick_variation = action.payload;
    },
    setpick_variation_meter(state, action) {
      state.pick_variation_meter = action.payload;
    },
    setmovingAddress(state, action) {
      state.drop_address = action.payload;
    },
      setdrop_flights(state, action) {
      state.drop_flights = action.payload;
    },
    setdrop_variation(state, action) {
      state.drop_variation = action.payload;
    },
    setdrop_variation_meter(state, action) {
      state.drop_variation_meter = action.payload;
    },
    setmovingPlaceDescription(state, action) {
      state.drop_place_type = action.payload;
    },
    setCalendar(state, action) {
      state.calendar = action.payload;
    },
    setInventory(state, action) {
      state.Inventory = action.payload;
    },
    setElectricity(state,action){
      state.ElectricityFitting = action.payload
    },
    setName(state,action){
      state.name = action.payload
    },
    setEmail(state,action){
      state.email = action.payload
    },
    setPhone(state,action){
      state.phone = action.payload
    },
    setNote(state,action){
      state.additional_note = action.payload
    }
  },
});

export const {
  setAddress,
  setDiscreetly,
  setProperty,
  setAboutPlace,
  setplaceDescription,
  setpick_flights,
  setpick_variation,
  setpick_variation_meter,
  setmovingAddress,
  setdrop_flights,
  setdrop_variation,
  setdrop_variation_meter,
  setmovingPlaceDescription,
  setCalendar,
  setInventory,
  setElectricity,
  setPhone,
  setEmail,
  setName,
  setNote,
} = formSlice.actions;
export default formSlice.reducer;
