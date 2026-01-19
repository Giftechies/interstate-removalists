"use client";

import Image from "next/image";
import { useState } from "react";

export default function PlaceDescription({
  setValue,
  getValues,
  moving,
  variantsData,
}) {
  const place = Array.isArray(variantsData)
    ? variantsData
      .filter((item) => item.type.trim().toLowerCase() == "your place")
      .map((item) => ({ title: item.name }))
    : [];
  const street = Array.isArray(variantsData)
    ? variantsData
      .filter((item) => item.type.trim().toLowerCase() == "your street")
      .map((item) => ({ title: item.name }))
    : [];

  const currentKey =
    moving === "pickup" ? "placeDescription" : "movingPlaceDescription";
  const defaultValues = getValues(currentKey) || {};

  const [selectedPlace, setSelectedPlace] = useState(
    Array.isArray(defaultValues.place)
      ? defaultValues.place
      : defaultValues.place
        ? [defaultValues.place]
        : [],
  );
  const [selectedStreet, setSelectedStreet] = useState(
    defaultValues.street || [],
  );
  const [stairsFlights, setStairsFlights] = useState(
    defaultValues.stairs || "",
  );
  const [streetDistance, setStreetDistance] = useState(
    defaultValues.street_distance || "",
  );

  // Update form immediately on state change
  const updateForm = (newPlace, newStreet, newStairs, newStreetDistance) => {
    const formData = {
      place: newPlace,
      ...(newPlace.includes("Stairs") && { stairs: newStairs }),
      street: newStreet,
      ...(newStreet.length > 0 && { street_distance: newStreetDistance }),
    };
    setValue(currentKey, formData, { shouldValidate: true });
  };
  const [images,setImages] =useState({
    'Ground Floor':'/img/logo/ground.jpg',
    'Stairs':'/img/logo/stair.jpg',
    'Elevator':'/img/logo/elevator.jpg'

  })

  const SelectImage = images[selectedPlace.includes('Elevator')? "Elevator":selectedPlace];

  const handlePlaceClick = (title) => {
    let newSelected = [...selectedPlace]; // Start with a copy of the current state

    if (title === "Ground Floor") {
      // Case 1: Ground Floor toggle
      if (newSelected.includes("Ground Floor")) {
        // Deselect Ground Floor
        newSelected = newSelected.filter((item) => item !== "Ground Floor");
      } else {
        // Select Ground Floor, and deselect Stairs/Elevator
        newSelected = newSelected.filter(
          (item) => item !== "Stairs" && item !== "Elevator"
        );
        newSelected.push("Ground Floor");
      }
    } else if (title === "Stairs" || title === "Elevator") {
      // Case 2: Stairs or Elevator toggle
      if (newSelected.includes(title)) {
        // Deselect the item
        newSelected = newSelected.filter((item) => item !== title);
      } else {
        // Select the item, and deselect Ground Floor
        newSelected = newSelected.filter((item) => item !== "Ground Floor");
        newSelected.push(title);
      }
    }

    // The previous logic for toggling should handle other potential options,
    // but for the visible items (Ground Floor, Stairs, Elevator), the above
    // covers the desired mutual exclusivity.

    setSelectedPlace(newSelected);
    // Use the newSelected array to update the form state immediately
    updateForm(newSelected, selectedStreet, stairsFlights, streetDistance);
  };

  const handleStreetClick = (title) => {
    const newSelected = selectedStreet.includes(title)
      ? selectedStreet.filter((item) => item !== title)
      : [...selectedStreet, title];
    setSelectedStreet(newSelected);
    updateForm(selectedPlace, newSelected, stairsFlights, streetDistance);
  };

  return (
    <div className="place-description-form">
      <h2 className="formHeading">Describe the access to your {moving} property</h2>
      <p className="textSm text-zinc-400">
        Select all that apply and give details where possible.
      </p>

      {/* PLACE SECTION */}
      <section className="place mt-4  flex  gap-8 ">
       <div className="" >
         <span className="h6 font-medium">Your place</span>
        <div className="mt-2 flex flex-wrap gap-4">
          {place?.map((item, index) => (
            <div
              key={index}
              onClick={() => handlePlaceClick(item?.title)}
              className={`flex cursor-pointer items-center gap-2 rounded-full border px-3 py-[6px] duration-300 
                ${selectedPlace.includes(item?.title)
                  ? "bg-gray-600 text-white-1"
                  : "hover:text-white hover:bg-gray-300"
                }`}
            >
             
              <label className="textSm">{item?.title}</label>
            </div>
          ))}
        </div>

        {/* image and flight input */}
       <div className="flex gap-10 mt-6" >
        {/* image */}
        {
        SelectImage &&   <div className=" h-40 w-60  rounded overflow-hidden  flex-shrink-0 ">
       <Image
       src={SelectImage}
       width={250}
       height={250}
       alt="place image"
       className="h-full w-full object-cover object-center "
       />
       </div>
        }

        {/* STAIRS INPUT */}
        {selectedPlace.includes("Stairs") && (
          <div className="mt-4 text-gray-700">
            <div className="mt-2 flex items-center gap-1  ">
              <input
                type="number"
                value={stairsFlights}
                placeholder="Number of flights"
                onChange={(e) => {
                  const val = e.target.value;
                  setStairsFlights(val);
                }}
                onBlur={() =>
                  updateForm(
                    selectedPlace,
                    selectedStreet,
                    stairsFlights,
                    streetDistance,
                  )
                }
                min={1}
                className="rounded-sm border-black border py-1 px-3 textSm  outline-0"
              />
              <span className="group relative flex items-center justify-center  w-5 h-5 cursor-pointer rounded-full bg-gray-400 text-center  text-white-1">
                i
                <span className="absolute left-full top-1/2 ml-1  hidden w-96 -translate-y-1/2 whitespace-nowrap text-wrap rounded border bg-white-1 p-1 text-black-1  group-hover:block text-[12px]">
                  A flight of stairs (8 or more steps) is a set of steps that
                  connects one level, floor, or landing to another.
                </span>
              </span>
            </div>
            <span className="mt-4  textSm block">
              For example: A 2-story home usually has 1-2 flights of stairs
              inside.
            </span>
          </div>
        )}
       </div>
       </div>
      
      </section>

      {/* STREET SECTION */}
      <section className="street mt-4">
        <span className="h6 font-medium ">Your street</span>
        <div className=" mt-2 flex flex-wrap gap-4">
          {street.map((item, index) => (
            <div
              key={index}
              onClick={() => handleStreetClick(item.title)}
              className={`flex textSm cursor-pointer items-center gap-2 rounded-full border px-3 py-[6px] 
                ${selectedStreet.includes(item?.title)
                  ? "bg-gray-600 text-white-1"
                  : "hover:bg-gray-300 "
                }`}
            >
              {item?.title}
            </div>
          ))}
        </div>
        {selectedStreet?.length > 0 && (
          <div className="relative w-full flex gap-1 items-center  mt-4">
            <input
              type="number"
              placeholder="Truck parking distance to property"
              onChange={(e) => {
                const val = e.target.value;
                setStreetDistance(val);
              }}
              onBlur={() =>
                updateForm(
                  selectedPlace,
                  selectedStreet,
                  stairsFlights,
                  streetDistance,
                )
              }
              value={streetDistance}
              className="border-black border w-[19rem] py-1 px-3 rounded-sm textSm "
            />


            {/* <label className="absolute right-0 text-black-3  top-1/2 -translate-y-1/2 ">
              meter
            </label> */}
            <span className="group relative flex items-center justify-center  w-5 h-5 cursor-pointer rounded-full bg-gray-400 text-center  text-white-1">
              i
              <span className="absolute left-full top-1/2 ml-2  hidden text-[12px] w-80 -translate-y-1/2 whitespace-nowrap text-wrap rounded border bg-white-1 p-1 text-black-1 group-hover:block">
                Distance from your street to the moving truck <br/> (in meters)
              </span>
            </span>
          </div>
        )}
      </section>
    </div>
  );
}
