"use client";
import "./multi.css";
import FormSidebar from "./FormSidebar"
import { useForm } from "react-hook-form";
// import { button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "../stepper/stepper";
import Button from "../../link/Button";
import Backbutton from "@/components/link/Backbutton";
import {
  fetchPropertyData,
  fetchVaritions,
  fetchinventory,
} from "../../../data/formdata";
import {
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
    setMsg
} from "../../../app/store/reducers/formSlice";
import Property from "../Property";
import Address from "../Address";
import AboutPlace from "../AboutPlace";
import PlaceDescription from "../PlaceDescripation";
import Calendar from "../Calendar";
import Inventory from "../Inventory";
import Electricity from "../Electricity"
import UserData from "../UserData"

export default function MultiStepForm() {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [propertyOptions, setpropertyOptions] = useState();
  const [variations, setvariations] = useState();
  const [inventory, setInventory] = useState();

  useEffect(() => {
    ;(async () => {
      const propertydata = await fetchPropertyData();
      const variationdata = await fetchVaritions();
      const inventorydata = await fetchinventory();

      setvariations(variationdata);
      setpropertyOptions(propertydata);
      setInventory(inventorydata);
    })();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const page = {
    Address: 1,
    Property: 2,
    AboutPlace: 3,
    PlaceDescription: 4,
    movingAddress: 5,
    movingPlaceDescription: 6,
    Calendar: 7,
    Inventory: 8,
    Electricity: 9,
    UserData: 10,
  };
  const step = [
    "Pickup Address",
    "Property",
    "About Place",
    "Place Description",
    "Moving Address",
    "Moving Place Description",
    "Moving Date",
    "Inventory",
    "Electricity",
    "UserData",
  ];

  const [currentStep, setCurrentStep] = useState(page.Address);

  const componentMap = {
    [page.Address]: (prop) => <Address moving="from" {...prop} />,
    [page.Property]: Property,
    [page.AboutPlace]: AboutPlace,
    [page.PlaceDescription]: (prop) => (
      <PlaceDescription moving="pickup" {...prop} />
    ),
    [page.movingAddress]: (prop) => <Address moving="to" {...prop} />,
    [page.movingPlaceDescription]: (prop) => (
      <PlaceDescription moving="delivery" {...prop} />
    ),
    [page.Calendar]: (prop) => <Calendar {...prop} />,
    [page.Inventory]: Inventory,
    [page.Electricity]: Electricity,
    [page.UserData]: UserData,
  };

  const CurrentComponent = componentMap[currentStep];
  const totalSteps = Object.keys(page).length;
  const buttonText = currentStep === totalSteps ? "Submit" : "Next";

  const onSubmit = (data) => {
    if (currentStep === page.Address) {
      dispatch(setAddress(data.pickupAddress));
      dispatch(setDiscreetly(data.pickupAddress_discreetly));
    } else if (currentStep === page.Property) {
      dispatch(setProperty(data.property));
    } else if (currentStep === page.AboutPlace) {
      dispatch(setAboutPlace(data.bedrooms));
    } else if (currentStep === page.PlaceDescription) {
      console.log(data.placeDescription, "dfsdf>>>>>>>>>>");

      dispatch(setplaceDescription(data.placeDescription.place));
      dispatch(setpick_flights(data.placeDescription.stairs));
      dispatch(setpick_variation(data.placeDescription.street));
      dispatch(setpick_variation_meter(data.placeDescription.street_distance));
    } else if (currentStep === page.movingAddress) {
      dispatch(setmovingAddress(data.deliveryAddress));
    } else if (currentStep === page.movingPlaceDescription) {
      dispatch(setmovingPlaceDescription(data.movingPlaceDescription.place));
      dispatch(setdrop_flights(data.movingPlaceDescription.stairs));
      dispatch(setdrop_variation(data.movingPlaceDescription.street));
      dispatch(setdrop_variation_meter(data.movingPlaceDescription.street_distance));
    } else if (currentStep === page.Calendar) {
      console.log("Form Data in Redux:", formData);
    }else if(currentStep === page.UserData){
      dispatch(setName(data.name))
      dispatch(setEmail(data.email))
      dispatch(setPhone(data.ph_no))
      dispatch(setMsg(data.adidition_message|| ''))
      dispatch(setNote(data.additional_note  || ""))
      const dd = {...data}
      console.log(data);
      
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log("Form Data in Redux:", formData);
  }, [formData]);

  const backHandler = () => {
    if (currentStep > page.Address) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className=" w-full  p-4 lg:p-20 ">
        <div className="container mt-20  grid grid-cols-1  gap-10 lg:grid-cols-[4fr_2fr]">
          <main className="multi-step-form innershadow relative  rounded-md p-6 ">
            <header className="absolute top-10">
              <Stepper
                step={step}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                className=" hidden transition-all duration-300 ease-linear xl:flex "
              />
            </header>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 lg:mt-20 "
            >
              <CurrentComponent
                register={register}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
                propertyOptions={propertyOptions}
                variantsData={variations}
                inventorydata={inventory}
              />
              <div className=" flex gap-8">
                {currentStep > page.Address && (
                  <Backbutton text="Back" type="button" onClick={backHandler} />
                )}
                <Button type="submit" text={`${buttonText}`} />
              </div>
            </form>
          </main>
          <FormSidebar formData = {formData}/>

        
        </div>
      </div>
    </>
  );
}
