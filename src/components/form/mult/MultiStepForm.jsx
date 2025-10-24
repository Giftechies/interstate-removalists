"use client";
import "./multi.css";

import Property from "../Property";
import Address from "../Address";
import AboutPlace from "../AboutPlace";
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
} from "../Action/formdata";

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
} from "../../../app/store/reducers/formSlice";
import PlaceDescription from "../PlaceDescripation";
import Calendar from "../Calendar";
import Inventory from "../Inventory";

export default function MultiStepForm() {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [propertyOptions, setpropertyOptions] = useState();
  const [variations, setvariations] = useState();
  const [inventory, setInventory] = useState();

  useEffect(() => {
    (async () => {
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
                  // <Button text='back' type="button" onClick={backHandler}  />
                )}
                <Button type="submit" text={`${buttonText}`} />
              </div>
            </form>
          </main>

          <aside className=" sticky top-30 hidden h-fit  overflow-y-auto  self-start lg:block">
            {formData?.pickup_address? (
              <div className=" innershadow  mx-auto w-full p-8 ">
                <span className="h4">Your Move</span>
                <h5 className="h5 font-medium mt-2 ">Pickup & delivery</h5>
                <div className="pick mt-3">
                  {formData?.pickup_address && (
                    <h3 className=" address h5 ">
                      {formData?.pickup_address}
                    </h3>
                  )}
              
                    <div className="  mx-4">
                    {formData?.property_type && (
                      <span className="  mr-4">
                        {formData?.property_type}
                      </span>
                    )}{" "}
                    {formData?.bed_room && (
                      <span className=" ">
                        {formData?.bed_room} Bedroom
                      </span>
                    )}
                 
                  </div>
                  <div className="w-full" >
                       <h4 className="place">
                      {formData?.place_type?.map(
                        (p, index) => (
                          <span
                            key={index}
                            className="mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5 py-0.5"
                          >
                            {p === "Stairs"
                              ? `Stairs-${formData?.pick_flights} Flights`
                              : p}
                          </span>
                        ),
                      )}

                  
                    </h4>
                    <h4 className="street" >   
                       {formData?.pick_variation.map(
                        (p, index) => (
                          <span
                            key={index}
                            className=" py-.5 mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5  "
                          >
                            {p}
                          </span>
                        ),
                      )}</h4>
                      {formData?.pick_variation_meter && (
                        <span className=" py-.5 mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5  ">
                          {formData?.pick_variation_meter} m
                        </span>
                      )}
                  </div>
             
                </div>
                {formData?.drop_address && (
                  <div className="delivery mt-6   border-b-2 border-black-1 pb-4">
                    {formData?.drop_address && (
                      <h3 className=" address text-[18px] ">
                        {formData?.drop_address}
                      </h3>
                    )}

                    <div className=" mx-4">
                      <h4 className="place">
                        {formData?.drop_place_type?.map(
                          (p, index) => (
                            <span
                              key={index}
                              className="mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5 py-0.5"
                            >
                              {p === "Stairs"
                                ? `Stairs-${formData?.drop_flights} Flights `
                                : p}
                            </span>
                          ),
                        )}

                        {formData?.drop_variation?.map(
                          (p, index) => (
                            <span
                              key={index}
                              className=" py-.5 mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5  "
                            >
                              {p}
                            </span>
                          ),
                        )}
                      </h4>
                    </div>
                  </div>
                )}

                {/* {formData?.calendar?.dates && (
                  <div className="date">
                    {formData?.calendar?.dates && (
                      <div className="flex justify-between">
                        <span className="">Pickup date</span>
                        <span>{formData?.calendar?.dates}</span>
                      </div>
                    )}
                  </div>
                )} */}
              </div>
            ) : (
              ""
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
