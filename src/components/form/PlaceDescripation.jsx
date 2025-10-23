"use client";

import { useState } from "react";

export default function PlaceDescription({
  register,
  errors,
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

  const handlePlaceClick = (title) => {
    let newSelected;
    if (title === "Ground floor") {
      newSelected = ["Ground floor"];
    } else {
      const withoutGround = selectedPlace.filter(
        (item) => item !== "Ground floor",
      );
      newSelected = withoutGround.includes(title)
        ? withoutGround.filter((item) => item !== title)
        : [...withoutGround, title];
    }
    setSelectedPlace(newSelected);
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
      <h2 className="h2">Describe the access to your {moving} property</h2>
      <p className=" text-zinc-400">
        Select all that apply and give details where possible.
      </p>

      {/* PLACE SECTION */}
      <section className="place mt-6">
        <span className=" h5">Your place</span>
        <div className="mt-4 flex flex-wrap gap-4">
          {place?.map((item, index) => (
            <div
              key={index}
              onClick={() => handlePlaceClick(item?.title)}
              className={`flex cursor-pointer items-center gap-2 rounded-full border px-6 py-2 duration-300 
                ${
                  selectedPlace.includes(item?.title)
                    ? "bg-gray-600 text-white-1"
                    : "hover:text-white hover:bg-gray-300"
                }`}
            >
              <label className="text-sm">{item?.title}</label>
            </div>
          ))}
        </div>

        {/* STAIRS INPUT */}
        {selectedPlace.includes("Stairs") && (
          <div className="mt-4 text-gray-700">
            <div className="mt-2 flex items-center gap-2">
              <input
                type="number"
                value={stairsFlights}
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
                className="border-black border-b pb-1 outline-0"
              />
              <span className="group relative inline-block size-6 cursor-pointer rounded-full bg-gray-400 text-center text-[14px] text-white-1">
                i
                <span className="absolute left-full top-1/2 ml-2  hidden w-96 -translate-y-1/2 whitespace-nowrap text-wrap rounded border bg-white-1 p-1 text-black-1 shadow group-hover:block">
                  A flight of stairs (8 or more steps) is a set of steps that
                  connects one level, floor, or landing to another.
                </span>
              </span>
            </div>
            <span className="mt-4 block">
              For example: A 2-story home usually has 1-2 flights of stairs
              inside.
            </span>
          </div>
        )}
      </section>

      {/* STREET SECTION */}
      <section className="street mt-6">
        <span className="h5 ">Your street</span>
        <div className=" mt-4 flex flex-wrap gap-4">
          {street.map((item, index) => (
            <div
              key={index}
              onClick={() => handleStreetClick(item.title)}
              className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 
                ${
                  selectedStreet.includes(item?.title)
                    ? "bg-gray-600 text-white-1"
                    : "hover:bg-gray-300 "
                }`}
            >
              {item?.title}
            </div>
          ))}
        </div>
        {selectedStreet?.length > 0 && (
          <div className="relative w-full">
            <input
              type="number"
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
              className="border-black border-b pb-1 outline-0"
            />
            <label className="absolute right-0  top-1/2 -translate-y-1/2 ">
              m2
            </label>
          </div>
        )}
      </section>
    </div>
  );
}
